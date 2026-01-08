"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export const Section = ({ 
  children, 
  id, 
  className 
}: { 
  children: ReactNode; 
  id?: string; 
  className?: string 
}) => {
  return (
    <motion.section
      id={id}
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0, margin: "200px 0px 200px 0px" }}
      transition={{
        duration: 0.2,
        ease: [0.215, 0.61, 0.355, 1], // Quintic ease-out
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

