import Eclipse from "../Eclipse/Eclipse";
import Date from "../Date/Date"
import Arrows from "../Arrows/Arrows"
import styles from './HistoryMain.module.scss'
import Slider from "../Slider/Slider";

const HistoryMain = () => {
    return (     
        <div className={styles.container}>
            <div className={styles.content}>
                <p className={styles.content__header}>Исторические даты</p>
                <Eclipse />
                <Date />
                <Arrows />
                <Slider />
            </div>
         </div>
    );
}
 
export default HistoryMain;