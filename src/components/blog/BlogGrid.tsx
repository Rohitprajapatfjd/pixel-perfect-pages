const blogPosts = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  image: i === 0 ? "/img/networking.png" : null,
  title: "Learn the Markets, One Insight at a Time",
  description: "Stay Ahead of the Market Curve.",
}));

const BlogGrid = () => {
  return (
    <section className="py-12 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex gap-8">
          {/* Left - 3x3 grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8">
              {blogPosts.map((post) => (
                <div key={post.id} className="cursor-pointer group">
                  {/* Image placeholder */}
                  <div className="w-full aspect-[4/3] rounded-lg overflow-hidden mb-3">
                    {post.image ? (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-muted"></div>
                    )}
                  </div>
                  <p className="text-sm text-foreground font-medium leading-snug">
                    {post.title}
                  </p>
                  <p className="text-sm text-foreground leading-snug">
                    {post.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - App promo card */}
          <div className="hidden lg:block w-[300px] flex-shrink-0">
            <div className="bg-gradient-to-b from-[#1a1a2e] to-[#16213e] rounded-2xl p-6 text-white h-full flex flex-col justify-between">
              <div>
                <span className="text-xs bg-white/20 px-2 py-1 rounded text-white/80 mb-4 inline-block">
                  PAY
                </span>
                <h3 className="text-3xl font-bold mt-4 leading-tight">
                  One App<br />
                  Zero Stress
                </h3>
                <p className="text-white/70 text-sm mt-3 leading-relaxed">
                  Let Derapay handle everything for you, all in one place.
                </p>
              </div>

              {/* Store buttons */}
              <div className="flex gap-2 mt-6">
                <div className="bg-black rounded-md px-3 py-1.5 flex items-center gap-1.5">
                  <span className="text-[10px] text-white leading-tight">
                    <span className="text-[8px] block">Download on the</span>
                    App Store
                  </span>
                </div>
                <div className="bg-black rounded-md px-3 py-1.5 flex items-center gap-1.5">
                  <span className="text-[10px] text-white leading-tight">
                    <span className="text-[8px] block">GET IT ON</span>
                    Google Play
                  </span>
                </div>
              </div>

              {/* Phone mockup area */}
              <div className="mt-6 flex justify-center">
                <div className="w-40 h-56 bg-white/10 rounded-2xl flex items-center justify-center">
                  <span className="text-4xl font-bold text-white/20">📱</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
