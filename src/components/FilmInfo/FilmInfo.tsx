import {useParams, useNavigate} from "react-router-dom";
import styles from "./FilmInfo.module.scss";
import {useQuery} from "@tanstack/react-query";
import {dateFormat, fetchFilmGenres, fetchFilmInfo, genreList} from "../../services/api";
import FilmCard from "../FilmCard/FilmCard.tsx";

function FilmInfo() {
  const {id } = useParams<"id">();
  const {genre_id} = useParams<"genre_id">();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Вернуться на предыдущую страницу
  };

  // console.log(`Parameters ${id} ${genre_id}`);

  const {data, isSuccess} = useQuery({
    queryFn: () => fetchFilmInfo(id),
    queryKey: ["info", id],
  });

  const { data: filmGenres, isSuccess: genresSuccess } = useQuery({
    queryFn: () => fetchFilmGenres(genre_id),
    queryKey: ["filmGenres"],
  });

  // console.log('---filmGenres');
  // console.log(filmGenres);

  return (
    <>
      {isSuccess &&
        <>
          <section className={styles.main}>
            <h2 className={styles.main_caption}>{`${data.vote_average.toFixed(1)} ${
              data.title
            }`}</h2>
            <div className={styles.main_info}>
              <div className={styles.info_description}>
                <p className={styles.info_overview}>{data.overview}</p>
                <div className={styles.info_dataList}>
                  <p className={styles.info_data}>{`Длительность: ${data?.runtime} мин`}</p>
                  <p className={styles.info_data}>{`Популярность: ${data.vote_average}`}</p>
                  <p className={styles.info_data}>{`Дата выхода: ${dateFormat(data.release_date)}`}</p>
                  <p className={styles.info_data}>{`Жанр: ${genreList(data.genres)}`}</p>
                </div>
              </div>
              <img
                src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
                alt="Плакат фильма"
              />
            </div>
            <button className={styles.returnLink} onClick={handleGoBack}>Назад к списку фильмов</button>
          </section>
          <section className={styles.main_sameList}>
            <h2 className={styles.main_caption}>Похожие фильмы</h2>
            <div className={styles.film_list}>
              {genresSuccess && filmGenres?.results.slice(0,5).map((film) => <FilmCard key={film.id} film_info={film} card_type='small' />)}
            </div>
          </section>
        </>
      }
    </>
  );
}

export default FilmInfo;
