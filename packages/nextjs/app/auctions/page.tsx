import Image from "next/image";
import Link from "next/link";
import s from "./page.module.scss";
import Spacer from "@/components/layouts/spacer";

const AuctionsPage = () => {
  const details = [
    {
      imageSrc: "/images/tesla-v1.avif",
      availability: "available",
      make: "Tesla Cybertruck",
      owner: "Vaibhav",
      auctionID: "1",
    },

    {
      imageSrc: "/images/cybertruck.jpg",
      availability: "available",
      make: "Tesla Cybertruck",
      owner: "Vaibhav",
      auctionID: "2",
    },
    {
      imageSrc: "/images/tesla.avif",
      availability: "available",
      make: "Tesla Cybertruck",
      auctionID: "3",
      owner: "Vaibhav",
    },
  ];
  return (
    <>
      <section>
        <Spacer>
          <div>
            <h1 className={s.heading}>Live Auctions</h1>
          </div>
          <div className={s.auction}>
            {details.map(detail => (
              <Link key={crypto.randomUUID()} href={`/buy/${detail.auctionID}`} className={s.card}>
                <div className={s.card__image}>
                  <Image src={detail.imageSrc} width={600} height={600} alt="Car Image" />
                </div>
                <div className={s.card__details}>
                  <div className={s.card__available}>{detail.availability}</div>
                  <div className="flex justify-between">
                    <div>
                      <div>{detail.make}</div>
                      <div>{detail.owner}</div>
                    </div>
                    <div className=" self-end">3 ETH</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Spacer>
      </section>
    </>
  );
};

export default AuctionsPage;
