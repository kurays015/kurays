import { genres } from "@/lib/genres";

type TVInfo = {
  showType: string;
  duration: string;
  releaseDate: string;
  quality: string;
  episodeInfo: {
    sub: string;
    dub: string;
  };
};

export type BaseData = {
  id: string;
  number?: string;
  data_id: string;
  poster: string;
  title: string;
  japanese_title: string;
  description?: string;
};

type BaseDataWithTVInfo = BaseData & {
  tvInfo: TVInfo;
};

export type SpotLights = BaseData & {
  tvInfo: TVInfo;
};

export type Trending = Omit<BaseData, "description">;

type TopTenProps = Omit<BaseData, "description"> & {
  tvInfo: TVInfo;
};

export type TopTen = {
  today: TopTenProps[];
  week: TopTenProps[];
  month: TopTenProps[];
};

type Todays = {
  schedule: Schedule[];
};

type Schedule = {
  id: string;
  data_id: string;
  title: string;
  japanese_title: string;
  releaseDate: string;
  time: string;
  episode_no: string;
};

export type TopAiring = BaseDataWithTVInfo;

export type MostPopular = BaseDataWithTVInfo;

export type MostFavorite = BaseDataWithTVInfo;

export type TopUpcoming = BaseDataWithTVInfo;

type LatestCompleted = BaseDataWithTVInfo;

type LatestEpisode = BaseDataWithTVInfo;

type RecentlyAdded = BaseDataWithTVInfo;

type Genres = (typeof genres)[number]; // "Action" | "Adventure" | ...

type AnimeData = {
  spotlights: SpotLights[];
  trending: Trending[];
  topTen: TopTen;
  todays: Todays;
  topAiring: TopAiring[];
  mostPopular: MostPopular[];
  mostFavorite: MostFavorite[];
  latestCompleted: LatestCompleted[];
  latestEpisode: LatestEpisode[];
  topUpcoming: TopUpcoming[];
  recentlyAdded: RecentlyAdded[];
  genres: Genres[];
};

export type AnimeDataResponse = {
  success: boolean;
  results: AnimeData;
};
