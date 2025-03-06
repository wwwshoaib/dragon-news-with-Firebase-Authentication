
import Header from "../components/Header/Header";
import LatestNews from "../components/LatestNews/LatestNews";
import LeftNavbar from "../components/layout-components/LeftNavbar";
import RightNavbar from "../components/layout-components/RightNavbar";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";

const HomeLayout = () => {
    return (
        <div className="font-poppins">
            {/* Header */}
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto">
                    <LatestNews></LatestNews>
                </section>
            </header>
            {/* nav */}
            <nav className="w-11/12 mx-auto py-2">
                <Navbar></Navbar>
            </nav>
            {/* main */}
            <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3" >
                <aside className="left-navbar col-span-3">
                    <LeftNavbar></LeftNavbar>
                </aside>
                <section className="col-span-6"><Outlet></Outlet></section>
                <aside className="right-navbar col-span-3">
                    <RightNavbar></RightNavbar>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;