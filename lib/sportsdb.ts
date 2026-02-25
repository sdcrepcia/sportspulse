type RegionBroadcasts = { uk: string[]; ca: string[] };

const LEAGUE_BROADCASTS: Record<string, RegionBroadcasts> = {
  champions_league: {
    uk: ["TNT Sports 1"],
    ca: ["DAZN Canada"],
  },
  premier_league: {
    uk: ["Sky Sports Premier League"],
    ca: ["DAZN Canada"],
  },
  europa_league: {
    uk: ["TNT Sports 2"],
    ca: ["DAZN Canada"],
  },
  mls: {
    uk: ["Apple TV+"],
    ca: ["Apple TV+", "TSN"],
  },
  nba: {
    uk: ["Sky Sports Arena"],
    ca: ["TSN", "Sportsnet"],
  },
  nfl: {
    uk: ["Sky Sports NFL"],
    ca: ["TSN", "CTV"],
  },
  mlb: {
    uk: [],
    ca: ["Sportsnet", "TSN"],
  },
  nhl: {
    uk: [],
    ca: ["Sportsnet", "TSN"],
  },
};

export function findBroadcasts(
  sport: string,
  _homeTeam: string,
  _awayTeam: string
): RegionBroadcasts {
  return LEAGUE_BROADCASTS[sport] ?? { uk: [], ca: [] };
}

// Keep this export so route.ts doesn't break — just returns empty array now
export async function fetchTVListings(_date: string): Promise<any[]> {
  return [];
}

export type SportsDBTVEvent = any;
