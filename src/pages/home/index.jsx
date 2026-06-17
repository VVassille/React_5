import styles from "./styles.module.css";
import Header from "../../components/header";
import CategoryCardList from "../../components/categoryCardList";
import MainTest from "../../components/main";
function Home() {
  return (
    <div className={styles.homeContainer}>
      <Header />
      <MainTest />
      {/*  <CategoryCardList></CategoryCardList> */}
      {/* Main */}
      {/* Footer */}
    </div>
  );
}

export default Home;
