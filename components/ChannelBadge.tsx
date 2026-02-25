import { getChannel } from "@/lib/channels";

export default function ChannelBadge({ name }: { name: string }) {
  const ch = getChannel(name);
  return (
    <span className={`${ch.color} ${ch.textColor} text-xs font-bold px-2 py-0.5 rounded`}>
      {ch.abbr}
    </span>
  );
}
