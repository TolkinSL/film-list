import { FilmList, Film } from "../types/types";

const BASE = "https://api.themoviedb.org";

export async function fetchFilmList(): Promise<FilmList> {
  const queries = `3/movie/top_rated?api_key=292dc0004de93017d125e099d73ca6e7&language=ru-RU`;
  const res = await fetch(`${BASE}/${queries}`);

  if (!res.ok) {
    throw new Error("Failed to fetch todos!");
  }

  return res.json();
}

export async function fetchFilmInfo(id: string | undefined): Promise<Film> {
  const queries = `3/movie/${id}?api_key=292dc0004de93017d125e099d73ca6e7&language=ru-RU`;
  const res = await fetch(`${BASE}/${queries}`);

  if (!res.ok) {
    throw new Error("Failed to fetch todos!");
  }

  return res.json();
}