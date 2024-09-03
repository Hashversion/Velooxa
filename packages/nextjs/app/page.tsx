import Spacer from "@/components/layouts/spacer";
import Scene from "@/components/r3f/scene";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <section className="min-h-screen">
        <Spacer>
          <Scene />
        </Spacer>
      </section>
    </>
  );
};

export default Home;
