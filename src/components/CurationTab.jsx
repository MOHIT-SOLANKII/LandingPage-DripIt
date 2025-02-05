import styles from "./CurationTab.module.css";
import banner1 from "../assets/banner-1.png";
import banner2 from "../assets/banner-2.png";
import banner3 from "../assets/banner-3.png";
import banner4 from "../assets/banner-4.png";
import prop1 from "../assets/prop-banner-1.svg";
import prop2 from "../assets/prop-banner-2.svg";
import prop3 from "../assets/prop-banner-3.svg";
import prop4 from "../assets/prop-banner-4.svg";

const CurationTab = () => {
  return (
    <>
      {/* <div className={styles.curationTabChild} />
      <img className={styles.banner1} alt="" src={banner1} />
      <img className={styles.banner4} alt="" src={banner4} />
      <img className={styles.banner2} alt="" src={banner2} />
      <img className={styles.banner3} alt="" src={banner3} />
      <div className={styles.viewCurationsWrapper}>
        <div className={styles.viewCurations}>View Curations 👀</div>
      </div>
      <div className={styles.notSureWhat}>Not sure what to wear?</div>
      <div className={styles.drippitCurationsBrings}>
        Drippit Curations brings together the hottest fashion trends in one
        place.
      </div>
      <img className={styles.prop3} alt="" src={prop3} />
      <img className={styles.prop1} alt="" src={prop1} />
      <img className={styles.prop4} alt="" src={prop4} />
      <img className={styles.prop2} alt="" src={prop2} /> */}

      <div className="relative max-w-7xl h-[359px] mx-auto bg-gray-50 rounded-xl mt-5">
        <div className="absolute top-3  w-full flex justify-center items-center opacity-50">
          Not sure what to wear?
        </div>
        <div className="absolute top-10 w-full flex justify-center items-center text-2xl">
          Drippit Curations brings together the hottest fashion trends in one
          place.
        </div>
        <div className="absolute top-20 w-full flex justify-center items-center">
          <div className="border-2 border-black rounded-2xl px-5 py-4 cursor-pointer">
            View Curations 👀
          </div>
        </div>

        <img src={prop1} className="absolute left-20 top-6" alt="" />
        <img src={prop2} className="absolute left-60 bottom-20" alt="" />
        <img src={prop3} className="absolute right-72 bottom-24" alt="" />
        <img src={prop4} className="absolute right-20 top-1" alt="" />

        <img
          src={banner1}
          className="absolute left-0 bottom-0 object-cover"
          alt=""
        />
        <img src={banner2} className="absolute left-64 bottom-0 object-cover" alt="" />
        <img src={banner3} className="absolute right-80 bottom-0 object-cover" alt="" />
        <img src={banner4} className="absolute right-0 bottom-0 object-cover" alt="" />
      </div>
    </>
  );
};

export default CurationTab;
