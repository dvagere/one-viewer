import Instagram from "../../components/landing/Instagram";
import SideBar from "../../components/widgets/SideBar";
import styles from "../../styles/Home.module.css";

const InstagramPage = () => {
  return (
    <div className={styles.container}>
      <div className="mb-3 mt-3 pb-5">
        <SideBar />
        <Instagram />
      </div>
    </div>
  );
};
export default InstagramPage;
