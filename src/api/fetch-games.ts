import { Game } from "@/models/recent-matches.models";

export async function getGames(queryParams: string): Promise<Game[]> {
  const res = await fetch(
    `https://admin.gamebeats.gg/api/games?${queryParams}`
  );
  const data = await res.json();

  return data.data;
}
