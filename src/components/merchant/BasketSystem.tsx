import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { basketItems } from "@/data/mockData";
import { ArrowUpRight, ArrowDownRight, PieChart } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";

export default function BasketSystem() {
  const totalValue = basketItems.reduce((sum, item) => sum + item.currentPrice * item.weight, 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Basket System</h1>
        <p className="text-sm text-muted-foreground mt-1">Curated stock baskets for diversified investing</p>
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center">
              <PieChart className="h-5 w-5 text-primary" />
            </div>
            <div>
              <CardTitle className="text-base">Blue Chip Basket</CardTitle>
              <p className="text-xs text-muted-foreground">Large-cap quality stocks</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {basketItems.map((item) => (
              <div key={item.id} className="flex items-center gap-4">
                <div className="w-20 text-sm font-semibold text-foreground">{item.symbol}</div>
                <div className="flex-1">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-muted-foreground">{item.name}</span>
                    <span className="text-muted-foreground">{item.weight}%</span>
                  </div>
                  <Progress value={item.weight} className="h-2" />
                </div>
                <div className="w-24 text-right">
                  <p className="text-sm font-medium text-foreground">₹{item.currentPrice.toLocaleString()}</p>
                  <p className={`text-xs flex items-center justify-end gap-0.5 ${item.change >= 0 ? 'text-success' : 'text-destructive'}`}>
                    {item.change >= 0 ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                    {Math.abs(item.change)}%
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-base">Holdings Detail</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Symbol</TableHead>
                <TableHead>Name</TableHead>
                <TableHead className="text-right">Weight</TableHead>
                <TableHead className="text-right">Price</TableHead>
                <TableHead className="text-right">Change</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {basketItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.symbol}</TableCell>
                  <TableCell className="text-muted-foreground">{item.name}</TableCell>
                  <TableCell className="text-right">{item.weight}%</TableCell>
                  <TableCell className="text-right">₹{item.currentPrice.toLocaleString()}</TableCell>
                  <TableCell className={`text-right ${item.change >= 0 ? 'text-success' : 'text-destructive'}`}>
                    {item.change >= 0 ? "+" : ""}{item.change}%
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
