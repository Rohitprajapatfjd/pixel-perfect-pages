import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { clientProfile, servicePlans } from "@/data/mockData";
import { User, Mail, Phone, CreditCard, Calendar, Edit, Save } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { toast } from "sonner";

export default function Profile() {
  const [editing, setEditing] = useState(false);
  const [profile, setProfile] = useState(clientProfile);

  const handleSave = () => {
    setEditing(false);
    toast.success("Profile updated successfully!");
  };

  const activeCount = servicePlans.filter(s => s.isActive).length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Client Profile</h1>
        <p className="text-sm text-muted-foreground mt-1">Manage your account information</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="shadow-card lg:col-span-1">
          <CardContent className="p-6 text-center">
            <div className="h-24 w-24 rounded-full gradient-primary flex items-center justify-center text-primary-foreground text-3xl font-bold mx-auto">
              {profile.name.charAt(0)}
            </div>
            <h2 className="text-lg font-bold text-foreground mt-4">{profile.name}</h2>
            <p className="text-sm text-muted-foreground">{profile.email}</p>
            <Badge className="mt-2">{profile.plan}</Badge>

            <div className="mt-6 space-y-3 text-left">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                <CreditCard className="h-4 w-4 text-primary" />
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase">Client ID</p>
                  <p className="text-sm font-semibold text-foreground">{profile.clientId}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                <Calendar className="h-4 w-4 text-primary" />
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase">Joined</p>
                  <p className="text-sm font-semibold text-foreground">{profile.joinedDate}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                <User className="h-4 w-4 text-primary" />
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase">Active Services</p>
                  <p className="text-sm font-semibold text-foreground">{activeCount}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-base">Personal Information</CardTitle>
            <Button variant="outline" size="sm" onClick={() => editing ? handleSave() : setEditing(true)}>
              {editing ? <><Save className="h-4 w-4 mr-2" />Save</> : <><Edit className="h-4 w-4 mr-2" />Edit</>}
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-sm text-muted-foreground">Full Name</Label>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <Input
                    value={profile.name}
                    disabled={!editing}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-sm text-muted-foreground">Email</Label>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <Input
                    value={profile.email}
                    disabled={!editing}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-sm text-muted-foreground">Phone</Label>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <Input
                    value={profile.phone}
                    disabled={!editing}
                    onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-sm text-muted-foreground">Client ID</Label>
                <div className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                  <Input value={profile.clientId} disabled />
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <h3 className="text-sm font-semibold text-foreground mb-3">Account Summary</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="p-3 rounded-lg bg-muted/50 text-center">
                  <p className="text-lg font-bold text-foreground">₹{profile.balance.toLocaleString()}</p>
                  <p className="text-[10px] text-muted-foreground">Balance</p>
                </div>
                <div className="p-3 rounded-lg bg-muted/50 text-center">
                  <p className="text-lg font-bold text-foreground">{activeCount}</p>
                  <p className="text-[10px] text-muted-foreground">Active Plans</p>
                </div>
                <div className="p-3 rounded-lg bg-muted/50 text-center">
                  <p className="text-lg font-bold text-foreground">8</p>
                  <p className="text-[10px] text-muted-foreground">Transactions</p>
                </div>
                <div className="p-3 rounded-lg bg-muted/50 text-center">
                  <p className="text-lg font-bold text-foreground">6</p>
                  <p className="text-[10px] text-muted-foreground">Active Tips</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
