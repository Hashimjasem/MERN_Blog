import { Link } from "react-router-dom";
import { useContext, useEffect} from "react";
import { UserContext } from "./UserContext";

function Header() {
    const { setUserInfo, userInfo } = useContext(UserContext)
    useEffect(() => {
        fetch('http://localhost:4000/profile', {
            credentials: 'include',
        }).then(response => {
            response.json().then(userInfo => {
                setUserInfo(userInfo)
            });
        });
    }, [setUserInfo]);

    function logout() {
        fetch('http://localhost:4000/logout', {
            credentials: 'include',
            method: 'POST',
        });
        setUserInfo(null)
    }

    const username = userInfo?.username

    return (
        <header className="bg-[#ff961d] justify-between flex max-w-[100%] p-5 items-center">
            <Link to="/" className="font-bold text-[2rem]">TechWaffle</Link>
            <nav className="justify-between flex font-bold text-[1.2rem] gap-7">

                {username && (
                    <>
                        <Link to="/create">Create new post</Link>
                        <a onClick={logout}>Logout ({username})</a>
                    </>
                )}           
                {!username && (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}

            </nav>
        </header>

    );
}

export default Header;