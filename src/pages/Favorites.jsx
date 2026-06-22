import '../CSS/Favorite.css';
import MovieCard from "../components/MovieCard";

function Favorites() {
    // Simulated state: empty for now. Change to an array of movies later!
    const favoriteMovies = []; 

    // 1. Conditional Rendering: Check if the list is empty
    if (favoriteMovies.length === 0) {
        return (
            <div className="favorites">
                <h2>My Favorites</h2>
                <div className="favorites-empty">
                    <div className="empty-icon">🤍</div>
                    <h3>No Favorite Movies Yet</h3>
                    <p>Open the Home page, browse through cinema selections, and click the heart icon to save them to your personal watchlist!</p>
                </div>
            </div>
        );
    }

    // 2. If the array has movies, render them using your grid classes
    return (
        <div className="favorites">
            <h2>My Favorites</h2>
            <div className="movies-grid">
                {favoriteMovies.map(movie => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    );
}

export default Favorites;