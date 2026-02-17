import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { servicePlans } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { Clock, CalendarDays } from "lucide-react";
import { useState } from "react";

export default function ServiceCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const activeServices = servicePlans.filter(s => s.isActive);

  // Calculate days remaining for active services
  const getDaysRemaining = (expiresOn?: string) => {
    if (!expiresOn) return 0;
    const diff = new Date(expiresOn).getTime() - new Date().getTime();
    return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Service Calendar</h1>
        <p className="text-sm text-muted-foreground mt-1">Track your service activation and expiry dates</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <Card className="shadow-card">
            <CardContent className="p-4 flex justify-center">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="pointer-events-auto"
              />
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Active Subscriptions</h2>
          {activeServices.length > 0 ? (
            activeServices.map((service) => (
              <Card key={service.id} className="shadow-card">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-xl bg-secondary flex items-center justify-center">
                        <CalendarDays className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{service.name}</h3>
                        <p className="text-xs text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                    <Badge>{getDaysRemaining(service.expiresOn)} days left</Badge>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-4">
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Activated</p>
                      <p className="text-sm font-medium text-foreground mt-0.5">{service.activatedOn}</p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Expires</p>
                      <p className="text-sm font-medium text-foreground mt-0.5">{service.expiresOn}</p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Duration</p>
                      <p className="text-sm font-medium text-foreground mt-0.5">{service.duration}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card className="shadow-card">
              <CardContent className="p-10 text-center">
                <Clock className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
                <p className="text-muted-foreground">No active subscriptions</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
