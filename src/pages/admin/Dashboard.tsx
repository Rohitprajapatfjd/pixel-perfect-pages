import { Zap, Cpu, BarChart3, Clock, MessageSquare, PenTool, Code2, Globe, Image, Languages } from "lucide-react";
import WelcomeBanner from "@/components/admin/WelcomeBanner";
import StatCard from "@/components/admin/StatCard";
import QuickActionCard from "@/components/admin/QuickActionCard";
import RecruitmentTable from "@/components/admin/RecruitmentTable";

const stats = [
  { title: "Token Balance", value: "675,260", subtitle: "Available credits", trend: "+12%", trendLabel: "vs last week", icon: <Zap className="h-5 w-5 text-primary" /> },
  { title: "AI Tools", value: "70", subtitle: "Ready to use", trend: "+48 new", trendLabel: "vs last week", icon: <Cpu className="h-5 w-5 text-primary" /> },
  { title: "Generations", value: "1,380", subtitle: "This week", trend: "+23%", trendLabel: "", icon: <BarChart3 className="h-5 w-5 text-primary" /> },
  { title: "Time Saved", value: "24h", subtitle: "This month", trend: "+4h", trendLabel: "vs last week", icon: <Clock className="h-5 w-5 text-primary" /> },
];

const quickActions = [
  { title: "AI Chat", subtitle: "Conversational AI", icon: <MessageSquare className="h-5 w-5 text-primary" />, iconBg: "bg-primary/10" },
  { title: "Content Writer", subtitle: "Blog & articles", icon: <PenTool className="h-5 w-5 text-destructive" />, iconBg: "bg-destructive/10" },
  { title: "Code Generator", subtitle: "Any language", icon: <Code2 className="h-5 w-5 text-accent" />, iconBg: "bg-accent/10" },
  { title: "Website Builder", subtitle: "AI-powered sites", icon: <Globe className="h-5 w-5 text-primary" />, iconBg: "bg-primary/10", badge: "NEW" },
  { title: "Image Generator", subtitle: "DALL-E & more", icon: <Image className="h-5 w-5 text-accent" />, iconBg: "bg-accent/10" },
  { title: "Translator", subtitle: "100+ languages", icon: <Languages className="h-5 w-5 text-primary" />, iconBg: "bg-primary/10" },
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <WelcomeBanner />

      {/* You Need to hire */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-foreground">You Need to hire</h2>
          <button className="rounded-lg bg-primary/10 px-4 py-2 text-xs font-semibold text-primary hover:bg-primary/20 transition-colors">
            View All
          </button>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {stats.map((s) => (
            <StatCard key={s.title} {...s} />
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold text-foreground">Quick Actions</h2>
            <p className="text-xs text-muted-foreground">Jump right into your favorite tools</p>
          </div>
          <button className="text-xs font-semibold text-primary hover:underline">View all →</button>
        </div>
        <div className="grid grid-cols-6 gap-4">
          {quickActions.map((a) => (
            <QuickActionCard key={a.title} {...a} />
          ))}
        </div>
      </div>

      {/* Recruitment Progress */}
      <RecruitmentTable />
    </div>
  );
};

export default Dashboard;
