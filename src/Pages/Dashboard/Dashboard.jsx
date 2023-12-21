import React from 'react';
import DashDetails from './DashDetails';
import { ComplexNavbar } from './DashNav';

const Dashboard = () => {
    return (
        <div>
            <div>
               <ComplexNavbar/>
            </div>
            <div>
                <DashDetails />
            </div>
        </div>
    );
};

export default Dashboard;