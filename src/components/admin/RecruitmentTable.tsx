import { MoreVertical } from "lucide-react";
import { cn } from "@/lib/utils";

interface RecruitmentRow {
  name: string;
  designation: string;
  status: string;
  statusColor: string;
  highlighted?: boolean;
}

const rows: RecruitmentRow[] = [
  { name: "John Doe", designation: "UI/UX Designer", status: "Tech Interview", statusColor: "bg-primary" },
  { name: "Sam Emmanuel", designation: "UI/UX Designer", status: "Task", statusColor: "bg-star" },
  { name: "John Samuel", designation: "PHP Developer", status: "Resume Review", statusColor: "bg-accent", highlighted: true },
  { name: "Sam Emmanuel", designation: "UI/UX Designer", status: "Task", statusColor: "bg-star" },
];

const RecruitmentTable = () => {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-foreground italic">Recruitment Progress</h3>
        <button className="rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary-dark transition-colors">
          View All
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[620px]">
        <thead>
          <tr className="text-left text-xs text-muted-foreground">
            <th className="pb-3 font-medium">Full Name</th>
            <th className="pb-3 font-medium">Designation</th>
            <th className="pb-3 font-medium">Status</th>
            <th className="pb-3 w-8"></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={cn(
                "border-t border-border",
                row.highlighted && "bg-primary text-primary-foreground rounded-lg"
              )}
            >
              <td className={cn("py-3 text-sm font-medium", row.highlighted ? "text-primary-foreground pl-3 rounded-l-lg" : "text-foreground")}>
                {row.name}
              </td>
              <td className={cn("py-3 text-sm", row.highlighted ? "text-primary-foreground/80" : "text-muted-foreground")}>
                {row.designation}
              </td>
              <td className="py-3">
                <div className="flex items-center gap-2">
                  <span className={cn("h-2.5 w-2.5 rounded-full", row.highlighted ? "bg-primary-foreground" : row.statusColor)} />
                  <span className={cn("text-sm", row.highlighted ? "text-primary-foreground" : "text-foreground")}>
                    {row.status}
                  </span>
                </div>
              </td>
              <td className={cn("py-3 rounded-r-lg", row.highlighted ? "text-primary-foreground" : "text-muted-foreground")}>
                <MoreVertical className="h-4 w-4" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default RecruitmentTable;
