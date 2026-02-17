import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { stockTips } from "@/data/mockData";
import { TrendingUp, Target, BarChart3 } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function StockTips() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Stock Tips</h1>
        <p className="text-sm text-muted-foreground mt-1">Expert stock recommendations with analysis</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="shadow-card">
          <CardContent className="p-5 flex items-center gap-4">
            <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{stockTips.filter(t => t.action === "BUY").length}</p>
              <p className="text-xs text-muted-foreground">Buy Signals</p>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-card">
          <CardContent className="p-5 flex items-center gap-4">
            <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center">
              <Target className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{stockTips.filter(t => t.action === "SELL").length}</p>
              <p className="text-xs text-muted-foreground">Sell Signals</p>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-card">
          <CardContent className="p-5 flex items-center gap-4">
            <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center">
              <BarChart3 className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">82%</p>
              <p className="text-xs text-muted-foreground">Avg Confidence</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stockTips.map((tip) => (
          <Card key={tip.id} className="shadow-card hover:shadow-elevated transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center text-sm font-bold text-secondary-foreground">
                    {tip.symbol.slice(0, 2)}
                  </div>
                  <div>
                    <CardTitle className="text-sm">{tip.symbol}</CardTitle>
                    <p className="text-xs text-muted-foreground">{tip.name}</p>
                  </div>
                </div>
                <Badge variant={tip.action === "BUY" ? "default" : tip.action === "SELL" ? "destructive" : "secondary"}>
                  {tip.action}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Current</span>
                <span className="font-medium text-foreground">₹{tip.currentPrice}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Target</span>
                <span className="font-medium text-foreground">₹{tip.targetPrice}</span>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-muted-foreground">Confidence</span>
                  <span className="font-medium text-foreground">{tip.confidence}%</span>
                </div>
                <Progress value={tip.confidence} className="h-1.5" />
              </div>
              <p className="text-[11px] text-muted-foreground">{tip.date}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
