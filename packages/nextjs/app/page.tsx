import Image from "next/image";
import s from "./page.module.scss";
import Spacer from "@/components/layouts/spacer";
import Button from "@/components/ui/button";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <section className="min-h-screen">
        <Spacer section="sm">
          <h1 className=" font-semibold text-5xl py-5 inline-block ">Trending Auction</h1>
          <div className={s.hero}>
            <div className={s.hero__image}>
              <div>
                <Image src={"/images/randomcar.jpg"} height={800} width={800} alt="Hero Image" />
              </div>
            </div>
            <div className={s.hero__details}>
              <div className={s.details__wrapper}>
                <div className=" py-6 ">
                  <h1 className="text-5xl py-1">DIMO Car </h1>
                  <div>
                    <h2>Owner Name: Vaibhav :)</h2>
                  </div>
                </div>
                <div>
                  <h2>Description</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aperiam sunt quo.</p>
                </div>
                <div className="flex gap-3 py-6">
                  <Button>Place Bid</Button>
                  <Button>Buy Now</Button>
                </div>
              </div>
            </div>
          </div>
        </Spacer>
      </section>
    </>
  );
};

export default Home;
