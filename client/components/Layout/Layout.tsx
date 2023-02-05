import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import React from "react";
import Head from "next/head";
import { MobileNavBar } from "./Navbar";

export default function Layout({ children }: React.PropsWithChildren) {
  const [navMenuOpen, setNavMenuOpen] = React.useState(false);

  return (
    <>
      <Head>
        <title>Gainoteket</title>
      </Head>

      {navMenuOpen ? (
        <div>
          <MobileNavBar setNavMenuOpen={setNavMenuOpen} />
        </div>
      ) : (
        <div>
          <Navbar setNavMenuOpen={setNavMenuOpen} />
          <main>{children}</main>
          <Footer />
        </div>
      )}
    </>
  );
}
