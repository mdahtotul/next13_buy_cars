import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />

          <p className="text-base text-gray-700">
            BuyCar 2023 <br /> All rights reserved &copy;
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((_, idx) => (
            <div key={idx} className="footer__link">
              <h3 className="font-bold">{_.title}</h3>
              {_.links.map((el, idx2) => (
                <Link key={idx2} href={el.url}>
                  {el.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>@2023 BuyCar. All Rights Reserved</p>

        <div className="footer_copyrights-link">
          <Link href="/" className="text-gray-500 mr-5">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
