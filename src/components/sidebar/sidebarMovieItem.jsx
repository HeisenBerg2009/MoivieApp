export const SidebarMovieItem = ({ movie, progress }) => {
  const isWatching = progress !== undefined;

  return (
    <li className="sidebar-movie">
      <img
        className="sidebar-movie-poster"
        src={movie.poster_path}
        alt={movie.title}
      />
      <div className="sidebar-movie-info">
        <p className="sidebar-movie-title">{movie.title}</p>

        {isWatching ? (
          <div className="progress">
            <div
              className="progress-track"
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div className="progress-fill" style={{ width: `${progress}%` }} />
            </div>
            <span>{progress}%</span>
          </div>
        ) : (
          <div className="sidebar-movie-meta">
            <span className="movie-rating">{movie.vote_average}</span>
            <span>{movie.release_date?.slice(0, 4)}</span>
          </div>
        )}
      </div>
    </li>
  );
};