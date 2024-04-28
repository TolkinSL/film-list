import { NavLink } from 'react-router-dom';
import styles from './Footer.module.scss'
import cn from 'classnames';

function Footer() {
    return (
        <div className={styles.main}>
            <p className={styles.title}>Кино справочник © 2006-2024</p>
        </div>
    )
}

export default Footer;