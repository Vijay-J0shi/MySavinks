import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

const BookmarkCard = ({ data, onDelete }) => {
  const [expanded, setExpanded] = useState(false);
  const summary = data.summary || "No summary available.";

  return (
    <div
      className="p-4 border shadow rounded flex flex-col"
      style={{
        backgroundColor: "var(--color-primary)",
        color: "var(--color-secondary)",
        fontFamily: "var(--ff)",
        fontSize: "var(--fs-base)",
        lineHeight: "var(--lh)",
      }}
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          {data.favicon && (
            <img src={data.favicon} alt="icon" className="w-5 h-5" />
          )}
          <a
            href={data.url}
            target="_blank"
            rel="noreferrer"
            className="font-semibold"
            style={{
              color: "var(--color-accent)",
              fontSize: "var(--fs-lg)",
              fontWeight: "bold",
            }}
          >
            {data.title}
          </a>
        </div>
        <FaTrash
          onClick={() => onDelete(data._id)}
          className="cursor-pointer"
          style={{ color: "var(--color-accent)" }}
        />
      </div>

      <div
        className="rounded overflow-y-auto max-h-48"
        style={{
          backgroundColor: "hsl(44, 50%, 95%)", // soft variant of primary
          color: "var(--color-secondary)",
          fontSize: "var(--fs-sm)",
          padding: "0.5rem",
        }}
      >
        {expanded ? summary : `${summary.slice(0, 300)}...`}
        {summary.length > 300 && (
          <button
            onClick={() => setExpanded(!expanded)}
            style={{
              color: "var(--color-tertiary)",
              fontSize: "0.75rem",
              textDecoration: "underline",
              marginTop: "0.5rem",
              display: "block",
            }}
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        )}
      </div>
    </div>
  );
};

export default BookmarkCard;
