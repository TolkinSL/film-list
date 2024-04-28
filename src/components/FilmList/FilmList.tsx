import { NavLink, Link } from "react-router-dom";
import styles from "./FilmList.module.scss";
import cn from "classnames";
import { useQuery } from "@tanstack/react-query";
import { fetchFilmList } from "../../services/api";

function FilmList() {
  const { data, isLoading, isSuccess } = useQuery({
    queryFn: () => fetchFilmList(),
    queryKey: ["film_list"],
  });

  console.log(data);

  return (
    <section className={styles.main}>
      <h1 className={styles.caption}>Лучшие фильмы</h1>
      {isLoading && <h2>DownLoad</h2>}
      {isSuccess && data.results.map((film) => <Link key={film.id} to={`film/${film.id}`}><p>{film.title}</p></Link>)}
    </section>
  );
}

export default FilmList;
