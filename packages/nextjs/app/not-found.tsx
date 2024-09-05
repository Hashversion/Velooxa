import s from "./not-found.module.scss";

const NotFound = () => {
  return (
    <>
      <div className="flex flex-col items-center min-h-full justify-center m-16">
        <h1 className={s.four}>404</h1>
        <h3 className={s.para}>Page not Found</h3>
      </div>
    </>
  );
};

export default NotFound;
