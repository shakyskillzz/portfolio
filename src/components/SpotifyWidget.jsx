import { useEffect, useState } from "react";

export const SpotifyWidget = () => {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // 👇 Replace this with your actual Vercel URL
    fetch("https://spotify-backend-mu.vercel.app/api/top-tracks")
      .then((res) => res.json())
      .then((data) => {
        setTracks(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <div className="w-full">
      <div className="bg-card border border-white/10 rounded-xl overflow-hidden shadow-lg">

        {/* Header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
          <div className="w-2 h-2 rounded-full bg-[#1DB954] animate-pulse" />
          <span className="text-sm font-semibold text-foreground">
            My current top 5 songs ON REPEAT
          </span>
          {/* Spotify Icon */}
          <svg
            className="ml-auto h-4 w-4 text-[#1DB954]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
          </svg>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="px-4 py-6 text-center text-sm text-foreground/50">
            Loading tracks...
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="px-4 py-6 text-center text-sm text-foreground/50">
            Couldn't load tracks
          </div>
        )}

        {/* Track List */}
        {!loading && !error && (
          <div className="divide-y divide-white/5">
            {tracks.map((track, i) => (
              <a
                key={i}
                href={track.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-7 hover:bg-white/5 transition-colors duration-200 group"
              >
                {/* Album Art */}
                <div className="relative flex-shrink-0">
                  <img
                    src={track.albumArt}
                    alt={track.name}
                    className="w-14 h-14 rounded-md object-cover"
                  />
                  {/* Play icon on hover */}
                  <div className="absolute inset-0 bg-black/50 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Song Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">
                    {track.name}
                  </p>
                  <p className="text-xs text-foreground/50 truncate">
                    {track.artist}
                  </p>
                </div>

                {/* Track Number */}
                <span className="text-xs text-foreground/30 flex-shrink-0">
                  #{i + 1}
                </span>
              </a>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};