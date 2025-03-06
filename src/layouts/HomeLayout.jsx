
import Header from "../components/Header/Header";
import LatestNews from "../components/LatestNews/LatestNews";
import LeftNavbar from "../components/layout-components/LeftNavbar";
import Navbar from "../components/Navbar/Navbar";

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
                <section className="col-span-6">Main content</section>
                <aside className="right-navbar col-span-3">Right Navbar</aside>
            </main>
        </div>
    );
};

export default HomeLayout;