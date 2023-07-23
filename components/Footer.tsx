import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="mt-5 flex flex-col border-t border-gray-100 text-black-100">
      <div className="flex flex-wrap justify-between gap-5 px-6 py-10 max-md:flex-col sm:px-16">
        <div className="flex flex-col items-start justify-start gap-6">
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

      <div className="mt-10 flex flex-wrap items-center justify-between border-t border-gray-100 px-6 py-10 sm:px-16">
        <p>@2023 BuyCar. All Rights Reserved</p>

        <div className="footer_copyrights-link">
          <Link href="/" className="mr-5 text-gray-500">
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
