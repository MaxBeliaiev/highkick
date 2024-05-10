import { Competitor } from "@/models/matches.models";

export async function getCompetitors(
  queryParams?: string
): Promise<Competitor[]> {
  const res = await fetch(
    `https://admin.gamebeats.gg/api/competitors?${queryParams}`
  );
  const data = await res.json();

  return data.data;
}
