import Image from "next/image";
import s from "./page.module.scss";
import Spacer from "@/components/layouts/spacer";
import Button from "@/components/ui/button";

const CarPage = () => {
  return (
    <section className=" min-h-screen">
      <Spacer>
        <div className={s.wrapper}>
          <div className={s.image__wrapper}>
            <div className={s.image}>
              <Image width={750} height={750} src={"/images/randomcar.jpg"} alt="Car Image" />
            </div>
          </div>
          <div className={s.details__wrapper}>
            <div className={s.header}>
              <h1>Car Model</h1>
              <p>Owner Name</p>
            </div>
            <div className={s.buttons}>
              <Button>Place Bid</Button>
              <Button>Buy Car</Button>
            </div>
            <div className={s.description}>
              <h2>Description</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sit maiores consectetur.</p>
            </div>
            <div className={s.details}>
              <h2>Details</h2>
              <div>
                <div className={s.detail}>
                  <p>Make</p>
                  <p>Tesla</p>
                </div>
                <div className={s.detail}>
                  <p>Model</p>
                  <p>Tesla CyberTruck</p>
                </div>
                <div className={s.detail}>
                  <p>Year</p>
                  <p>2023</p>
                </div>
                <div className={s.detail}>
                  <p>someother detail</p>
                  <p>Tesla</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Spacer>
    </section>
  );
};

export default CarPage;
