import { FormEvent, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { UserRole } from "@/types/ticket";

const palette = {
  primary: "#0C1892",
  secondary: "#2E59D2",
  surface: "#ECF3FA",
  accent: "#2CCF3C",
};

const RoleAuthPage = () => {
  const { login, register } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const fromState = location.state as { from?: { pathname?: string } };

  const [isSignUp, setIsSignUp] = useState(false);
  const [role, setRole] = useState<UserRole>("admin");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const resolveDestination = (targetRole: UserRole) =>
    fromState?.from?.pathname || (targetRole === "merchant" ? "/merchant" : "/admin");

  const handleSignIn = (event: FormEvent) => {
    event.preventDefault();
    setError("");

    const didSucceed = login(email.trim().toLowerCase(), password, role);
    if (!didSucceed) {
      setError("Use admin@gmail.com and any password.");
      return;
    }

    navigate(resolveDestination(role), { replace: true });
  };

  const handleSignUp = (event: FormEvent) => {
    event.preventDefault();
    setError("");

    const didRegister = register(name.trim() || "Demo User", email, password, role);
    if (!didRegister) {
      setError("Account already exists for this role. Please sign in.");
      return;
    }

    navigate(resolveDestination(role), { replace: true });
  };

  return (
    <section className="min-h-screen px-4 py-8 md:px-6" style={{ backgroundColor: palette.surface }}>
      <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div className="relative min-h-[640px] md:grid md:grid-cols-2">
          <div className="relative overflow-hidden p-8 sm:p-10">
            <div className="mb-4 flex items-center gap-2 text-xs font-semibold text-slate-500">
              <div className="h-5 w-5 rounded border border-slate-300" />
              Diprella
            </div>

            <div className={`transition-all duration-500 ${isSignUp ? "opacity-0 pointer-events-none -translate-x-8" : "opacity-100 translate-x-0"}`}>
              <h2 className="mt-8 text-4xl font-bold" style={{ color: palette.secondary }}>Sign in to Diprella</h2>
              <p className="mt-3 text-sm text-slate-500">or use your email account:</p>

              <form onSubmit={handleSignIn} className="mt-8 space-y-4">
                <div>
                  <select
                    value={role}
                    onChange={(event) => setRole(event.target.value as UserRole)}
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm"
                  >
                    <option value="admin">Admin</option>
                    <option value="merchant">Merchant</option>
                  </select>
                </div>
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
                  className="mt-2 rounded-full px-10 py-3 text-sm font-bold tracking-[0.2em] text-white"
                  style={{ backgroundColor: palette.secondary }}
                >
                  SIGN IN
                </button>
              </form>
            </div>

            <div className={`absolute inset-0 p-8 sm:p-10 transition-all duration-500 ${isSignUp ? "opacity-100 translate-x-0" : "opacity-0 pointer-events-none translate-x-8"}`}>
              <div className="mb-4 flex items-center gap-2 text-xs font-semibold text-slate-500">
                <div className="h-5 w-5 rounded border border-slate-300" />
                Diprella
              </div>
              <h2 className="mt-8 text-4xl font-bold" style={{ color: palette.secondary }}>Create Account</h2>
              <p className="mt-3 text-sm text-slate-500">Use your details for registration:</p>

              <form onSubmit={handleSignUp} className="mt-8 space-y-4">
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Name"
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm"
                  required
                />
                <select
                  value={role}
                  onChange={(event) => setRole(event.target.value as UserRole)}
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm"
                >
                  <option value="admin">Admin</option>
                  <option value="merchant">Merchant</option>
                </select>
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
                  className="mt-2 rounded-full px-10 py-3 text-sm font-bold tracking-[0.2em] text-white"
                  style={{ backgroundColor: palette.secondary }}
                >
                  SIGN UP
                </button>
              </form>
            </div>
          </div>

          <div
            className={`absolute bottom-0 right-0 top-0 hidden w-1/2 overflow-hidden p-10 text-white transition-transform duration-500 md:block ${isSignUp ? "translate-x-0" : "-translate-x-full"}`}
            style={{ background: `linear-gradient(155deg, ${palette.accent}, #2ab7c4)` }}
          >
            <div className="absolute -right-20 -top-10 h-56 w-56 rounded-full bg-white/10" />
            <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-white/10" />
            <h3 className="mt-36 text-5xl font-bold">Welcome Back!</h3>
            <p className="mt-4 max-w-xs text-lg text-white/90">To keep connected with us please login with your personal info</p>
            <button
              type="button"
              onClick={() => setIsSignUp(false)}
              className="mt-10 rounded-full border border-white px-12 py-3 text-sm font-semibold tracking-[0.2em]"
            >
              SIGN IN
            </button>
          </div>

          <div
            className={`absolute bottom-0 left-0 top-0 hidden w-1/2 overflow-hidden p-10 text-white transition-transform duration-500 md:block ${isSignUp ? "translate-x-full" : "translate-x-0"}`}
            style={{ background: `linear-gradient(155deg, ${palette.accent}, #2ab7c4)` }}
          >
            <div className="absolute -right-20 -top-10 h-56 w-56 rounded-full bg-white/10" />
            <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-white/10" />
            <h3 className="mt-36 text-5xl font-bold">Hello, Friend!</h3>
            <p className="mt-4 max-w-xs text-lg text-white/90">Enter your personal details and start journey with us</p>
            <button
              type="button"
              onClick={() => setIsSignUp(true)}
              className="mt-10 rounded-full border border-white px-12 py-3 text-sm font-semibold tracking-[0.2em]"
            >
              SIGN UP
            </button>
          </div>

          <div className="flex justify-center gap-3 border-t p-4 md:hidden">
            <button
              type="button"
              onClick={() => setIsSignUp(false)}
              className={`rounded-full px-6 py-2 text-xs font-semibold tracking-widest ${!isSignUp ? "text-white" : "text-slate-700"}`}
              style={{ backgroundColor: !isSignUp ? palette.secondary : "#e2e8f0" }}
            >
              SIGN IN
            </button>
            <button
              type="button"
              onClick={() => setIsSignUp(true)}
              className={`rounded-full px-6 py-2 text-xs font-semibold tracking-widest ${isSignUp ? "text-white" : "text-slate-700"}`}
              style={{ backgroundColor: isSignUp ? palette.secondary : "#e2e8f0" }}
            >
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoleAuthPage;
