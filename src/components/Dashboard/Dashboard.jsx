import { Outlet } from "react-router-dom";
import './Dashboard.css'
import DashboardHeader from "./DashboardHeader/DashboardHeader";


//  import Button from 'react-bootstrap/Button';


import {  } from 'react-bootstrap';
 
 
 

const Dashboard = () => {
    return (
        <div>

            <div className="head">
                <DashboardHeader></DashboardHeader>
                <div>
                <h2 className='titleName'>Dashboard</h2>
                <Outlet></Outlet>
                </div>
            </div>
            
        </div>
    );
};

export default Dashboard;