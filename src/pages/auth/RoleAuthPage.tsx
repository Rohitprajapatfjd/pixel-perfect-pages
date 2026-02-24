import { FormEvent, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/context/AuthContext";
import { UserRole } from "@/types/ticket";

interface RoleAuthPageProps {
  role: "admin" | "merchant";
  mode: "login" | "register";
}

const palette = {
  primary: "#0C1892",
  secondary: "#2E59D2",
  surface: "#ECF3FA",
  accent: "#2CCF3C",
};

const RoleAuthPage = ({ role, mode }: RoleAuthPageProps) => {
  const { login, register } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [displayMode, setDisplayMode] = useState<"login" | "register">(mode);
  const [isSwitching, setIsSwitching] = useState(false);

  const destination = role === "admin" ? "/admin" : "/merchant";
  const fromState = location.state as { from?: { pathname?: string } };
  const redirectPath = fromState?.from?.pathname ?? destination;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setDisplayMode(mode);
  }, [mode]);

  const heading = useMemo(
    () => `${role.charAt(0).toUpperCase() + role.slice(1)} ${displayMode === "login" ? "Login" : "Registration"}`,
    [role, displayMode]
  );

  const switchMode = (nextMode: "login" | "register") => {
    if (nextMode === displayMode || isSwitching) return;
    setError("");
    setIsSwitching(true);
    setDisplayMode(nextMode);

    window.setTimeout(() => {
      navigate(`/${role}/${nextMode}`);
      setIsSwitching(false);
    }, 360);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setError("");

    const roleType = role as UserRole;
    const didSucceed =
      displayMode === "login"
        ? login(email.trim().toLowerCase(), password, roleType)
        : register(name.trim(), email, password, roleType);

    if (!didSucceed) {
      setError(
        displayMode === "login"
          ? `Invalid ${role} credentials. Please register first.`
          : `An account for this ${role} email already exists.`
      );
      return;
    }

    navigate(redirectPath, { replace: true });
  };

  const isLogin = displayMode === "login";

  return (
    <section className="min-h-screen px-4 py-8 md:px-10" style={{ backgroundColor: palette.surface }}>
      <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
        <div className="relative grid min-h-[680px] md:grid-cols-2">
          <motion.div
            className="absolute inset-y-0 hidden w-1/2 rounded-3xl md:block"
            style={{ background: `linear-gradient(135deg, ${palette.primary}, ${palette.secondary})` }}
            animate={{ x: isLogin ? "100%" : "0%" }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
          >
            <div className="relative h-full overflow-hidden rounded-3xl p-10 text-white">
              <div className="absolute -right-16 -top-14 h-56 w-56 rounded-full opacity-40" style={{ backgroundColor: palette.accent }} />
              <div className="absolute -bottom-20 -left-16 h-64 w-64 rounded-full opacity-30" style={{ backgroundColor: "#74a2ff" }} />
              <AnimatePresence mode="wait">
                <motion.div
                  key={displayMode}
                  initial={{ opacity: 0, rotateY: -15, x: 20 }}
                  animate={{ opacity: 1, rotateY: 0, x: 0 }}
                  exit={{ opacity: 0, rotateY: 15, x: -20 }}
                  transition={{ duration: 0.35 }}
                  className="relative flex h-full flex-col justify-center"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-white/80">Secure Access</p>
                  <h1 className="mt-6 text-4xl font-bold leading-tight">
                    {isLogin ? "Welcome Back!" : "Hello, Friend!"}
                  </h1>
                  <p className="mt-4 max-w-md text-sm text-white/85">
                    {isLogin
                      ? "To keep connected with us, login with your personal info."
                      : "Enter your details and start your journey with secure role-based access."}
                  </p>
                  <button
                    type="button"
                    onClick={() => switchMode(isLogin ? "register" : "login")}
                    className="mt-10 w-fit rounded-full border border-white/70 px-10 py-3 text-sm font-semibold tracking-[0.2em] text-white transition hover:bg-white/10"
                  >
                    {isLogin ? "SIGN UP" : "SIGN IN"}
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          <div className="order-2 p-6 sm:p-10 md:order-none md:col-start-1">
            <AnimatePresence mode="wait">
              {!isLogin && (
                <motion.div
                  key="register"
                  initial={{ opacity: 0, x: -35, rotateY: 20 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  exit={{ opacity: 0, x: 35, rotateY: -20 }}
                  transition={{ duration: 0.35 }}
                >
                  <p className="text-xs uppercase tracking-[0.18em]" style={{ color: palette.secondary }}>Role Based Auth</p>
                  <h2 className="mt-2 text-3xl font-semibold text-slate-900">{heading}</h2>
                  <p className="mt-2 text-sm text-slate-500">Create your {role} account to continue.</p>

                  <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                    <div>
                      <label className="mb-1 block text-sm font-medium text-slate-700">Full Name</label>
                      <input
                        required
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        className="w-full rounded-xl border border-slate-200 px-4 py-2.5 outline-none transition focus:border-transparent focus:ring-2"
                      />
                    </div>

                    <div>
                      <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
                      <input
                        required
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        className="w-full rounded-xl border border-slate-200 px-4 py-2.5 outline-none transition focus:border-transparent focus:ring-2"
                      />
                    </div>

                    <div>
                      <label className="mb-1 block text-sm font-medium text-slate-700">Password</label>
                      <input
                        required
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        className="w-full rounded-xl border border-slate-200 px-4 py-2.5 outline-none transition focus:border-transparent focus:ring-2"
                      />
                    </div>

                    {error && <p className="text-sm text-red-600">{error}</p>}

                    <button
                      type="submit"
                      className="w-full rounded-full px-4 py-3 text-sm font-semibold tracking-[0.16em] text-white transition hover:opacity-95"
                      style={{ background: `linear-gradient(135deg, ${palette.primary}, ${palette.secondary})` }}
                    >
                      SIGN UP
                    </button>
                  </form>

                  <button
                    type="button"
                    onClick={() => switchMode("login")}
                    className="mt-5 text-sm font-medium"
                    style={{ color: palette.secondary }}
                  >
                    Already have an account? Login
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="order-1 p-6 sm:p-10 md:order-none md:col-start-2">
            <AnimatePresence mode="wait">
              {isLogin && (
                <motion.div
                  key="login"
                  initial={{ opacity: 0, x: 35, rotateY: -20 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  exit={{ opacity: 0, x: -35, rotateY: 20 }}
                  transition={{ duration: 0.35 }}
                >
                  <p className="text-xs uppercase tracking-[0.18em]" style={{ color: palette.secondary }}>Role Based Auth</p>
                  <h2 className="mt-2 text-3xl font-semibold text-slate-900">{heading}</h2>
                  <p className="mt-2 text-sm text-slate-500">Use your {role} account to continue.</p>

                  <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                    <div>
                      <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
                      <input
                        required
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        className="w-full rounded-xl border border-slate-200 px-4 py-2.5 outline-none transition focus:border-transparent focus:ring-2"
                      />
                    </div>

                    <div>
                      <label className="mb-1 block text-sm font-medium text-slate-700">Password</label>
                      <input
                        required
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        className="w-full rounded-xl border border-slate-200 px-4 py-2.5 outline-none transition focus:border-transparent focus:ring-2"
                      />
                    </div>

                    {error && <p className="text-sm text-red-600">{error}</p>}

                    <button
                      type="submit"
                      className="w-full rounded-full px-4 py-3 text-sm font-semibold tracking-[0.16em] text-white transition hover:opacity-95"
                      style={{ background: `linear-gradient(135deg, ${palette.primary}, ${palette.secondary})` }}
                    >
                      SIGN IN
                    </button>
                  </form>

                  <button
                    type="button"
                    onClick={() => switchMode("register")}
                    className="mt-5 text-sm font-medium"
                    style={{ color: palette.secondary }}
                  >
                    Need a new account? Register
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoleAuthPage;
