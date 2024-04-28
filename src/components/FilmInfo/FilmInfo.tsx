import { Link, useParams } from "react-router-dom";
import styles from "./FilmInfo.module.scss";
import cn from "classnames";
import { useQuery } from "@tanstack/react-query";
import { fetchFilmInfo } from "../../services/api";
import { Film, FilmList } from "../../types/types";

function FilmInfo() {
  const { id } = useParams<"id">();

  const { data, isLoading, isSuccess } = useQuery({
    queryFn: () => fetchFilmInfo(id),
    queryKey: ["info", id],
  });

  console.log(data);

  return (
    <section className={styles.main}>
      {isSuccess && (
        <>
          <Link to="/">
            Назад
          </Link>
          <h2 className={styles.caption}>{`${data.vote_average.toFixed(1)} ${
            data.title
          }`}</h2>
          <p className={styles.caption}>{data.overview}</p>
          <img
            src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`}
            alt="Плакат фильма"
          />
        </>
      )}
    </section>
  );
}

export default FilmInfo;
