import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { transactions, clientProfile } from "@/data/mockData";
import { ArrowUpRight, ArrowDownRight, IndianRupee, Download } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export default function Cart() {
  const totalCredits = transactions.filter(t => t.type === "credit" && t.status === "completed").reduce((s, t) => s + t.amount, 0);
  const totalDebits = transactions.filter(t => t.type === "debit" && t.status === "completed").reduce((s, t) => s + t.amount, 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Cart & Transactions</h1>
          <p className="text-sm text-muted-foreground mt-1">Your complete transaction history</p>
        </div>
        <Button variant="outline" size="sm">
          <Download className="h-4 w-4 mr-2" />Export
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="shadow-card">
          <CardContent className="p-5">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center">
                <IndianRupee className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">₹{clientProfile.balance.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">Current Balance</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-card">
          <CardContent className="p-5">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center">
                <ArrowUpRight className="h-5 w-5 text-success" />
              </div>
              <div>
                <p className="text-2xl font-bold text-success">₹{totalCredits.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">Total Credits</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-card">
          <CardContent className="p-5">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center">
                <ArrowDownRight className="h-5 w-5 text-destructive" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">₹{totalDebits.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">Total Debits</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-base">Transaction History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Service</TableHead>
                <TableHead>Type</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead className="text-right">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((tx) => (
                <TableRow key={tx.id}>
                  <TableCell className="text-muted-foreground">{tx.date}</TableCell>
                  <TableCell className="font-medium">{tx.service}</TableCell>
                  <TableCell>
                    <Badge variant={tx.type === "credit" ? "default" : "secondary"}>
                      {tx.type}
                    </Badge>
                  </TableCell>
                  <TableCell className={`text-right font-medium ${tx.type === "credit" ? "text-success" : ""}`}>
                    {tx.type === "credit" ? "+" : "-"}₹{tx.amount.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge variant={tx.status === "completed" ? "secondary" : tx.status === "pending" ? "outline" : "destructive"}>
                      {tx.status}
                    </Badge>
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
