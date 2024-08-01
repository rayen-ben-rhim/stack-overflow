"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { sidebarLinks } from "../../../constants/index";
import { SignedIn, SignedOut, SignIn, SignInButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { SignOutButton } from "@clerk/nextjs";
import { motion } from "framer-motion";

const NavContent = () => {
  const pathname = usePathname();

  return (
    <section className="custom-scrollbar background-light900_dark200 light-border sticky left-0 top-0 flex h-screen w-fit flex-col justify-between  overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
      {sidebarLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;

        return (
          <motion.div
            key={item.route}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={item.route}
              className={`${
                isActive
                  ? "primary-gradient rounded-lg text-light-900"
                  : "text-dark300_light900"
              } flex items-center justify-start gap-4 bg-transparent p-4`}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className={`${isActive ? "" : "invert-colors"}`}
              />
              <motion.p
                className={`${isActive ? "base-bold" : "base-medium"} md:block hidden`}
                animate={{ scale: isActive ? 1.1 : 1 }}
                transition={{ duration: 0.2 }}
              >
                {item.label}
              </motion.p>
            </Link>
          </motion.div>
        );
      })}
      <SignedOut>
        <div className="flex flex-col gap-3">
          <Link href="/sign-in">
            <Button className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-slate-300 bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90 h-9 small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              <span className="primary-text-gradient  md:block hidden">
                Log In
              </span>
              <Image
                src="/assets/icons/account.svg" // Replace with your login icon path
                alt="Log In"
                width={20}
                height={20}
                className="block md:hidden invert-colors"
              />
            </Button>
          </Link>

          <Link href="/sign-up">
            <Button className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-slate-300 bg-slate-900 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90 h-9 small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg border px-4 py-3 shadow-none background-light900_dark200">
              <span className=" md:block hidden">Sign Up</span>
              <Image
                src="/assets/icons/sign-up.svg" // Replace with your signup icon path
                alt="Sign Up"
                width={20}
                height={20}
                className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-slate-300 bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90 h-9 small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none"/>
              
             
            </Button>
          </Link>
        </div>
      </SignedOut>
      <SignedIn>
        <SignOutButton>
        <Button className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-slate-300 bg-slate-50 text-slate-900 hover:bg-slate-50/90 dark:bg-slate-900 dark:text-slate-50 dark:hover:bg-slate-900/90 h-9 small-medium light-border-2 btn-tertiary min-h-[41px] w-full rounded-lg border px-4 py-3 shadow-none">
              <span className=" md:block hidden">Sign out </span>
              <Image
                src="/assets/icons/log-out-outline.svg" // Replace with your signup icon path
                alt="Sign Up"
                width={20}
                height={20}
                className="block md:hidden invert-colors"
              />
            </Button>
        </SignOutButton>
      </SignedIn>
    </section>
  );
};

const LeftSidebar = () => {
  return (
    <div className=" custom-scrollbar">
      <div className=" flex grow flex-col justify-between overflow-y-auto">
        <NavContent />
      </div>
    </div>
  );
};

export default LeftSidebar;