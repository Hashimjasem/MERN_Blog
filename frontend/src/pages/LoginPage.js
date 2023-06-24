import { useContext, useState } from "react";
import { Navigate} from "react-router-dom";
import { UserContext } from "../UserContext";

function Login() {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [redirect,setRedirect] = useState(false);
    const {setUserInfo} = useContext(UserContext);


    async function login(ev) {
      ev.preventDefault();
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        body: JSON.stringify({username, password}),
        headers: {'Content-Type':'application/json'},
        credentials: 'include',
      });
      if (response.ok) {
        response.json().then(userInfo => {
          setUserInfo(userInfo);
          setRedirect(true);
        });
      } else {
        alert('wrong credentials');
      }
    }
  
    if (redirect) {
      return <Navigate to={'/'} />
    }
    return (
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <form 
                className="bg-white px-6 py-8 rounded shadow-md text-black w-full login"
                onSubmit={login}>
                    <h1 className="mb-8 text-3xl text-center">Login</h1>
                    <input
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        value={username}
                        placeholder="Username" 
                        onChange={ev => setUsername(ev.target.value)}/>
                    <input
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        value={password}
                        placeholder="Password"
                        onChange={ev => setPassword(ev.target.value)} />
                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-green text-Black hover:bg-green-dark focus:outline-none my-1"
                    >Login</button>

                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </form>

                <div className="text-grey-dark mt-6">
                    Don't have an account?
                    <a className="no-underline border-b border-blue text-blue" href="../register/">
                        Register
                    </a>.
                </div>
            </div>
        </div>
    );
}

export default Login;