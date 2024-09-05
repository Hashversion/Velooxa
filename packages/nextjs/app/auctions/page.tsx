import Image from "next/image";
import s from "./page.module.scss";
import Spacer from "@/components/layouts/spacer";

const AuctionsPage = () => {
  return (
    <>
      <section>
        <Spacer>
          <div>
            <h1 className={s.heading}>Live Auctions</h1>
          </div>
          <div className={s.auction}>
            <div className={s.card}>
              <div className={s.card__image}>
                <Image src={"/images/tesla-v1.avif"} width={600} height={600} alt="Car Image" />
              </div>
              <div className={s.card__details}>
                <div className={s.card__available}>Available</div>
                <div className="flex justify-between">
                  <div>
                    <div>Tesla Cybertruck</div>
                    <div>Vaibhav</div>
                  </div>
                  <div className=" self-end">3 ETH</div>
                </div>
              </div>
            </div>
            <div className={s.card}>
              <div className={s.card__image}>
                <Image src={"/images/tesla-v1.avif"} width={600} height={600} alt="Car Image" />
              </div>
              <div className={s.card__details}>
                <div className={s.card__available}>Available</div>
                <div className="flex justify-between">
                  <div>
                    <div>Tesla Cybertruck</div>
                    <div>Vaibhav</div>
                  </div>
                  <div className=" self-end">3 ETH</div>
                </div>
              </div>
            </div>
          </div>
        </Spacer>
      </section>
    </>
  );
};

export default AuctionsPage;
