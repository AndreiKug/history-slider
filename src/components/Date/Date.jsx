import styles from './Date.module.scss'

const Date = () => {
    return (
        <div className={styles.date}>
            <span className={styles.date__first}>2015</span>
            <span className={styles.date__second}>2022</span>
        </div>
    );
}
 
export default Date;