import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className=" max-conatiner padding-container flexBetween py-5 z-30 relative">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29}></Image>
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Log in"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <Image
        src="/menu.svg"
        alt="menu icon"
        className="inline-block cursor-pointer lg:hidden"
        width={32}
        height={32}
      />
    </nav>
  );
};

export default Navbar;
