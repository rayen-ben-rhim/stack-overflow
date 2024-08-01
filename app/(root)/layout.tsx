import React from "react";
import Navbar from "../../src/components/shared/navbar/Navbar";
import RightSidebar from "@/components/shared/RightSidebar"
import LeftSidebar from "@/components/shared/LeftSidebar"
import { SignIn, SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="background-light850_dark100  relative">
      <Navbar />
      <div className="flex">
        <LeftSidebar />
        <section className="flex  min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px14">
          <div className="mx-auto w-full max-w-5xl ">{children}</div>
        </section>
        <RightSidebar />
      </div>
     
    </main>
  );
};

export default Layout;
