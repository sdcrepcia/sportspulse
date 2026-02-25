"use client";

const SPORTS = [
  { value: "nfl",             label: "🏈 NFL" },
  { value: "nba",             label: "🏀 NBA" },
  { value: "mlb",             label: "⚾ MLB" },
  { value: "mls",             label: "⚽ MLS" },
  { value: "premier_league",  label: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 EPL" },
  { value: "champions_league",label: "⭐ UCL" },
  { value: "cfb",             label: "🏈 CFB" },
  { value: "ncaab",           label: "🏀 NCAAB" },
];

export default function SportFilter({
  active,
  onChange,
}: {
  active: string[];
  onChange: (sports: string[]) => void;
}) {
  const toggle = (sport: string) => {
    onChange(
      active.includes(sport)
        ? active.filter((s) => s !== sport)
        : [...active, sport]
    );
  };

  return (
    <div className="flex flex-wrap gap-2">
      {SPORTS.map((s) => (
        <button
          key={s.value}
          onClick={() => toggle(s.value)}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
            active.includes(s.value)
              ? "bg-indigo-600 text-white"
              : "bg-gray-800 text-gray-400 hover:text-white"
          }`}
        >
          {s.label}
        </button>
      ))}
    </div>
  );
}
