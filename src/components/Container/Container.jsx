import styles from "./Container.module.css";
import RateCard from "../RateCard/RateCard";
import { data } from "../../data";


const Container = () => {

  return (
    <div className={styles.container}>
      {data.map((item) => {
        return (
          <RateCard
            key={item.id}
            header={item.header}
            price={item.price}
            speed={item.speed}
            comment={item.comment}
            headerColor={item.headerColor}
            contentColor={item.contentColor}
            select={item.select}
          />
        );
      })}
    </div>
  );
};
export default Container;
