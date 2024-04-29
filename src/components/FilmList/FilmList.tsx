import {useParams} from "react-router-dom";
import styles from "./FilmList.module.scss";
import { useQuery } from "@tanstack/react-query";
import { fetchFilmList } from "../../services/api";
import FilmCard from '../FilmCard/FilmCard';
import Pagination from "../Pagination/Pagination.tsx";

function FilmList() {
  const {id } = useParams<"id">();

  // console.log('id ', id);

  const { data, isLoading, isSuccess } = useQuery({
    queryFn: () => fetchFilmList(id),
    queryKey: ["film_list", id],
  });

  // console.log(data);

  return (
    <section className={styles.main}>
      <Pagination page={id} total_pages={data?.total_pages} />
      <h1 className={styles.caption}>Лучшие фильмы</h1>
      {isLoading && <h2>DownLoad</h2>}
      <div className={styles.film_list}>
      {isSuccess && data.results.map((film) => <FilmCard key={film.id} film_info={film} card_type='big'/>)}
      </div>
    </section>
  );
}

export default FilmList;
