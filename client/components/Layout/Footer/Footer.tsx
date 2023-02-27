import Link from "next/link";

interface FooterProps {
  url: string;
  name: string;
}

export default function Footer() {
  return (
    <div className="bg-neutral-900 flex bottom-0 w-full border-t-[1px] border-neutral-600">
      <MobileFooter />
    </div>
  );
}

function MobileFooter() {
  return (
    <div className="w-full flex justify-center my-6">
      <div className="flex w-3/4 justify-around text-neutral-200">
        <InternalLinks />
        <SocialLinks />
      </div>
    </div>
  );
}

function InternalLinks() {
  return (
    <div className="grid items-center">
      <Link href="/" className="">
        Om oss
      </Link>
      <Link href="/" className="">
        Kontakt
      </Link>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="grid items-center">
      <a href="facebook.com" className="">
        Facebook
      </a>
      <a href="instagram.com" className="">
        Instagram
      </a>
    </div>
  );
}
