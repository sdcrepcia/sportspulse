import LiveBadge from "./LiveBadge";
import ChannelBadge from "./ChannelBadge";
import { Game } from "@/lib/espn";

type Region = "us" | "uk" | "ca";

function formatTime(dateStr: string) {
  return new Date(dateStr).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  });
}

export default function GameCard({ game, region }: { game: Game; region: Region }) {
  const isLive = game.status === "in";
  const isPost = game.status === "post";
  const channels = game.broadcasts[region] ?? [];

  return (
    <div className={`bg-gray-900 border rounded-xl p-4 flex flex-col gap-3 transition-all ${
      isLive ? "border-red-500/40 shadow-lg shadow-red-500/10" : "border-gray-800"
    }`}>
      {/* Header */}
      <div className="flex items-center justify-between text-xs text-gray-500">
        <span className="uppercase tracking-wider font-medium">
          {game.sport.replace("_", " ")}
        </span>
        {isLive ? (
          <LiveBadge />
        ) : isPost ? (
          <span className="text-gray-500 text-xs font-medium">Final</span>
        ) : (
          <span className="text-gray-400 text-xs">{formatTime(game.startTime)}</span>
        )}
      </div>

      {/* Teams + Scores */}
      <div className="flex flex-col gap-2">
        {[
          { name: game.awayTeam, logo: game.awayLogo, score: game.awayScore },
          { name: game.homeTeam, logo: game.homeLogo, score: game.homeScore },
        ].map((team) => (
          <div key={team.name} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {team.logo && (
  <img
    src={team.logo}
    alt={team.name}
    style={{ width: 24, height: 24, objectFit: "contain" }}
  />
)}
              <span className="text-sm font-medium text-gray-100">{team.name}</span>
            </div>
            {(isLive || isPost) && team.score !== null && (
              <span className="text-lg font-bold tabular-nums">{team.score}</span>
            )}
          </div>
        ))}
      </div>

      {/* Clock */}
      {isLive && game.displayClock && (
        <div className="text-xs text-red-400 font-medium">{game.displayClock}</div>
      )}

      {/* Channel Badges */}
      {channels.length > 0 && (
        <div className="flex flex-wrap gap-1.5 pt-1 border-t border-gray-800">
          {channels.map((ch) => (
            <ChannelBadge key={ch} name={ch} />
          ))}
        </div>
      )}
    </div>
  );
}
