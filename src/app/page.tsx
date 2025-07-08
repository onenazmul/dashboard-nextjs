import AppAreaChart from "@/components/AppAreaChart";
import AppBarChart from "@/components/AppBarChart";
import { AppPieChart } from "@/components/AppPieChart";
import CardList from "@/components/CardList";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
      <div className="col-span-1 bg-primary-foreground rounded-lg p-4 xl:col-span-2">
        <AppBarChart />
      </div>
      <div className="col-span-1 bg-primary-foreground rounded-lg p-4">
        <AppPieChart />
      </div>
      <div className="col-span-1 bg-primary-foreground rounded-lg p-4">
        <CardList title="Popular Content"/>
      </div>
      <div className="col-span-1 bg-primary-foreground rounded-lg p-4">
        <TodoList />
      </div>
      <div className="col-span-1 bg-primary-foreground rounded-lg p-4 xl:col-span-2">
        <AppAreaChart />
      </div>
      <div className="col-span-1 bg-primary-foreground rounded-lg p-4">
        <CardList title="Recent Transactions" />
      </div>
    </div>
    
  );
}
