import { IRecentMatch } from "@/models/recent-matches.models";

export async function getRecentMatches(
  queryParams: string
): Promise<IRecentMatch[]> {
  const res = await fetch(
    `https://admin.gamebeats.gg/api/matches?${queryParams}`
  );
  const data = await res.json();

  return data.data;
}
