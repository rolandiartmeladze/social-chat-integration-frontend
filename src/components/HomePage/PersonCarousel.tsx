"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import person_green from "@/../public/persone_green.png";
import person_blue from "@/../public/persone_blue.png";
import person_red from "@/../public/persone_red.png";
import person_yellow from "@/../public/person_yellow.png";

const persons = [person_green, person_red, person_blue, person_yellow];

export default function PersonCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % persons.length);
    }, 4000);
    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <div className="absolute left-14 -bottom-5 md:h-full md:w-1/2 flex items-center justify-start pointer-events-none">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 1 }}
          className="w-[400px] h-auto relative"
        >
          <Image
            src={persons[index]}
            alt={`Person ${index}`}
            width={500}
            height={500}
            className="object-contain"
            priority
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
