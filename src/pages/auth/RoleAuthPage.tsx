import { FormEvent, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

const palette = {
  primary: "#0C1892",
  secondary: "#2E59D2",
  surface: "#ECF3FA",
  accent: "#2CCF3C",
};

const RoleAuthPage = () => {
  const { login, register, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const fromState = location.state as { from?: { pathname?: string } };

  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/admin", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const resolveDestination = () => fromState?.from?.pathname || "/admin";

  const handleSignIn = (event: FormEvent) => {
    event.preventDefault();
    setError("");

    const didSucceed = login(email.trim().toLowerCase(), password, "admin");
    if (!didSucceed) {
      setError("Use admin@gmail.com and any password.");
      return;
    }

    navigate(resolveDestination(), { replace: true });
  };

  const handleSignUp = (event: FormEvent) => {
    event.preventDefault();
    setError("");

    const didRegister = register(name.trim() || "Demo User", email.trim().toLowerCase(), password, "admin");
    if (!didRegister) {
      setError("Account already exists. Please sign in.");
      return;
    }

    navigate("/admin", { replace: true });
  };

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
              <h1 className="text-3xl font-bold sm:text-4xl" style={{ color: palette.secondary }}>Sign in</h1>
              <p className="mt-2 text-sm text-slate-500">Use your admin credentials to continue.</p>

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
                {error && <p className="text-sm text-red-600">{error}</p>}
                <button
                  type="submit"
                  className="rounded-full px-12 py-3 text-sm font-bold tracking-[0.2em] text-white"
                  style={{ backgroundColor: palette.secondary }}
                >
                  SIGN IN
                </button>
              </form>
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
            className={`hidden md:block absolute top-0 bottom-0 w-1/2 text-white transition-transform duration-500 ${isSignUp ? "translate-x-0" : "translate-x-full"}`}
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
                  onClick={() => setIsSignUp((prev) => !prev)}
                  className="mt-10 rounded-full border border-white px-10 py-3 text-sm font-semibold tracking-[0.2em]"
                >
                  {isSignUp ? "SIGN IN" : "SIGN UP"}
                </button>
              </div>
            </div>
          </div>

          <div className="">
            <div className="relative">
              <div className={`absolute inset-x-8 top-[76px] sm:inset-x-10 md:inset-x-12 transition-all duration-500 ${isSignUp ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-4"}`}>
              <h1 className="text-3xl font-bold sm:text-4xl" style={{ color: palette.secondary }}>Create account</h1>
              <p className="mt-2 text-sm text-slate-500">Create a new admin account.</p>

              <form onSubmit={handleSignUp} className="mt-8 space-y-4">
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Name"
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
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Password"
                  className="w-full rounded-md border border-[#dfe7f3] bg-[#f7fafe] px-4 py-3 text-sm outline-none focus:border-[#2E59D2]"
                  required
                />
                {error && <p className="text-sm text-red-600">{error}</p>}
                <button
                  type="submit"
                  className="rounded-full px-12 py-3 text-sm font-bold tracking-[0.2em] text-white"
                  style={{ backgroundColor: palette.secondary }}
                >
                  SIGN UP
                </button>
              </form>
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

      {/* ================= MOBILE VIEW ================= */}
      <div className="p-8">
        <div className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Admin Access
        </div>

        {!isSignUp ? (
          <>
            <h1 className="text-3xl font-bold mb-2" style={{ color: palette.secondary }}>
              Sign In
            </h1>
            <form onSubmit={handleSignIn} className="mt-6 space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full rounded-md border px-4 py-3 text-sm"
                required
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full rounded-md border px-4 py-3 text-sm"
                required
              />
              <button
                className="w-full rounded-full py-3 text-white font-semibold"
                style={{ backgroundColor: palette.secondary }}
              >
                SIGN IN
              </button>
            </form>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold mb-2" style={{ color: palette.secondary }}>
              Create Account
            </h1>
            <form onSubmit={handleSignUp} className="mt-6 space-y-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="w-full rounded-md border px-4 py-3 text-sm"
                required
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full rounded-md border px-4 py-3 text-sm"
                required
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full rounded-md border px-4 py-3 text-sm"
                required
              />
              <button
                className="w-full rounded-full py-3 text-white font-semibold"
                style={{ backgroundColor: palette.secondary }}
              >
                SIGN UP
              </button>
            </form>
          </>
        )}

        <button
          onClick={() => setIsSignUp((prev) => !prev)}
          className="mt-6 w-full text-sm font-semibold text-blue-600"
        >
          {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
        </button>
      </div>
    </div>
  </section>
  </>
  );
};

export default RoleAuthPage;
