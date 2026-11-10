import { movies } from "../../data/movies";
import { continueWatching } from "../../data/continueWatching";
import { SidebarSection } from "./sidebarSection";
import { SidebarMovieItem } from "./sidebarMovieItem";

export const Sidebar = () => {
  // 4 ყველაზე მაღალი რეიტინგის ფილმი (ორიგინალ მასივს არ ვცვლით)
  const topRated = [...movies]
    .sort((a, b) => b.vote_average - a.vote_average)
    .slice(0, 4);

  // continueWatching-ის თითოეულ ჩანაწერს ვუპოვით შესაბამის ფილმს
  const watching = continueWatching
    .map(({ movieId, progress }) => {
      const movie = movies.find((m) => m.id === movieId);
      return movie ? { movie, progress } : null;
    })
    .filter(Boolean);

  return (
    <aside className="sidebar">
      <SidebarSection title="Top Rated">
        {topRated.map((movie) => (
          <SidebarMovieItem key={movie.id} movie={movie} />
        ))}
      </SidebarSection>

      <SidebarSection title="Continue Watching">
        {watching.map(({ movie, progress }) => (
          <SidebarMovieItem key={movie.id} movie={movie} progress={progress} />
        ))}
      </SidebarSection>
    </aside>
  );
};