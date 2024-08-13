import React from 'react';

interface QuestionProps {
  _id: string;
  title: string;
  tags: {
    _id: string;
    name: string;
  }[];
  author: {
    _id: string;
    name: string;
    picture: string;
    clerkId: string;
  };
  upvotes: string[];
  views: number;
  answers: Array<object>;
  createdAt: Date;
  clerkId?: string | null;
}

const QuestionCard: React.FC<QuestionProps> = ({
  _id,
  title,
  tags,
  author,
  upvotes,
  views,
  answers,
  createdAt,
  clerkId
}) => {
  return (
    <div className="card-wrapper rounded-[10px] p-9 sm:px-11">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">        
          <div>
            <h2 className="text-lg font-semibold">{author.name}</h2>
            <p className="text-sm text-gray-500">
              {new Date(createdAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-500">
         
        </button>
      </div>
      <h1 className="text-xl font-semibold mt-4">{title}</h1>
      <div className="flex items-center space-x-2 mt-4">
        {tags.map((tag) => (
          <span
            key={tag._id}
            className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded"
          >
            {tag.name}
          </span>
        ))}
      </div>
      <div className="flex items-center space-x-4 mt-4">
        <div className="flex items-center space-x-2 text-gray-500">
         
          <span>{upvotes.length}</span>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
