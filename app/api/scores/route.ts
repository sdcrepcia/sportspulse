import { fetchESPNGames } from "@/lib/espn";
import { findBroadcasts } from "@/lib/sportsdb";
import { NextRequest, NextResponse } from "next/server";

const SPORTS = ["nfl", "nba", "mlb", "mls", "premier_league", "champions_league"];

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const sport = searchParams.get("sport");
  const sports = sport ? [sport] : SPORTS;

  let espnResults;
  try {
    espnResults = await Promise.all(sports.map(fetchESPNGames));
  } catch (e) {
    console.error("ESPN fetch failed:", e);
    return NextResponse.json([]);
  }

  // Today's date boundaries in UTC
  const now = new Date();
  const startOfToday = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
  const startOfTomorrow = new Date(startOfToday.getTime() + 24 * 60 * 60 * 1000);

  const games = espnResults
    .flat()
    .filter((game) => {
      const gameDate = new Date(game.startTime);
      return gameDate >= startOfToday && gameDate < startOfTomorrow;
    })
    .sort((a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime())
    .map((game) => {
      const { uk, ca } = findBroadcasts(game.sport, game.homeTeam, game.awayTeam);
      return {
        ...game,
        broadcasts: {
          ...game.broadcasts,
          uk,
          ca,
        },
      };
    });

  return NextResponse.json(games);
}
