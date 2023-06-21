import { useState } from "react";

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    
    async function register(ev) {
        ev.preventDefault();
        const response = await fetch('http://localhost:4000/register', {
            method: 'POST',
            body: JSON.stringify({username,password}),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.status === 200) {
            alert('registration successful');
        } else {
            alert('registration failed');
        }
    }

    return (
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <form className="bg-white px-6 py-8 rounded shadow-md text-black w-full"
                    onSubmit={register}>

                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <input
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        value={username}
                        placeholder="username"
                        onChange={ev => setUsername(ev.target.value)}
                    />

                    <input
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        value={password}
                        placeholder="Password"
                        onChange={ev => setPassword(ev.target.value)}
                    />

                    <button
                        className="w-full text-center py-3 rounded bg-green text-black hover:bg-green-dark focus:outline-none my-1"
                    >Create Account</button>

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
                    Already have an account?
                    <a className="no-underline border-b border-blue text-blue" href="../login/">
                        Log in
                    </a>.
                </div>
            </div>
        </div>
    );
}

export default Register;