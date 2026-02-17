import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { servicePlans, clientProfile } from "@/data/mockData";
import { Check, Zap, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Services() {
  const [plans, setPlans] = useState(servicePlans);

  const activateService = (id: string) => {
    setPlans(prev =>
      prev.map(p =>
        p.id === id
          ? { ...p, isActive: true, activatedOn: "2026-02-13", expiresOn: "2026-03-13" }
          : p
      )
    );
    toast.success("Service activated successfully!");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Services</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Activate and manage services for Client ID: <span className="font-semibold text-primary">{clientProfile.clientId}</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {plans.map((plan) => (
          <Card key={plan.id} className={`shadow-card transition-shadow hover:shadow-elevated ${plan.isActive ? 'ring-2 ring-primary/20' : ''}`}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-base">{plan.name}</CardTitle>
                  <p className="text-xs text-muted-foreground mt-1">{plan.description}</p>
                </div>
                <Badge variant={plan.isActive ? "default" : "secondary"}>
                  {plan.isActive ? "Active" : "Inactive"}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-foreground">₹{plan.price.toLocaleString()}</span>
                <span className="text-sm text-muted-foreground">/ {plan.duration}</span>
              </div>

              <ul className="space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-success" />
                    {feature}
                  </li>
                ))}
              </ul>

              {plan.isActive && plan.activatedOn && (
                <div className="p-3 rounded-lg bg-muted/50 space-y-1">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    Activated: {plan.activatedOn}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    Expires: {plan.expiresOn}
                  </div>
                </div>
              )}

              <Button
                onClick={() => activateService(plan.id)}
                variant={plan.isActive ? "outline" : "default"}
                className="w-full"
                disabled={plan.isActive}
              >
                {plan.isActive ? (
                  <><Check className="h-4 w-4 mr-2" />Currently Active</>
                ) : (
                  <><Zap className="h-4 w-4 mr-2" />Activate Service</>
                )}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
