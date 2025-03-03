"use client";

import Image from "next/image";
import Link from "next/link";
import Spacer from "../spacer";
import s from "./header.module.scss";
import SignInButton from "@/components/layouts/header/signin-button";
import { getAuthUrl } from "@/services/auth/getAuthURL";

const Header = () => {
  function handleClick() {
    const authUrl = getAuthUrl();
    window.location.href = authUrl;
  }

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
                <button className=" hover:underline cursor-pointer">Buy</button>
                <button className=" hover:underline cursor-pointer" onClick={handleClick}>
                  Sell
                </button>
                <Link className="hover:underline" href="/auctions">
                  Auctions
                </Link>
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
