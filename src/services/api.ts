import {FilmList, Film, Genre, FilmExtend} from "../types/types";

const BASE = "https://api.themoviedb.org";

export async function fetchFilmList(page? = '1'): Promise<FilmList> {
  const queries = `3/movie/top_rated?api_key=292dc0004de93017d125e099d73ca6e7&language=ru-RU&page=${page}`;
  const res = await fetch(`${BASE}/${queries}`);

  if (!res.ok) {
    throw new Error("Ошибка в загрузке списка фильмов!");
  }

  return res.json();
}

export async function fetchFilmGenres(id: string | undefined): Promise<FilmList> {
  const queries = `3/discover/movie?api_key=292dc0004de93017d125e099d73ca6e7&language=ru-RU&sort_by=popularity.desc&with_genres=${id}`;
  const res = await fetch(`${BASE}/${queries}`);

  if (!res.ok) {
    throw new Error("Ошибка в загрузке списка фильмов!");
  }

  return res.json();
}

export async function fetchFilmInfo(id: string | undefined): Promise<FilmExtend> {
  const queries = `3/movie/${id}?api_key=292dc0004de93017d125e099d73ca6e7&language=ru-RU`;
  const res = await fetch(`${BASE}/${queries}`);

  if (!res.ok) {
    throw new Error("Ошибка в загрузке информации о фильме!");
  }

  return res.json();
}

/**
 * Преобразует дату в вид '11 марта 1972'
 * @param myDate
 */
export function dateFormat(myDate: string): string {
  const monthMap = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];

  const [year, monthIndex, day] = myDate.split("-");
  const monthString = monthMap[parseInt(monthIndex) - 1];

  return `${day} ${monthString} ${year}`;
}

export function genreList(genresList: Genre[]): string {
  const newList = genresList.map(item => item.name);

  return newList.join(', ');
}
