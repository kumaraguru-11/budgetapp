"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BarChart3, PieChart } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="p-4 space-y-6">
      {/* Summary Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <Card className="bg-blue-500 text-white shadow-md hover:shadow-lg transition">
          <CardHeader>
            <CardTitle>Account Balance</CardTitle>
            <CardDescription className="text-white/80">
              Overall summary
            </CardDescription>
          </CardHeader>
          <CardContent className="text-3xl font-bold">
            $12,245,621.20
          </CardContent>
        </Card>

        <Card className="bg-red-500 text-white shadow-md hover:shadow-lg transition">
          <CardHeader>
            <CardTitle>Expenses</CardTitle>
            <CardDescription className="text-white/80">
              This month
            </CardDescription>
          </CardHeader>
          <CardContent className="text-3xl font-bold">
            $2,235,412.00
          </CardContent>
        </Card>

        <Card className="bg-green-500 text-white shadow-md hover:shadow-lg transition">
          <CardHeader>
            <CardTitle>Income</CardTitle>
            <CardDescription className="text-white/80">
              This month
            </CardDescription>
          </CardHeader>
          <CardContent className="text-3xl font-bold">
            $4,315,000.00
          </CardContent>
        </Card>

        <Card className="bg-purple-600 text-white shadow-md hover:shadow-lg transition">
          <CardHeader>
            <CardTitle>Investments</CardTitle>
            <CardDescription className="text-white/80">
              Total holdings
            </CardDescription>
          </CardHeader>
          <CardContent className="text-3xl font-bold">
            $1,100,000.00
          </CardContent>
        </Card>
      </section>

      {/* Chart Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Analytics Overview</CardTitle>
            <BarChart3 className="text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="h-56 bg-gray-100 rounded-md flex items-center justify-center text-gray-400">
              Chart Placeholder
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Spending Report</CardTitle>
            <PieChart className="text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="h-56 bg-gray-100 rounded-md flex items-center justify-center text-gray-400">
              Pie Chart Placeholder
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Transactions & Goals */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Latest Transactions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span>Amazon - Purchase</span>
              <span className="text-red-600">$320.00</span>
            </div>
            <div className="flex justify-between">
              <span>Freelance + Income</span>
              <span className="text-green-600">$2,500.00</span>
            </div>
            <div className="flex justify-between">
              <span>Grocery -</span>
              <span className="text-red-600">$90.00</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Goals</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between text-sm">
                <span>Vacation Fund</span>
                <span className="text-gray-500">$2,400 / $5,000</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                <div className="bg-blue-500 h-2 rounded-full w-[48%]" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm">
                <span>New Car</span>
                <span className="text-gray-500">$15,000 / $30,000</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                <div className="bg-purple-500 h-2 rounded-full w-[50%]" />
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Dashboard;
