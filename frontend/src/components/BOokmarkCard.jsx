import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

const BookmarkCard = ({ data, onDelete }) => {
  const [expanded, setExpanded] = useState(false);
  const summary = data.summary || "No summary available.";

  return (
    <div className="p-4 border shadow rounded bg-white flex flex-col">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          {data.favicon && (
            <img src={data.favicon} alt="icon" className="w-5 h-5" />
          )}
          <a
            href={data.url}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 font-semibold"
          >
            {data.title}
          </a>
        </div>
        <FaTrash
          onClick={() => onDelete(data._id)}
          className="text-red-500 cursor-pointer"
        />
      </div>

      <div className="text-sm text-gray-700 max-h-48 overflow-y-auto bg-gray-50 p-2 rounded">
        {expanded ? summary : `${summary.slice(0, 300)}...`}
        {summary.length > 300 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="block mt-2 text-blue-500 text-xs underline"
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        )}
      </div>
    </div>
  );
};

export default BookmarkCard;
