import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const TagInput = () => {
  const [tags, setTags] = useState([]);
  const [input, setInput] = useState("");

  const handleKeyDown = (e) => {
    if ((e.key === "Enter" || e.key === ",") && input.trim() !== "") {
      e.preventDefault();
      const newTag = input.trim().replace(",", "");
      if (!tags.includes(newTag)) {
        setTags([...tags, newTag]);
      }
      setInput("");
    }
  };

  const removeTag = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  return (
    <div className="form-control d-flex flex-wrap align-items-center gap-2 border rounded px-3 py-2">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className="form-control border flex-grow-1"
        placeholder="Type and press Enter or comma"
      />
      <AnimatePresence>
        {tags.map((tag, index) => (
          <motion.div
            key={tag}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="badge badge-light-primary d-flex align-items-center px-3 mt-4 py-2"
          >
            <span>{tag}</span>
            <button
              onClick={() => removeTag(index)}
              className="btn btn-sm btn-light ms-2 p-0 d-flex align-items-center justify-content-center"
              style={{ width: 20, height: 20 }}
            >
              <X size={12} />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default TagInput;
