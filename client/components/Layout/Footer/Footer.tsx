import Link from "next/link";

interface FooterProps {
  url: string;
  name: string;
}

export default function Footer() {
  return (
    <div className="bg-black flex bottom-0 w-full h-20">
      <MobileFooter />
    </div>
  );
}

function MobileFooter() {
  return (
    <div className="w-full flex justify-center">
      <div className="flex w-3/4 justify-around">
        <InternalLinks />
        <SocialLinks />
      </div>
    </div>
  );
}

function InternalLinks() {
  return (
    <div className="grid text-white items-center">
      <Link href="/" className="text-neutral-200">
        Om oss
      </Link>
      <Link href="/" className="text-neutral-200">
        Kontakt
      </Link>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="grid text-white items-center">
      <a href="facebook.com" className="text-neutral-200">
        Facebook
      </a>
      <a href="instagram.com" className="text-neutral-200">
        Instagram
      </a>
    </div>
  );
}
