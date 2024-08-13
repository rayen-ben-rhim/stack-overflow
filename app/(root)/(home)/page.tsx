"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import Filter from "@/components/shared/Filter";
import { HomePageFilters } from "../../../constants/Filters";
import HomeFilters from "@/components/HomeFilters";
import NoResult from "@/components/shared/NoResult";
import QuestionCard from "@/components/cards/QuestionCard";

const Home = () => {
  const questions = [
    {
      _id: "1",
      title: "How to use React Hooks?",
      description:
        "I'm new to React and I'm having trouble understanding how to use React Hooks.",
      tags: [{ _id: "1", name: "React" }, { _id: "2", name: "Hooks" }],
      author: {
        _id: "author1",
        name: "Author Name 1",
        picture: "/path/to/picture1.jpg",
        clerkId: "clerkId1",
      },
      views: 100,
      answers: [],
      upvotes: [],
      createdAt: new Date("2022-01-01"),
      clerkId: null,
    },
    {
      _id: "2",
      title: "What is the difference between var, let, and const?",
      description:
        "I'm confused about the difference between var, let, and const in JavaScript.",
      tags: [{ _id: "3", name: "JavaScript" }, { _id: "4", name: "Variables" }],
      author: {
        _id: "author2",
        name: "Author Name 2",
        picture: "/path/to/picture2.jpg",
        clerkId: "clerkId2",
      },
      views: 50,
      answers: [],
      upvotes: [],
      createdAt: new Date("2022-01-02"),
      clerkId: null,
    },
    {
      _id: "3",
      title: "How to optimize the performance of a React application?",
      description:
        "My React application is slow and I want to know how to optimize its performance.",
      tags: [{ _id: "1", name: "React" }, { _id: "5", name: "Performance" }],
      author: {
        _id: "author3",
        name: "Author Name 3",
        picture: "/path/to/picture3.jpg",
        clerkId: "clerkId3",
      },
      views: 150,
      answers: [],
      upvotes: [],
      createdAt: new Date("2022-01-03"),
      clerkId: null,
    },
    {
      _id: "4",
      title: "What is the best way to handle state in a React application?",
      description:
        "I'm not sure what the best way is to handle state in a React application.",
      tags: [{ _id: "1", name: "React" }, { _id: "6", name: "State Management" }],
      author: {
        _id: "author4",
        name: "Author Name 4",
        picture: "/path/to/picture4.jpg",
        clerkId: "clerkId4",
      },
      views: 120,
      answers: [],
      upvotes: [
        "upvote1",
        "upvote2",
        "upvote3",
        "upvote4",
        "upvote5",
        "upvote6",
        "upvote7",
        "upvote8",
        "upvote9",
      ],
      createdAt: new Date("2022-01-04"),
      clerkId: null,
    },
    {
      _id: "5",
      title: "How to implement authentication in a Next.js application?",
      description:
        "I want to implement authentication in my Next.js application but I'm not sure how.",
      tags: [{ _id: "7", name: "Next.js" }, { _id: "8", name: "Authentication" }],
      author: {
        _id: "author5",
        name: "Author Name 5",
        picture: "/path/to/picture5.jpg",
        clerkId: "clerkId5",
      },
      views: 80,
      answers: [],
      upvotes: [],
      createdAt: new Date("2022-01-05"),
      clerkId: null,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h1 className="h1-bold text-dark100_light900 sm:w-full">
          All Questions
        </h1>

        <Link href="/ask-question">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="primary-gradient min-h-[46px] px-4 py-3 flex justify-end items-center gap-2">
              Ask a Question
            </Button>
          </motion.div>
        </Link>
      </motion.div>
      <motion.div
        className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <LocalSearchBar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions..."
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </motion.div>
      <HomeFilters />
      <div className="mt-10 w-full flex-col gap-6 flex">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard 
            key={question._id}
            _id={question._id}
            title={question.title}
            tags={question.tags}
            author={question.author}
            upvotes={question.upvotes}
            views={question.views}
            answers={question.answers}
            createdAt={question.createdAt}
          />
          ))
        ) : (
          <NoResult
            title="No questions found"
            description="There are no questions available at the moment. Be the first one to ask a question!"
            link="/ask-question"
            linkTitle="Ask a Question"
           />
        )}
      </div>
    </motion.div>
  );
};

export default Home;
