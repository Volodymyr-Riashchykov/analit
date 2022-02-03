// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {BallTriangle,Watch} from "react-loader-spinner";
import s from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className={s.wrapper}>
      <Watch color="#000000" height={80} width={80} />
      {/* <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} /> */}
    </div>
  );
};
export default Spinner;