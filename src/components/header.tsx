"use client";
import Image from "next/image";
import VercelIcon from "../../public/vercel.svg";
import Navbar from "./navbar";

const Header = () => {
  return (
    <header className="flex items-center justify-between border-b border-zinc-200 shadow-sm px-12 py-6 ">
      <Image
        quality={100}
        src={VercelIcon}
        alt="Vercel"
        width={50}
        height={50}
      />
      <Navbar />
    </header>
  );
};

export default Header;
