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
    <section className="min-h-screen px-4 py-8 md:px-6" style={{ backgroundColor: palette.surface }}>
      <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
        <div className="grid min-h-[640px] md:grid-cols-2">
          <div className="relative z-10 p-8 sm:p-10">
            <div className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Diprella</div>

            <div
              className={`transition-all duration-500 ${
                isSignUp ? "pointer-events-none absolute inset-0 translate-x-8 opacity-0" : "translate-x-0 opacity-100"
              }`}
            >
              <h2 className="mt-6 text-4xl font-bold" style={{ color: palette.secondary }}>
                Sign in to Diprella
              </h2>
              <p className="mt-3 text-sm text-slate-500">Use your admin credentials.</p>

              <form onSubmit={handleSignIn} className="mt-8 space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Email"
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm"
                  required
                />
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Password"
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm"
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

            <div
              className={`transition-all duration-500 ${
                isSignUp ? "translate-x-0 opacity-100" : "pointer-events-none absolute inset-0 -translate-x-8 opacity-0"
              }`}
            >
              <h2 className="mt-6 text-4xl font-bold" style={{ color: palette.secondary }}>
                Create Account
              </h2>
              <p className="mt-3 text-sm text-slate-500">Create your admin account.</p>

              <form onSubmit={handleSignUp} className="mt-8 space-y-4">
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Name"
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm"
                  required
                />
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Email"
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm"
                  required
                />
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Password"
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm"
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
            className="relative hidden overflow-hidden p-10 text-white md:block"
            style={{ background: `linear-gradient(150deg, ${palette.primary}, ${palette.secondary})` }}
          >
            <div className="absolute -right-16 -top-14 h-56 w-56 rounded-full opacity-25" style={{ backgroundColor: palette.accent }} />
            <div className="absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-white/10" />

            <div className="relative mt-36">
              <h3 className="text-5xl font-bold">{isSignUp ? "Welcome Back!" : "Hello, Friend!"}</h3>
              <p className="mt-4 max-w-xs text-lg text-white/90">
                {isSignUp
                  ? "Already have account? Sign in with your details."
                  : "Create account to get started with your admin dashboard."}
              </p>
              <button
                type="button"
                onClick={() => setIsSignUp((prev) => !prev)}
                className="mt-10 rounded-full border border-white px-12 py-3 text-sm font-semibold tracking-[0.2em]"
              >
                {isSignUp ? "SIGN IN" : "SIGN UP"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoleAuthPage;
