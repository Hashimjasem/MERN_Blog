import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav >
                <ul className="bg-[#ff961d] justify-between flex max-w-[100%] p-5 items-center">
                    <li>
                        <Link className="font-bold text-[2rem]" to="/">TechWaffle</Link>
                    </li>
                    <div className="justify-between flex font-bold text-[1.2rem] gap-7">
                        <li>
                            <Link to="/blogs">Blogs</Link>
                        </li>

                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li></div>

                </ul>
            </nav>
            <Outlet />
        </>
    )
};

export default Layout;