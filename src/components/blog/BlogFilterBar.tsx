import { ChevronDown } from "lucide-react";

const BlogFilterBar = () => {
  const filters = ["Service options", "Seller details", "Budget", "Delivery time"];

  return (
    <div className="bg-white py-4 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3 flex-wrap">
            {filters.map((filter) => (
              <button
                key={filter}
                className="flex items-center gap-2 border border-border rounded-lg px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted/50 transition-colors"
              >
                {filter}
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              </button>
            ))}

            {/* Toggle switches */}
            <div className="flex items-center gap-6 ml-4">
              <div className="flex items-center gap-2">
                <div className="w-11 h-6 bg-muted rounded-full relative cursor-pointer">
                  <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5 shadow-sm"></div>
                </div>
                <span className="text-sm text-foreground font-medium">Pro Services</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-11 h-6 bg-muted rounded-full relative cursor-pointer">
                  <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5 shadow-sm"></div>
                </div>
                <span className="text-sm text-foreground font-medium">Instant response</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sort by */}
        <div className="flex justify-end mt-3">
          <button className="flex items-center gap-1 text-sm text-foreground">
            Sort by: <span className="font-bold">Best selling</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogFilterBar;
