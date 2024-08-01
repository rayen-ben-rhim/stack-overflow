"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import { motion } from "framer-motion";
import RenderTag from "./RenderTag";

const RightSidebar = () => {
  const hotQuestions = [
    { _id: 1, title: "How do I use this website?" },
    { _id: 2, title: "How do I use this website?" },
    { _id: 3, title: "How do I use this website?" },
    { _id: 4, title: "How do I use this website?" },
  ];
  const popularTags = [
    { _id: 1, name: "javascript", totalQuestions: 3 },
    { _id: 2, name: "react", totalQuestions: 14 },
    { _id: 3, name: "next", totalQuestions: 5 },
    { _id: 4, name: "vue", totalQuestions: 50 },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className='custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
          <div className="mt-7 flex flex-col gap-4">
            {hotQuestions.map((question) => (
              <a
                href="#"
                key={question._id}
                className="flex cursor-pointer items-center justify-between gap-7"
              >
                <p className="body-medium text-dark500_light700">
                  {question.title}
                </p>
                <Image
                  src="/assets/icons/chevron-right.svg"
                  alt="chevron right"
                  width={20}
                  height={20}
                  className="invert-colors"
                />
              </a>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
          <div className="mt-7 flex flex-col gap-4">
            {popularTags.map((tag) => (
              <RenderTag 
                key={tag._id}
                _id={tag._id.toString()}
                name={tag.name}
                totalQuestions={tag.totalQuestions}
                showCount
              />
            ))}
        </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default RightSidebar;


