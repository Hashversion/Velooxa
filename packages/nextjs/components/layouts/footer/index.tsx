import { SwitchTheme } from "@/components/SwitchTheme";
import Spacer from "@/components/layouts/spacer";

const Footer = () => {
  return (
    <footer>
      <Spacer>
        <div className=" fixed right-[3vw] bottom-[3vh]">
          <SwitchTheme />
        </div>
      </Spacer>
    </footer>
  );
};

export default Footer;
