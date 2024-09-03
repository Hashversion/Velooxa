import Image from "next/image";
import Link from "next/link";
import Spacer from "../spacer";
import s from "./header.module.scss";
import SignInButton from "@/components/layouts/header/signin-button";

const Header = () => {
  return (
    <header>
      <Spacer>
        <div className={s.wrapper}>
          <nav className={s.nav}>
            <Link href="/">
              <div className={s.logo}>
                <Image src="/images/gradient-logo.svg" alt="Logo" width={32} height={32} />
                <h1>Velooxa</h1>
              </div>
            </Link>

            <ul>
              <li>
                <Link href="/posts">Blog</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <SignInButton />
              </li>
            </ul>
          </nav>
        </div>
      </Spacer>
    </header>
  );
};

export default Header;
