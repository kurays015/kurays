import Kuraysnime from "@/components/anime";

const BASE_URL = process.env.API_BASE_URL;

async function getAnime() {
  try {
    const res = await fetch(`${BASE_URL}/api`);
    if (!res.ok) {
      throw new Error(
        `Error Fetching anime, HTTP error! status: ${res.status}`
      );
    }
    return res.json();
  } catch (error) {
    console.error("Error:", (error as Error).message);
    throw error;
  }
}

export default async function Home() {
  const anime = await getAnime();

  if (!anime.success || !anime || !anime.results)
    return <div>Failed to fetch anime data</div>;

  return <Kuraysnime anime={anime} />;
}
