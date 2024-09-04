import Image from "next/image";
import Link from "next/link";
import Spacer from "../spacer";
import s from "./header.module.scss";
import NavLink from "./navlink";
import SignInButton from "@/components/layouts/header/signin-button";

const Header = () => {
  return (
    <header>
      <Spacer>
        <div className={s.wrapper}>
          <nav className={s.nav}>
            <div className={s.nav__left}>
              <Link href="/">
                <div className={s.logo}>
                  <Image src="/images/gradient-logo.svg" alt="Logo" width={32} height={32} />
                  <h1>Velooxa</h1>
                </div>
              </Link>
              <ul>
                <NavLink>Buy</NavLink>
                <NavLink>Sell</NavLink>
                <NavLink>Auctions</NavLink>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <SignInButton label="Login" />
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </Spacer>
    </header>
  );
};

export default Header;
