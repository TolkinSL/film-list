import cn from "classnames";
import styles from "./Pagination.module.scss";
import {Link} from "react-router-dom";

interface PaginationProps {
  page: string | undefined;
  total_pages: number | undefined;
}

function Pagination({page = '1', total_pages = 5}: PaginationProps) {

  // Номера слева и справа относительно активного номера, которые остаются видимыми
  let left = Math.max( parseInt(page) - 2, 1);
  const right = Math.min(left + 4, total_pages);

  // Корректировка когда страница в конце
  left = Math.max(right - 4, 1);

  // Массив номеров
  const items = [];

  // Первая страница
  if (left > 1) {
    items.push(1);
  }

  // Пропуск
  if (left > 2) {
    items.push(null);
  }

  // Последовательность страниц
  for (let page = left; page <= right; page++) items.push(page);

  // Пропуск
  if (right < total_pages - 1) {
    items.push(null);
  }

  // Последняя страница
  if (right < total_pages) {
    items.push(total_pages);
  }

  // const onClickHandler = (number: number) => (e) => {
  //   if (props.onChange && number) {
  //     e.preventDefault();
  //     props.onChange(number);
  //   }
  // };

  return (
    <ul className={cn(styles.pagination)}>
      {items.map((number, index) => (
        <li key={index}>
          {number ? <Link className={cn(styles.pagination_item, {[styles.pagination_item_active]: number === parseInt(page)})} to={`/${number}`}>{number}</Link> : <p className={styles.pagination_item_split}>...</p>}
        </li>
      ))}
    </ul>
  );
}

export default Pagination;
