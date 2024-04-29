import {Link} from "react-router-dom";
import styles from "./FilmCard.module.scss";
import cn from "classnames";
import {dateFormat} from "../../services/api";
import {Film} from "../../types/types";

interface FilmCardProps {
  film_info: Film;
  card_type: "big" | "small";
}

function FilmCard({film_info, card_type}: FilmCardProps) {

  return (
    <Link className={styles.main_link} to={`/film/${film_info.id}/${film_info.genre_ids[0]}`}>
      <article className={cn(styles.main, styles[card_type])}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${film_info.poster_path}`}
          alt="Плакат фильма"
        />
        <div className={styles.film_description}>
          {card_type === 'big' && <p className={styles.film_rating}>{film_info.vote_average.toFixed(1)}</p>}
          <div className={styles.film_textInfo}>
            <p className={styles.film_title}>{film_info.title}</p>
            {card_type === 'big' && <p className={styles.film_subtitle}>{dateFormat(film_info.release_date)}</p>}
          </div>
      </div>
      {/*<h3 className={styles.caption}>{`${film_info.vote_average.toFixed(1)} ${*/}
      {/*  film_info.title*/}
      {/*}`}</h3>*/}
    </article>
</Link>
)
  ;
}

export default FilmCard;
