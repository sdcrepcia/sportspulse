"use client";

import { useState } from "react";
import useSWR from "swr";
import GameCard from "@/components/GameCard";
import SportFilter from "@/components/SportFilter";
import RegionToggle from "@/components/RegionToggle";
import { Game } from "@/lib/espn";

type Region = "us" | "uk" | "ca";
type DayFilter = "today" | "all";

const ALL_SPORTS = ["nfl", "nba", "mlb", "mls", "premier_league", "champions_league"];

const fetcher = (url: string) => fetch(url).then((r) => r.json());

function isTodayEST(dateStr: string) {
  const now = new Date();
  const estOffset = -5 * 60;
  const estNow = new Date(now.getTime() + (estOffset + now.getTimezoneOffset()) * 60000);
  const gameDate = new Date(new Date(dateStr).getTime() + (estOffset + now.getTimezoneOffset()) * 60000);
  return (
    gameDate.getFullYear() === estNow.getFullYear() &&
    gameDate.getMonth() === estNow.getMonth() &&
    gameDate.getDate() === estNow.getDate()
  );
}

export default function Home() {
  const [region, setRegion] = useState<Region>("us");
  const [activeSports, setActiveSports] = useState<string[]>(ALL_SPORTS);
  const [dayFilter, setDayFilter] = useState<DayFilter>("today");

  const { data: games, isLoading } = useSWR<Game[]>(
    "/api/scores",
    fetcher,
    { refreshInterval: 30000 }
  );

  const filtered = (games || []).filter((g) => {
    const sportMatch = activeSports.includes(g.sport);
    const dayMatch = dayFilter === "all" || isTodayEST(g.startTime);
    return sportMatch && dayMatch;
  });

  const liveGames = filtered.filter((g) => g.status === "in");
  const upcomingGames = filtered.filter((g) => g.status === "pre");
  const finalGames = filtered.filter((g) => g.status === "post");

  return (
    <main style={{ maxWidth: 1400, margin: "0 auto", padding: "32px 16px" }}>

      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 24, gap: 12 }}>
        <div>
          <h1 style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.025em", margin: 0 }}>
            📡 SportsPulse
          </h1>
          <p style={{ color: "#6b7280", fontSize: 12, marginTop: 2 }}>
            Live scores · Game times · TV listings
          </p>
        </div>
        <RegionToggle region={region} onChange={setRegion} />
      </div>

      {/* Filters Row */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 28 }}>
        <SportFilter active={activeSports} onChange={setActiveSports} />
        <div style={{ display: "flex", gap: 4, backgroundColor: "#1f2937", padding: 4, borderRadius: 8, alignSelf: "flex-start" }}>
          {(["today", "all"] as DayFilter[]).map((d) => (
            <button
              key={d}
              onClick={() => setDayFilter(d)}
              style={{
                padding: "6px 14px",
                borderRadius: 6,
                fontSize: 13,
                fontWeight: 500,
                border: "none",
                cursor: "pointer",
                backgroundColor: dayFilter === d ? "#4b5563" : "transparent",
                color: dayFilter === d ? "#fff" : "#9ca3af",
                transition: "all 0.15s",
              }}
            >
              {d === "today" ? "Today" : "All"}
            </button>
          ))}
        </div>
      </div>

      {isLoading && (
        <div style={{ color: "#6b7280", fontSize: 14 }}>Loading games...</div>
      )}

      {/* Live Now */}
      {liveGames.length > 0 && (
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#f87171", marginBottom: 16 }}>
            🔴 Live Now
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
            {liveGames.map((g) => (
              <GameCard key={g.id} game={g} region={region} />
            ))}
          </div>
        </section>
      )}

      {/* Coming Up */}
      {upcomingGames.length > 0 && (
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9ca3af", marginBottom: 16 }}>
            🕐 Coming Up
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
            {upcomingGames.map((g) => (
              <GameCard key={g.id} game={g} region={region} />
            ))}
          </div>
        </section>
      )}

      {/* Final */}
      {finalGames.length > 0 && (
        <section>
          <h2 style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4b5563", marginBottom: 16 }}>
            ✅ Final
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16, opacity: 0.6 }}>
            {finalGames.map((g) => (
              <GameCard key={g.id} game={g} region={region} />
            ))}
          </div>
        </section>
      )}

      {!isLoading && filtered.length === 0 && (
        <div style={{ textAlign: "center", color: "#4b5563", padding: "80px 0", fontSize: 14 }}>
          No games found for the selected sports {dayFilter === "today" ? "today" : ""}.
        </div>
      )}

    </main>
  );
}
