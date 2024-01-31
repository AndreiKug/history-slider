import styles from "./Arrows.module.scss"

const Arrows = () => {
    return ( 
        <div className={styles.arrows}>
            <div className={styles.arrows__pages}>01/06</div>
            <div className={styles.arrows__btns}>
                <button className={`${styles.arrows__btn} ${styles.arrows__btn__left} ${styles.arrows__btn__active}`}></button>
                <button className={`${styles.arrows__btn} ${styles.arrows__btn__right}`}></button>
            </div>              
        </div>
    );
}
 
export default Arrows;