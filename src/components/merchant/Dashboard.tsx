import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Bot, ShoppingBasket, Zap, IndianRupee, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { clientProfile, stockTips, algoServices, transactions } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";

const stats = [
  { title: "Wallet Balance", value: `₹${clientProfile.balance.toLocaleString()}`, icon: IndianRupee, change: "+12.5%", positive: true },
  { title: "Active Tips", value: stockTips.filter(t => t.action === "BUY").length.toString(), icon: TrendingUp, change: "+3 today", positive: true },
  { title: "Running Algos", value: algoServices.filter(a => a.status === "active").length.toString(), icon: Bot, change: "2 active", positive: true },
  { title: "Active Services", value: "2", icon: Zap, change: "1 expiring soon", positive: false },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Welcome back, {clientProfile.name.split(" ")[0]}</h1>
        <p className="text-muted-foreground text-sm mt-1">Here's what's happening with your portfolio today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="shadow-card border-border">
            <CardContent className="p-5">
              <div className="flex items-center justify-between">
                <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center">
                  <stat.icon className="h-5 w-5 text-primary" />
                </div>
                <div className={`flex items-center gap-1 text-xs font-medium ${stat.positive ? 'text-success' : 'text-warning'}`}>
                  {stat.positive ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                  {stat.change}
                </div>
              </div>
              <div className="mt-3">
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{stat.title}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-card border-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-semibold">Latest Stock Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {stockTips.slice(0, 4).map((tip) => (
                <div key={tip.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-md bg-secondary flex items-center justify-center text-xs font-bold text-secondary-foreground">
                      {tip.symbol.slice(0, 2)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{tip.symbol}</p>
                      <p className="text-xs text-muted-foreground">{tip.name}</p>
                    </div>
                  </div>
                  <Badge variant={tip.action === "BUY" ? "default" : tip.action === "SELL" ? "destructive" : "secondary"}>
                    {tip.action}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card border-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-semibold">Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {transactions.slice(0, 4).map((tx) => (
                <div key={tx.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div>
                    <p className="text-sm font-medium text-foreground">{tx.service}</p>
                    <p className="text-xs text-muted-foreground">{tx.date}</p>
                  </div>
                  <div className="text-right">
                    <p className={`text-sm font-semibold ${tx.type === "credit" ? "text-success" : "text-foreground"}`}>
                      {tx.type === "credit" ? "+" : "-"}₹{tx.amount.toLocaleString()}
                    </p>
                    <Badge variant={tx.status === "completed" ? "secondary" : tx.status === "pending" ? "outline" : "destructive"} className="text-[10px]">
                      {tx.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
