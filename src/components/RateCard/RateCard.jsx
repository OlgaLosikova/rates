import styles from "./RateCard.module.css";
import cn from "classnames";
const RateCard = (props) => {
  const { header, price, speed, headerColor, contentColor, select } = props;
  const headerBg = cn(styles.h2, styles[headerColor]);
  const contentBg = cn(styles.container, styles[contentColor]);
  const cardStyle = cn(styles.rateCard, { [styles.select]: select });

  return (
    <div className={cardStyle}>
      <h2 className={headerBg}>Безлимитный {header}</h2>
      <p className={contentBg}>
        руб <span className={styles.price}>{price}</span> /мес
      </p>
      <p>до {speed} Мбит/сек</p>
      <p className={styles.footer}>Объем включенного трафика не ограничен</p>
    </div>
  );
};
export default RateCard;
