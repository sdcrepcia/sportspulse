"use client";

type Region = "us" | "uk" | "ca";

export default function RegionToggle({
  region,
  onChange,
}: {
  region: Region;
  onChange: (r: Region) => void;
}) {
  const options: { value: Region; label: string }[] = [
    { value: "us", label: "🇺🇸 US" },
    { value: "uk", label: "🇬🇧 UK" },
    { value: "ca", label: "🇨🇦 CA" },
  ];

  return (
    <div className="flex gap-1 bg-gray-800 p-1 rounded-lg">
      {options.map((o) => (
        <button
          key={o.value}
          onClick={() => onChange(o.value)}
          className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
            region === o.value
              ? "bg-gray-600 text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
