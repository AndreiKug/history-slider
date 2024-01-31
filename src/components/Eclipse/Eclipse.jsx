import styles from './Eclipse.module.scss'

const Eclipse = () => {
    return ( 
        <div className={styles.eclipse}>

            <div className={`${styles.eclipse__dots} ${styles.eclipse__dots1}`}>
                <span>1</span>
                <p>Технологии</p>
            </div>
            <div className={`${styles.eclipse__dots} ${styles.eclipse__dots2}`}>
                <span>2</span>
                <p>Кино</p>
            </div>
            <div className={`${styles.eclipse__dots} ${styles.eclipse__dots3}`}>
                <span>3</span>
                <p>Литература</p>
            </div>
            <div className={`${styles.eclipse__dots} ${styles.eclipse__dots4}`}>
                <span>4</span>
                <p>Медицина</p>
            </div>
            <div className={`${styles.eclipse__dots} ${styles.eclipse__dots5}`}>
                <span>5</span>
                <p>Спорт</p>
            </div>
            <div className={`${styles.eclipse__dots} ${styles.eclipse__dots6} ${styles.eclipse__dots__active}`}>
                <span>6</span>
                <p>Наука</p>
            </div>
        </div>
    );
}
 
export default Eclipse;