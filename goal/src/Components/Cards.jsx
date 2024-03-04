// import React from "react";
// import { ReactPropTypes } from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

function Cards({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      className="relative flex-shrink-0 w-60 h-72 bg-zinc-900/90 rounded-[40px] py-10 px-8 text-white p-5 overflow-hidden"
    >
      <FaRegFileAlt />
      <p className=" text-sm leading-tight mt-5 font-semibold"> {data.desc}</p>
      <div className="footer absolute bottom-0  w-full    left-0">
        <div className="flex justify-between items-center px-2 mb-1 ">
          <h5> {data.filesize}</h5>
          <span className=" w-6 h-6 bg-sky-100 rounded-full flex justify-center items-center">
            {data.close ? (
              <IoMdClose size="1em" color="#000" />
            ) : (
              <HiOutlineDownload size="1em" color="#000" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full py-3 ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            } text-center flex justify-center text-sm font-semibold`}
          >
            <h3>{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Cards;
