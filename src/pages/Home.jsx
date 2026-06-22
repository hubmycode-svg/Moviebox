import MovieCard from "../components/MovieCard";
import { useState } from "react";
import '../CSS/Home.css'

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        { id: 1, title: "John Wick", release_date: "2020" },
        { id: 2, title: "Terminator", release_date: "1999" },
        { id: 3, title: "The matrix", release_date: "1998" },
        { id: 4, title: "Poligamist", release_date: "2026" },
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        // Removed setSearchQuery("") from here so the search text stays 
        // in the input bar while the user looks at the results.
        alert(`Searching for: ${searchQuery}`);
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="text"  
                    placeholder="search for movie..." 
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-btn">Search</button>
            </form>

            <div className="movies-grid">
                
                {movies
                    .filter(movie => 
                        movie.title.toLowerCase().startsWith(searchQuery.toLowerCase())
                    )
                    .map(movie => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))
                }
            </div>
        </div>
    );
}

export default Home;