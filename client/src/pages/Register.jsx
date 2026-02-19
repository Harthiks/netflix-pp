import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const { register } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        try {
            await register(name, email, password);
            navigate('/');
            // eslint-disable-next-line no-unused-vars
        } catch (err) {
            setError('Registration failed. Try again.');
        }
    };

    return (
        <div className="min-h-screen bg-black/60 bg-blend-overlay bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg')] bg-cover bg-center flex items-center justify-center">
            <div className="bg-black/75 p-16 rounded-md w-full max-w-md">
                <h2 className="text-3xl font-bold mb-8 text-white">Sign Up</h2>
                {error && <div className="bg-orange-500 p-3 rounded mb-4 text-white text-sm">{error}</div>}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="p-3 rounded bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email address"
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
                        minLength={8}
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        className="p-3 rounded bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <button
                        type="submit"
                        className="bg-red-600 text-white py-3 rounded font-bold mt-4 hover:bg-red-700 transition duration-200"
                    >
                        Sign Up
                    </button>
                </form>
                <div className="mt-6 text-gray-500">
                    Already have an account? <Link to="/login" className="text-white hover:underline">Sign in now.</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
