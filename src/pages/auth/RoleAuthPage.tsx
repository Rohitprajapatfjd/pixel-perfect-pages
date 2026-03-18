import { FormEvent, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import OtpVerificationModal from "@/components/auth/OtpVerificationModal";

type OtpFlow =
  | {
      type: "registration";
      firstName: string;
      email: string;
      password: string;
      mobile: string;
    }
  | {
      type: "mobile-login";
      mobile: string;
    };

const palette = {
  primary: "#0C1892",
  secondary: "#2E59D2",
  surface: "#ECF3FA",
  accent: "#2CCF3C",
};

const OTP_LENGTH = 6;
const OTP_RESEND_COOLDOWN = 30;
const DEMO_OTP = "123456";

const delay = (ms: number) => new Promise((resolve) => window.setTimeout(resolve, ms));

const RoleAuthPage = () => {
  const { login, loginWithMobile, register, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const fromState = location.state as { from?: { pathname?: string } };

  const [isSignUp, setIsSignUp] = useState(false);
  const [signInMethod, setSignInMethod] = useState<"email" | "mobile">("email");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("admin@gmail.com");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [info, setInfo] = useState("");

  const [otpFlow, setOtpFlow] = useState<OtpFlow | null>(null);
  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/admin", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const getRoleFromEmail = (currentEmail: string): "admin" | "merchant" | null => {
    const normalizedEmail = currentEmail.trim().toLowerCase();

    if (normalizedEmail === "admin@gmail.com") return "admin";
    if (normalizedEmail === "user@gmail.com") return "merchant";

    return null;
  };

  const resolveDestination = (role: "admin" | "merchant") => {
    const requestedPath = fromState?.from?.pathname;

    if (!requestedPath) {
      return role === "admin" ? "/admin" : "/merchant";
    }

    if (role === "admin" && requestedPath.startsWith("/admin")) return requestedPath;
    if (role === "merchant" && requestedPath.startsWith("/merchant")) return requestedPath;

    return role === "admin" ? "/admin" : "/merchant";
  };

  const validateMobile = (value: string) => /^\d{10,15}$/.test(value.trim());

  const sendOtp = async (recipient: string) => {
    await delay(700);
    setInfo(`OTP sent to ${recipient}. Use ${DEMO_OTP} for this demo flow.`);
    return true;
  };

  const resetFeedback = () => {
    setError("");
    setInfo("");
  };

  const openOtpForFlow = async (nextFlow: OtpFlow, recipient: string) => {
    resetFeedback();
    const sent = await sendOtp(recipient);

    if (!sent) {
      setError("Unable to send OTP right now. Please try again.");
      return;
    }

    setOtpFlow(nextFlow);
    setIsOtpModalOpen(true);
  };

  const handleSignIn = async (event: FormEvent) => {
    event.preventDefault();
    resetFeedback();

    const role = getRoleFromEmail(email);
    if (!role) {
      setError("Use admin@gmail.com for admin or user@gmail.com for merchant.");
      return;
    }

    const didSucceed = await login(email.trim().toLowerCase(), password);
    if (!didSucceed) {
      setError("Use admin@gmail.com for admin or user@gmail.com for merchant.");
      return;
    }

    navigate(resolveDestination(role), { replace: true });
  };

  const handleSignUp = async (event: FormEvent) => {
    event.preventDefault();
    resetFeedback();

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!validateMobile(mobile)) {
      setError("Please enter a valid mobile number (10 to 15 digits).");
      return;
    }

    await openOtpForFlow(
      {
        type: "registration",
        firstName: firstName.trim() || "Demo User",
        email: email.trim().toLowerCase(),
        password,
        mobile: mobile.trim(),
      },
      mobile.trim(),
    );
  };

  const handleMobileOtpRequest = async () => {
    resetFeedback();

    if (!validateMobile(mobile)) {
      setError("Please enter a valid mobile number (10 to 15 digits).");
      return;
    }

    await openOtpForFlow(
      {
        type: "mobile-login",
        mobile: mobile.trim(),
      },
      mobile.trim(),
    );
  };

  const otpTitle = useMemo(() => {
    if (otpFlow?.type === "registration") return "Verify your registration";
    return "Verify mobile login";
  }, [otpFlow]);

  const otpDescription = useMemo(() => {
    if (!otpFlow) return "Enter the OTP sent to your mobile number.";
    return otpFlow.type === "registration"
      ? `Enter the ${OTP_LENGTH}-digit OTP sent to +${otpFlow.mobile} to complete account creation.`
      : `Enter the ${OTP_LENGTH}-digit OTP sent to +${otpFlow.mobile} to sign in.`;
  }, [otpFlow]);

  const handleOtpVerify = async (enteredOtp: string) => {
    if (!otpFlow) {
      return { success: false, message: "OTP session expired. Please try again." };
    }

    await delay(600);

    if (enteredOtp !== DEMO_OTP) {
      return { success: false, message: "Invalid OTP. Please check and try again." };
    }

    if (otpFlow.type === "registration") {
      const didRegister = await register(otpFlow.firstName, otpFlow.email, otpFlow.password);
      if (!didRegister) {
        return { success: false, message: "Account already exists. Please sign in." };
      }

      setIsOtpModalOpen(false);
      setOtpFlow(null);
      navigate("/admin", { replace: true });
      return { success: true, message: "Registration verified successfully." };
    }

    const didLogin = await loginWithMobile(otpFlow.mobile);
    if (!didLogin) {
      return { success: false, message: "Unable to login with mobile number." };
    }

    setIsOtpModalOpen(false);
    setOtpFlow(null);
    navigate(resolveDestination("merchant"), { replace: true });
    return { success: true, message: "Login verified successfully." };
  };

  const handleOtpResend = async () => {
    if (!otpFlow) {
      return { success: false, message: "OTP session expired. Start again." };
    }

    const recipient = otpFlow.mobile;
    const isSent = await sendOtp(recipient);

    if (!isSent) {
      return { success: false, message: "Unable to resend OTP right now." };
    }

    return { success: true, message: "A new OTP has been sent." };
  };

  const renderFeedback = () => (
    <>
      {error && <p className="text-sm text-red-600">{error}</p>}
      {info && <p className="text-sm text-green-600">{info}</p>}
    </>
  );

  const renderSignInForm = () => {
    if (signInMethod === "mobile") {
      return (
        <div className="mt-8 space-y-4">
          <input
            type="tel"
            value={mobile}
            onChange={(event) => setMobile(event.target.value.replace(/\D/g, ""))}
            placeholder="Mobile Number"
            className="w-full rounded-md border border-[#dfe7f3] bg-[#f7fafe] px-4 py-3 text-sm outline-none focus:border-[#2E59D2]"
            required
          />
          {renderFeedback()}
          <button
            type="button"
            onClick={handleMobileOtpRequest}
            className="rounded-full px-12 py-3 text-sm font-bold tracking-[0.1em] text-white"
            style={{ backgroundColor: palette.secondary }}
          >
            SEND OTP
          </button>
        </div>
      );
    }

    return (
      <form onSubmit={handleSignIn} className="mt-8 space-y-4">
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email"
          className="w-full rounded-md border border-[#dfe7f3] bg-[#f7fafe] px-4 py-3 text-sm outline-none focus:border-[#2E59D2]"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
          className="w-full rounded-md border border-[#dfe7f3] bg-[#f7fafe] px-4 py-3 text-sm outline-none focus:border-[#2E59D2]"
          required
        />
        {renderFeedback()}
        <button
          type="submit"
          className="rounded-full px-12 py-3 text-sm font-bold tracking-[0.2em] text-white"
          style={{ backgroundColor: palette.secondary }}
        >
          SIGN IN
        </button>
      </form>
    );
  };

  const renderSignUpForm = () => (
    <form onSubmit={handleSignUp} className="mt-8 space-y-4">
      <input
        type="text"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
        placeholder="First Name"
        className="w-full rounded-md border border-[#dfe7f3] bg-[#f7fafe] px-4 py-3 text-sm outline-none focus:border-[#2E59D2]"
        required
      />
      <input
        type="text"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
        placeholder="Last Name"
        className="w-full rounded-md border border-[#dfe7f3] bg-[#f7fafe] px-4 py-3 text-sm outline-none focus:border-[#2E59D2]"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Email"
        className="w-full rounded-md border border-[#dfe7f3] bg-[#f7fafe] px-4 py-3 text-sm outline-none focus:border-[#2E59D2]"
        required
      />
      <input
        type="tel"
        value={mobile}
        onChange={(event) => setMobile(event.target.value.replace(/\D/g, ""))}
        placeholder="Mobile Number"
        className="w-full rounded-md border border-[#dfe7f3] bg-[#f7fafe] px-4 py-3 text-sm outline-none focus:border-[#2E59D2]"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Password"
        className="w-full rounded-md border border-[#dfe7f3] bg-[#f7fafe] px-4 py-3 text-sm outline-none focus:border-[#2E59D2]"
        required
      />
      <input
        type="password"
        value={confirmPassword}
        onChange={(event) => setConfirmPassword(event.target.value)}
        placeholder="Confirm Password"
        className="w-full rounded-md border border-[#dfe7f3] bg-[#f7fafe] px-4 py-3 text-sm outline-none focus:border-[#2E59D2]"
        required
      />
      {renderFeedback()}
      <button
        type="submit"
        className="rounded-full px-12 py-3 text-sm font-bold tracking-[0.2em] text-white"
        style={{ backgroundColor: palette.secondary }}
      >
        SIGN UP
      </button>
    </form>
  );

  return (
    <>
      <section
        className="hidden h-[100dvh] w-full md:flex items-center justify-center overflow-hidden px-4 py-10"
        style={{ backgroundColor: palette.surface }}
      >
        <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-2xl border border-[#d9e3f2] bg-white shadow-[0_20px_45px_rgba(12,24,146,0.18)] md:min-h-[560px]">
          <div className="grid min-h-[560px] md:grid-cols-2">
            <div className="relative p-8 sm:p-10 md:p-12">
              <div className="mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Admin Access</div>

              <div className={`transition-all duration-500 ${isSignUp ? "pointer-events-none opacity-0 -translate-y-4" : "opacity-100 translate-y-0"}`}>
                <h1 className="text-3xl font-bold sm:text-4xl" style={{ color: palette.secondary }}>
                  Sign in
                </h1>
                <p className="mt-2 text-sm text-slate-500">Use your account credentials or mobile OTP to continue.</p>

                <div className="mt-5 flex gap-2 rounded-lg border border-[#dfe7f3] bg-[#f7fafe] p-1">
                  <button
                    type="button"
                    className={`flex-1 rounded-md px-3 py-2 text-sm font-semibold ${
                      signInMethod === "email" ? "bg-white text-[#2E59D2] shadow" : "text-slate-500"
                    }`}
                    onClick={() => {
                      setSignInMethod("email");
                      resetFeedback();
                    }}
                  >
                    Email Login
                  </button>
                  <button
                    type="button"
                    className={`flex-1 rounded-md px-3 py-2 text-sm font-semibold ${
                      signInMethod === "mobile" ? "bg-white text-[#2E59D2] shadow" : "text-slate-500"
                    }`}
                    onClick={() => {
                      setSignInMethod("mobile");
                      resetFeedback();
                    }}
                  >
                    Login with Mobile
                  </button>
                </div>

                {renderSignInForm()}
              </div>
              <div className="mt-8 flex gap-3 md:hidden">
                <button
                  type="button"
                  onClick={() => setIsSignUp(false)}
                  className="rounded-full px-6 py-2 text-xs font-semibold tracking-[0.2em] text-white"
                  style={{ backgroundColor: isSignUp ? palette.primary : palette.secondary }}
                >
                  SIGN IN
                </button>
                <button
                  type="button"
                  onClick={() => setIsSignUp(true)}
                  className="rounded-full px-6 py-2 text-xs font-semibold tracking-[0.2em] text-white"
                  style={{ backgroundColor: isSignUp ? palette.secondary : palette.primary }}
                >
                  SIGN UP
                </button>
              </div>
            </div>

            <div
              className={`hidden md:block absolute top-0 bottom-0 w-1/2 text-white transition-transform duration-500 ${
                isSignUp ? "translate-x-0" : "translate-x-full"
              }`}
              style={{
                left: 0,
                background: `linear-gradient(140deg, ${palette.primary}, ${palette.secondary})`,
              }}
            >
              <div className="relative h-full overflow-hidden p-12">
                <div className="absolute -right-20 -top-16 h-64 w-64 rounded-full" style={{ backgroundColor: `${palette.accent}66` }} />
                <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-white/10" />

                <div className="relative mt-40">
                  <h2 className="text-5xl font-bold">{isSignUp ? "Welcome Back!" : "Hello, Friend!"}</h2>
                  <p className="mt-4 max-w-sm text-base text-white/85">
                    {isSignUp
                      ? "Already have an account? Sign in with your personal info to continue your workflow."
                      : "Enter your details and start your admin journey with secure access."}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSignUp((prev) => !prev);
                      resetFeedback();
                    }}
                    className="mt-10 rounded-full border border-white px-10 py-3 text-sm font-semibold tracking-[0.2em]"
                  >
                    {isSignUp ? "SIGN IN" : "SIGN UP"}
                  </button>
                </div>
              </div>
            </div>

            <div>
              <div className="relative">
                <div
                  className={`absolute inset-x-8 top-[32px] sm:inset-x-10 md:inset-x-12 transition-all duration-500 ${
                    isSignUp ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-4"
                  }`}
                >
                  <h1 className="text-3xl font-bold sm:text-4xl" style={{ color: palette.secondary }}>
                    Create account
                  </h1>
                  <p className="mt-2 text-sm text-slate-500">Create a new admin account. Verification is required.</p>

                  {renderSignUpForm()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="md:hidden min-h-screen w-full flex items-center justify-center px-4 py-6"
        style={{ backgroundColor: palette.surface }}
      >
        <div className="relative w-full max-w-6xl bg-white rounded-2xl shadow-[0_20px_45px_rgba(12,24,146,0.18)] overflow-hidden">
          <div className="p-8">
            <div className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Admin Access</div>

            {!isSignUp ? (
              <>
                <h1 className="text-3xl font-bold mb-2" style={{ color: palette.secondary }}>
                  Sign In
                </h1>
                <div className="mt-4 flex gap-2 rounded-lg border border-[#dfe7f3] bg-[#f7fafe] p-1">
                  <button
                    type="button"
                    className={`flex-1 rounded-md px-3 py-2 text-sm font-semibold ${
                      signInMethod === "email" ? "bg-white text-[#2E59D2] shadow" : "text-slate-500"
                    }`}
                    onClick={() => {
                      setSignInMethod("email");
                      resetFeedback();
                    }}
                  >
                    Email
                  </button>
                  <button
                    type="button"
                    className={`flex-1 rounded-md px-3 py-2 text-sm font-semibold ${
                      signInMethod === "mobile" ? "bg-white text-[#2E59D2] shadow" : "text-slate-500"
                    }`}
                    onClick={() => {
                      setSignInMethod("mobile");
                      resetFeedback();
                    }}
                  >
                    Mobile
                  </button>
                </div>
                {renderSignInForm()}
              </>
            ) : (
              <>
                <h1 className="text-3xl font-bold mb-2" style={{ color: palette.secondary }}>
                  Create Account
                </h1>
                {renderSignUpForm()}
              </>
            )}

            <button
              onClick={() => {
                setIsSignUp((prev) => !prev);
                resetFeedback();
              }}
              className="mt-6 w-full text-sm font-semibold text-blue-600"
            >
              {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
            </button>
          </div>
        </div>
      </section>

      <OtpVerificationModal
        open={isOtpModalOpen}
        onOpenChange={(open) => {
          setIsOtpModalOpen(open);
          if (!open) {
            setOtpFlow(null);
          }
        }}
        title={otpTitle}
        description={otpDescription}
        otpLength={OTP_LENGTH}
        resendCooldown={OTP_RESEND_COOLDOWN}
        onVerify={handleOtpVerify}
        onResend={handleOtpResend}
        helperText="Demo OTP for testing: 123456"
      />
    </>
  );
};

export default RoleAuthPage;
