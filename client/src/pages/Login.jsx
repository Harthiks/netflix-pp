import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            navigate('/');
            // eslint-disable-next-line no-unused-vars
        } catch (err) {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="min-h-screen bg-black/60 bg-blend-overlay bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg')] bg-cover bg-center flex items-center justify-center">
            <div className="bg-black/75 p-16 rounded-md w-full max-w-md">
                <h2 className="text-3xl font-bold mb-8 text-white">Sign In</h2>
                {error && <div className="bg-orange-500 p-3 rounded mb-4 text-white text-sm">{error}</div>}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="email"
                        placeholder="Email or phone number"
                        className="p-3 rounded bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="p-3 rounded bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button
                        type="submit"
                        className="bg-red-600 text-white py-3 rounded font-bold mt-4 hover:bg-red-700 transition duration-200"
                    >
                        Sign In
                    </button>
                    <div className="flex justify-between text-gray-400 text-sm mt-2">
                        <span>Remember me</span>
                        <span>Need help?</span>
                    </div>
                </form>
                <div className="mt-10 text-gray-500">
                    New to Netflix? <Link to="/register" className="text-white hover:underline">Sign up now.</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
