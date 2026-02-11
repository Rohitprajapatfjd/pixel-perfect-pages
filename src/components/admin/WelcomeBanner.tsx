import welcomeImg from "@/assets/admin/welcome-illustration.png";

const WelcomeBanner = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary via-primary-dark to-primary-darker p-8 text-primary-foreground">
      <div className="relative z-10 max-w-md">
        <h1 className="text-3xl font-bold italic leading-tight">
          Good Morning Nishita
        </h1>
        <p className="mt-2 text-sm text-primary-foreground/80">
          You have 75 new applications. It is a lot of work for today! So lets start.
        </p>
        <button className="mt-5 rounded-lg border border-primary-foreground/30 bg-primary-foreground/10 px-5 py-2 text-sm font-semibold text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground/20 transition-colors">
          Review It
        </button>
      </div>

      {/* Decorative circles */}
      <div className="absolute -right-8 -top-8 h-48 w-48 rounded-full bg-primary-foreground/5" />
      <div className="absolute right-16 top-4 h-32 w-32 rounded-full bg-primary-foreground/5" />

      {/* Illustration */}
      <img
        src={welcomeImg}
        alt="Welcome"
        className="absolute right-6 bottom-0 h-[180px] w-auto object-contain"
      />
    </div>
  );
};

export default WelcomeBanner;
