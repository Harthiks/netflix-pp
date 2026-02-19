import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import MovieCard from '../components/MovieCard';
import { Search } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const { user } = useAuth();

    const fetchMovies = async (searchQuery) => {
        if (!searchQuery) return;
        setLoading(true);
        setError('');
        try {
            const { data } = await axios.get(`/api/movies/search?s=${searchQuery}`);
            if (data.Search) {
                setMovies(data.Search);
            } else {
                setMovies([]);
                setError(data.message || 'No movies found');
            }
        } catch (err) {
            setError('Failed to fetch movies');
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        fetchMovies(query);
    };

    // Initial fetch to populate something
    useEffect(() => {
        fetchMovies('Avengers');
    }, []);

    return (
        <div className="min-h-screen bg-netflix-black text-white">
            <Navbar />

            <div className="pt-24 px-4 md:px-12 pb-10">
                <div className="mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">Welcome back, {user?.name}</h1>
                    <form onSubmit={handleSearch} className="flex gap-2 max-w-2xl">
                        <div className="relative flex-1">
                            <input
                                type="text"
                                placeholder="Search for movies..."
                                className="w-full bg-zinc-800 text-white p-3 pl-10 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                            <Search className="absolute left-3 top-3.5 text-gray-400" size={20} />
                        </div>
                        <button
                            type="submit"
                            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded font-bold transition"
                        >
                            Search
                        </button>
                    </form>
                </div>

                {loading ? (
                    <div className="flex justify-center mt-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
                    </div>
                ) : error ? (
                    <div className="text-center mt-20 text-gray-400 text-xl">{error}</div>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {movies.map((movie) => (
                            <MovieCard key={movie.imdbID} movie={movie} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
