import "./singleNews.scss";
import { motion } from "framer-motion";
import { useState } from "react";

const SingleNews = ({ heading, paragraphs, img }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="singleNews">
      <motion.div
        transition={{ layout: { duration: 1, type: "spring" } }}
        layout
        onClick={() => setIsOpen(!isOpen)}
        className={`card ${isOpen ? "clicked" : "notClicked"}`}
        style={{
          borderRadius: "1rem",
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)",
        }}
      >
        <motion.h2 layout="position">{heading}</motion.h2>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="expand"
          >
            <img src={img} alt={heading} />
            <div className="content">
              {paragraphs.map((paragraph) => (
                <p>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default SingleNews;
