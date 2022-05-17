import StaggingOptions from "../../components/landing/StaggingOptions";
import SideBar from "../../components/widgets/SideBar";
import styles from '../../styles/Home.module.css'

const StagingOptionPage = () => {
    return (
      <div className={styles.container}>
  
        <div className="mb-3 mt-3 pb-5">
          <SideBar />
  
          <StaggingOptions/>
        </div>
      </div>
    )
  }
  
  export default StagingOptionPage