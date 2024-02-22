import styles from "./Container.module.css";
import RateCard from "../RateCard/RateCard";

const Container = () => {
  return (
    <div className={styles.container}>
      <>
        <RateCard header={300} price={300} speed={10} headerColor="headerDefault" contentColor="contentDefault"/>
        <RateCard header={450} price={450} speed={50} headerColor="headerSuccess" contentColor= "contentSuccess"/>
        <RateCard header={550} price={550} speed={100} headerColor="headerDanger" contentColor="contentDanger" select="true"/>
        <RateCard header={1000} price={1000} speed={200} headerColor="headerDark" contentColor="contentDark"/>
      </>
    </div>
  );
};
export default Container;
