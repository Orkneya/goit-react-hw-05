import s from "./Loader.module.css";
import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className={s.container}>
      <ClipLoader color="#36d7b7" loading="Loading..." size={50} />
    </div>
  );
};

export default Loader;
