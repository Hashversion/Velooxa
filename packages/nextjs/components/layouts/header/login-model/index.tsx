import { Dispatch, SetStateAction, useEffect } from "react";
import s from "./login-model.module.scss";
import CrossIcon from "@/components/assets/CrossIcon";

type LoginModelT = {
  isVisible: boolean;
  onClose: Dispatch<SetStateAction<void>>;
};

const LoginModel = ({ isVisible, onClose }: LoginModelT) => {
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <div className={s.wrapper}>
        <div className={s.model}>
          <div className={s.header}>
            <p>Signup</p>
            <button className=" cursor-pointer" onClick={() => onClose()}>
              <CrossIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModel;
