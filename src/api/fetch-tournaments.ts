import { Tournament } from "@/models/matches.models";

export async function getTournaments(queryParams: string = ''): Promise<Tournament[]> {
  const res = await fetch(
    `https://admin.gamebeats.gg/api/tournaments?${queryParams}`
  );
  const data = await res.json();

  return data.data;
}
