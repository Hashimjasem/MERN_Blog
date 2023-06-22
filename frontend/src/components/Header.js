import { Link } from "react-router-dom";
import { useContext, useEffect} from "react";
import { UserContext } from "../Utils/UserContext";

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
    }, []);

    function logout() {
        fetch('http://localhost:4000/logout', {
            credentials: 'include',
            method: 'POST',
        });
    }

    const username = userInfo?.username

    return (
        <header className="bg-[#ff961d] justify-between flex max-w-[100%] p-5 items-center">
            <Link to="/" className="font-bold text-[2rem]">TechWaffle</Link>
            <nav className="justify-between flex font-bold text-[1.2rem] gap-7">
                {!username && (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}
                {username && (
                    <>
                        <Link to="/create">Create new post</Link>
                        <a onClick={logout}>Logout ({username})</a>
                    </>
                )}

            </nav>
        </header>

    );
}

export default Header;