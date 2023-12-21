import React from 'react';
import { Outlet } from 'react-router-dom';
import { StickyNavbar } from '../../Components/Shared/Nav';
import Footer from '../../Components/Shared/Footer';

const Root = () => {
    return (
        <div>
            <StickyNavbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;
