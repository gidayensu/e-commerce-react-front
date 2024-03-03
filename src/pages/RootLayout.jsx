import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/common/MainNavigation';
import Footer from '../components/common/Footer';

function RootLayout() {
    return (
    <>
        <MainNavigation />
        <Outlet />
        <Footer />
    </>)
}

export default RootLayout;