import styles from "./RateCard.module.css";
import cn from "classnames";
import { useState } from "react";

const RateCard = (props) => {
  const { header, price, speed, comment, headerColor, contentColor} =
    props;
  const [cardSelect, setCardSelect] = useState(false);
  const handleClick = () => {
    setCardSelect(!cardSelect);
  };
  const headerBg = cn(styles.h2, styles[headerColor]);
  const contentBg = cn(styles.container, styles[contentColor]);
  const cardStyle = cn(
    styles.rateCard,
    cardSelect && styles.select 
  );

  return (
    <div onClick={handleClick} className={cardStyle}>
      <h2 className={headerBg}>{header}</h2>
      <p className={contentBg}>
        руб <span className={styles.price}>{price}</span> /мес
      </p>
      <p>{speed}</p>
      <p className={styles.footer}>{comment}</p>
    </div>
  );
};
export default RateCard;
