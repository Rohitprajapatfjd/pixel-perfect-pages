import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { algoServices } from "@/data/mockData";
import { Bot, TrendingUp, Shield, Play, Pause } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function AlgoService() {
  const [services, setServices] = useState(algoServices);

  const toggleService = (id: string) => {
    setServices(prev =>
      prev.map(s =>
        s.id === id ? { ...s, status: s.status === "active" ? "inactive" as const : "active" as const } : s
      )
    );
    toast.success("Service status updated");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Algo Services</h1>
        <p className="text-sm text-muted-foreground mt-1">Automated trading algorithms at your fingertips</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((algo) => (
          <Card key={algo.id} className="shadow-card hover:shadow-elevated transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-secondary flex items-center justify-center">
                    <Bot className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-base">{algo.name}</CardTitle>
                    <p className="text-xs text-muted-foreground">{algo.description}</p>
                  </div>
                </div>
                <Badge variant={algo.status === "active" ? "default" : "secondary"}>
                  {algo.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 rounded-lg bg-muted/50 text-center">
                  <TrendingUp className="h-4 w-4 text-success mx-auto mb-1" />
                  <p className="text-sm font-bold text-foreground">{algo.returns}</p>
                  <p className="text-[10px] text-muted-foreground">Returns</p>
                </div>
                <div className="p-3 rounded-lg bg-muted/50 text-center">
                  <Shield className="h-4 w-4 text-primary mx-auto mb-1" />
                  <p className="text-sm font-bold text-foreground">{algo.risk}</p>
                  <p className="text-[10px] text-muted-foreground">Risk</p>
                </div>
                <div className="p-3 rounded-lg bg-muted/50 text-center">
                  <p className="text-sm font-bold text-foreground">₹{algo.monthlyFee.toLocaleString()}</p>
                  <p className="text-[10px] text-muted-foreground mt-1">Monthly</p>
                </div>
              </div>
              <Button
                onClick={() => toggleService(algo.id)}
                variant={algo.status === "active" ? "outline" : "default"}
                className="w-full"
              >
                {algo.status === "active" ? (
                  <><Pause className="h-4 w-4 mr-2" />Pause Algorithm</>
                ) : (
                  <><Play className="h-4 w-4 mr-2" />Start Algorithm</>
                )}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
