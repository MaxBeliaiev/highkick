import {IMatch} from "@/models/matches.models";


export async function getMatches(queryParams: string): Promise<IMatch[]> {
    const res = await fetch(
        `https://admin.gamebeats.gg/api/matches?${queryParams}`);
    const data = await res.json();

    return data.data
}
