import React from "react";
import Navbar from "../../src/components/shared/navbar/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="background-light850_dark100  relative">
      <Navbar />
      <div className="flex">
        leftsideBar
        <section className="flex  min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px14">
          <div className="mx-auto w-full max-w-5xl ">{children}</div>
        </section>
        rightsideBar
      </div>
      toster
    </main>
  );
};

export default Layout;
