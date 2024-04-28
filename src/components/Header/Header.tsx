import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss'
import cn from 'classnames';

function Header() {
    return (
        <div className={styles.main}>
            <h1 className={styles.caption}>Кино справочник</h1>
            <nav>
                <NavLink to='/' className={({isActive}) => cn(styles.link, {[styles.link_active]: isActive})}>Главная</NavLink>
            </nav>
        </div>
    )
}

export default Header;