export const MovieCard = ({ singleMovie }) => {
  return (
    <div className="movie-card">
      <img src={singleMovie.poster_path} alt={singleMovie.title} />
      <h3>{singleMovie.title}</h3>
      <div className="movie-meta">
        <span className="movie-date">{singleMovie.release_date}</span>
        <span className="movie-rating">{singleMovie.vote_average}</span>
      </div>
    </div>
  )
}