export type Channel = {
  name: string;
  color: string;
  textColor: string;
  abbr: string;
};

export const CHANNEL_CONFIG: Record<string, Channel> = {
  // 🇺🇸 US - ESPN Family
  "ESPN":            { name: "ESPN",             abbr: "ESPN",   color: "bg-red-600",    textColor: "text-white" },
  "ESPN2":           { name: "ESPN2",            abbr: "ESPN2",  color: "bg-red-800",    textColor: "text-white" },
  "ESPN+":           { name: "ESPN+",            abbr: "ESPN+",  color: "bg-red-700",    textColor: "text-white" },
  "ESPNU":           { name: "ESPNU",            abbr: "ESPNU",  color: "bg-red-900",    textColor: "text-white" },
  "ESPNews":         { name: "ESPNews",          abbr: "ESPNWS", color: "bg-red-950",    textColor: "text-white" },
  "SEC Network":     { name: "SEC Network",      abbr: "SEC",    color: "bg-orange-700", textColor: "text-white" },
  "ACC Network":     { name: "ACC Network",      abbr: "ACC",    color: "bg-blue-900",   textColor: "text-white" },
  "Big Ten Network": { name: "Big Ten Network",  abbr: "BTN",    color: "bg-blue-700",   textColor: "text-white" },

  // 🇺🇸 US - Broadcast
  "ABC":             { name: "ABC",              abbr: "ABC",    color: "bg-yellow-500", textColor: "text-black" },
  "NBC":             { name: "NBC",              abbr: "NBC",    color: "bg-blue-600",   textColor: "text-white" },
  "CBS":             { name: "CBS",              abbr: "CBS",    color: "bg-blue-800",   textColor: "text-white" },
  "FOX":             { name: "FOX",              abbr: "FOX",    color: "bg-orange-500", textColor: "text-white" },
  "FS1":             { name: "Fox Sports 1",     abbr: "FS1",    color: "bg-orange-600", textColor: "text-white" },
  "FS2":             { name: "Fox Sports 2",     abbr: "FS2",    color: "bg-orange-700", textColor: "text-white" },
  "TBS":             { name: "TBS",              abbr: "TBS",    color: "bg-purple-700", textColor: "text-white" },
  "TNT":             { name: "TNT",              abbr: "TNT",    color: "bg-purple-600", textColor: "text-white" },
  "truTV":           { name: "truTV",            abbr: "truTV",  color: "bg-green-600",  textColor: "text-white" },
  "NBCSN":           { name: "NBC Sports",       abbr: "NBCS",   color: "bg-blue-600",   textColor: "text-white" },
  "CBSSN":           { name: "CBS Sports",       abbr: "CBSSN",  color: "bg-blue-950",   textColor: "text-white" },
  "GOLF":            { name: "Golf Channel",     abbr: "GOLF",   color: "bg-green-700",  textColor: "text-white" },
  "MAX":             { name: "Max",              abbr: "MAX",    color: "bg-indigo-700",  textColor: "text-white" },

  // 🇺🇸 US - Streaming
  "Peacock":         { name: "Peacock",          abbr: "PCK",    color: "bg-sky-500",    textColor: "text-white" },
  "Prime Video":     { name: "Prime Video",      abbr: "PRIME",  color: "bg-cyan-600",   textColor: "text-white" },
  "Apple TV+":       { name: "Apple TV+",        abbr: "ATV+",   color: "bg-gray-700",   textColor: "text-white" },
  "DAZN":            { name: "DAZN",             abbr: "DAZN",   color: "bg-black",      textColor: "text-yellow-400" },
  "Paramount+":      { name: "Paramount+",       abbr: "PARAM+", color: "bg-blue-500",   textColor: "text-white" },

  // 🇺🇸 US - ESPN shorthand overrides (what the API actually returns)
  "PARAM":           { name: "Paramount+",       abbr: "PARAM+", color: "bg-blue-500",   textColor: "text-white" },
  "MLB.T":           { name: "MLB.TV",           abbr: "MLB.TV", color: "bg-blue-600",   textColor: "text-white" },
  "MLB N":           { name: "MLB Network",      abbr: "MLBN",   color: "bg-blue-800",   textColor: "text-white" },
  "MLBN":            { name: "MLB Network",      abbr: "MLBN",   color: "bg-blue-800",   textColor: "text-white" },
  "MLB Network":     { name: "MLB Network",      abbr: "MLBN",   color: "bg-blue-800",   textColor: "text-white" },
  "MLB.TV":          { name: "MLB.TV",           abbr: "MLB.TV", color: "bg-blue-600",   textColor: "text-white" },
  "NHLNET":          { name: "NHL Network",      abbr: "NHLN",   color: "bg-gray-700",   textColor: "text-white" },
  "NHL Network":     { name: "NHL Network",      abbr: "NHLN",   color: "bg-gray-700",   textColor: "text-white" },
  "TNNIS":           { name: "Tennis Channel",   abbr: "TEN",    color: "bg-green-800",  textColor: "text-white" },
  "Tennis Channel":  { name: "Tennis Channel",   abbr: "TEN",    color: "bg-green-800",  textColor: "text-white" },
  "NBATVUS":         { name: "NBA TV",           abbr: "NBATV",  color: "bg-blue-700",   textColor: "text-white" },
  "NBA TV":          { name: "NBA TV",           abbr: "NBATV",  color: "bg-blue-700",   textColor: "text-white" },
  "NFLN":            { name: "NFL Network",      abbr: "NFLN",   color: "bg-blue-900",   textColor: "text-white" },
  "NFL Network":     { name: "NFL Network",      abbr: "NFLN",   color: "bg-blue-900",   textColor: "text-white" },
  "NFL+":            { name: "NFL+",             abbr: "NFL+",   color: "bg-blue-800",   textColor: "text-white" },

  // 🇬🇧 UK
  "Sky Sports Premier League": { name: "Sky Sports PL", abbr: "SKY PL", color: "bg-sky-700",    textColor: "text-white" },
  "Sky Sports Main Event":     { name: "Sky Sports ME", abbr: "SKY ME", color: "bg-sky-600",    textColor: "text-white" },
  "Sky Sports Football":       { name: "Sky Sports F",  abbr: "SKY F",  color: "bg-sky-500",    textColor: "text-white" },
  "Sky Sports Action":         { name: "Sky Sports A",  abbr: "SKY A",  color: "bg-sky-800",    textColor: "text-white" },
  "Sky Sports Arena":          { name: "Sky Sports AR", abbr: "SKY AR", color: "bg-sky-900",    textColor: "text-white" },
  "TNT Sports 1":              { name: "TNT Sports 1",  abbr: "TNT 1",  color: "bg-purple-600", textColor: "text-white" },
  "TNT Sports 2":              { name: "TNT Sports 2",  abbr: "TNT 2",  color: "bg-purple-700", textColor: "text-white" },
  "TNT Sports 3":              { name: "TNT Sports 3",  abbr: "TNT 3",  color: "bg-purple-800", textColor: "text-white" },
  "TNT Sports 4":              { name: "TNT Sports 4",  abbr: "TNT 4",  color: "bg-purple-900", textColor: "text-white" },
  "BBC Sport":                 { name: "BBC Sport",     abbr: "BBC",    color: "bg-orange-600", textColor: "text-white" },
  "BBC One":                   { name: "BBC One",       abbr: "BBC1",   color: "bg-orange-500", textColor: "text-white" },
  "ITV":                       { name: "ITV",           abbr: "ITV",    color: "bg-yellow-600", textColor: "text-black" },
  "Channel 4":                 { name: "Channel 4",     abbr: "CH4",    color: "bg-violet-600", textColor: "text-white" },
  "DAZN UK":                   { name: "DAZN UK",       abbr: "DAZN",   color: "bg-black",      textColor: "text-yellow-400" },
  "Amazon Prime UK":           { name: "Prime Video UK",abbr: "PRIME",  color: "bg-cyan-700",   textColor: "text-white" },

  // 🇨🇦 Canada
  "TSN":             { name: "TSN",              abbr: "TSN",    color: "bg-blue-700",   textColor: "text-white" },
  "TSN2":            { name: "TSN2",             abbr: "TSN2",   color: "bg-blue-600",   textColor: "text-white" },
  "TSN3":            { name: "TSN3",             abbr: "TSN3",   color: "bg-blue-500",   textColor: "text-white" },
  "TSN4":            { name: "TSN4",             abbr: "TSN4",   color: "bg-blue-400",   textColor: "text-black" },
  "TSN5":            { name: "TSN5",             abbr: "TSN5",   color: "bg-blue-300",   textColor: "text-black" },
  "Sportsnet":       { name: "Sportsnet",        abbr: "SN",     color: "bg-red-700",    textColor: "text-white" },
  "SN East":         { name: "SN East",          abbr: "SN E",   color: "bg-red-600",    textColor: "text-white" },
  "SN West":         { name: "SN West",          abbr: "SN W",   color: "bg-red-800",    textColor: "text-white" },
  "SN Ontario":      { name: "SN Ontario",       abbr: "SN ON",  color: "bg-red-900",    textColor: "text-white" },
  "SN Pacific":      { name: "SN Pacific",       abbr: "SN PAC", color: "bg-red-950",    textColor: "text-white" },
  "CBC":             { name: "CBC",              abbr: "CBC",    color: "bg-red-500",    textColor: "text-white" },
  "DAZN Canada":     { name: "DAZN Canada",      abbr: "DAZN",   color: "bg-black",      textColor: "text-yellow-400" },
  "CTV":             { name: "CTV",              abbr: "CTV",    color: "bg-green-700",  textColor: "text-white" },
};

export function getChannel(name: string): Channel {
  return (
    CHANNEL_CONFIG[name] ?? {
      name,
      abbr: name.slice(0, 6).toUpperCase(),
      color: "bg-gray-600",
      textColor: "text-white",
    }
  );
}
