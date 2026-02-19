import React from 'react';

const MovieCard = ({ movie }) => {
    return (
        <div className="group relative bg-zinc-900 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:z-10 shadow-lg cursor-pointer">
            <div className="aspect-[2/3] w-full overflow-hidden">
                <img
                    src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Image'}
                    alt={movie.Title}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="p-4 absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent pt-10 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-bold text-lg truncate">{movie.Title}</h3>
                <div className="flex items-center justify-between text-gray-300 text-sm mt-1">
                    <span>{movie.Year}</span>
                    <span className="capitalize border border-gray-600 px-1 rounded text-xs">{movie.Type}</span>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
