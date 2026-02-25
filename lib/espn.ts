export type Game = {
  id: string;
  sport: string;
  homeTeam: string;
  awayTeam: string;
  homeLogo: string;
  awayLogo: string;
  homeScore: string | null;
  awayScore: string | null;
  status: "pre" | "in" | "post";
  displayClock: string | null;
  startTime: string;
  broadcasts: {
    us: string[];
    uk: string[];
    ca: string[];
  };
};

const ESPN_ENDPOINTS: Record<string, string> = {
  nfl: "https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard",
  nba: "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard",
  mlb: "https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/scoreboard",
  mls: "https://site.api.espn.com/apis/site/v2/sports/soccer/usa.1/scoreboard",
  premier_league: "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/scoreboard",
  champions_league: "https://site.api.espn.com/apis/site/v2/sports/soccer/uefa.champions/scoreboard",
  cfb: "https://site.api.espn.com/apis/site/v2/sports/football/college-football/scoreboard",
  ncaab: "https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/scoreboard",
};

export async function fetchESPNGames(sport: string): Promise<Game[]> {
  const url = ESPN_ENDPOINTS[sport];
  if (!url) return [];

  const res = await fetch(url, { next: { revalidate: 30 } });
  if (!res.ok) return [];
  const data = await res.json();

  return (data.events || []).map((event: any) => {
    const comp = event.competitions?.[0];
    const home = comp?.competitors?.find((c: any) => c.homeAway === "home");
    const away = comp?.competitors?.find((c: any) => c.homeAway === "away");
    const status = event.status?.type?.state; // "pre", "in", "post"

    const usBroadcasts = (comp?.broadcasts || [])
      .filter((b: any) => b.market === "national" || !b.market)
      .flatMap((b: any) => b.names || []);

    return {
      id: event.id,
      sport,
      homeTeam: home?.team?.displayName || "",
      awayTeam: away?.team?.displayName || "",
      homeLogo: home?.team?.logo || "",
      awayLogo: away?.team?.logo || "",
      homeScore: home?.score ?? null,
      awayScore: away?.score ?? null,
      status,
      displayClock: event.status?.displayClock || null,
      startTime: event.date,
      broadcasts: {
        us: usBroadcasts,
        uk: [], // filled in by TheSportsDB layer
        ca: [], // filled in by TheSportsDB layer
      },
    };
  });
}
