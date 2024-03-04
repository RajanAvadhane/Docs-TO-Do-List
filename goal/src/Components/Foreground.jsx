// import { useState } from "react";
import { useRef } from "react";
import Cards from "./Cards";

function Foreground() {
  const ref = useRef(null);
  const data = [
    {
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: ".9MB",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: ".9MB",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: ".9MB",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
  ];
  return (
    <div
      ref={ref}
      className="fixed z-[3] top-0 left-0 h-full w-full  flex gap-5 flex-wrap p-5"
    >
      {data.map((item, index) => (
        <Cards data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
