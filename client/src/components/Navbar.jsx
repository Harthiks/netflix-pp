import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogOut } from 'lucide-react';

const Navbar = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate('/login');
    };

    return (
        <nav className="fixed w-full z-50 transition-all duration-300 bg-black/90 px-4 py-3 flex justify-between items-center shadow-lg">
            <Link to="/" className="text-red-600 text-3xl font-bold tracking-tighter uppercase">
                NETFLIX
            </Link>
            <button
                onClick={handleLogout}
                className="flex items-center gap-2 bg-transparent text-white border border-white/50 px-4 py-1.5 rounded hover:bg-white/10 transition"
            >
                <LogOut size={18} />
                <span>Logout</span>
            </button>
        </nav>
    );
};

export default Navbar;
