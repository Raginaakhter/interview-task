import DashboardActivity from "../home/DashboardActivity";
import { DashboardCard } from "../home/DashboardCard";
import DashboardChart from "../home/DashboardChart";

const Home = () => {
    return (
        <div className="">
           <DashboardCard></DashboardCard>
           <DashboardChart></DashboardChart>
           <DashboardActivity></DashboardActivity>
        </div>
    );
};

export default Home;