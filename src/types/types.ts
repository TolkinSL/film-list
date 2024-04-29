export type Genre = {
  id: number;
  name: string;
}


export type Film = {
  adult: boolean,
  backdrop_path: string,
  genre_ids: number[],
  id: number,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number,
  runtime?: number,
  genres?: Genre[],
}

export type FilmExtend = Film & {
  runtime: number,
  genres: Genre[],
};

export type FilmList = {
  page: number,
  results: Film[],
  total_pages: number,
  total_result: number
}
