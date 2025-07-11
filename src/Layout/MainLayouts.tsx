import React, { ReactElement } from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import ResponsiveNavBar from "./Responsivenav";

type Props = {
  title?: string;
  children: ReactElement | ReactElement[];
};

export default function MainLayouts({ title = "Jobs In United States Of America", children }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Desktop Header */}
      <header className="hidden lg:block sticky top-0 z-50 bg-white shadow-md">
        <Header />
      </header>

      {/* Mobile Nav */}
      <nav className="lg:hidden sticky top-0 z-50 bg-white shadow-md">
        <ResponsiveNavBar />
      </nav>

      {/* Page content */}
      <main className="min-h-screen">{children}</main>

      {/* Footer */}
      <Footer />
    </>
  );
}
