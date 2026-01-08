"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

        export const FadeIn = ({ 
          children, 
          delay = 0, 
          duration = 0.2,
          direction = "up", 
          fullWidth = false,
          className 
        }: { 
          children: ReactNode; 
          delay?: number; 
          duration?: number;
          direction?: "up" | "down" | "left" | "right" | "none";
          fullWidth?: boolean;
          className?: string;
        }) => {
          const shouldReduceMotion = useReducedMotion();
          
          const directions = {
            up: { y: 20 },
            down: { y: -20 },
            left: { x: 20 },
            right: { x: -20 },
            none: { x: 0, y: 0 }
          };

          return (
            <motion.div
              variants={{
                hidden: { 
                  opacity: 0, 
                  ...(shouldReduceMotion ? {} : directions[direction]) 
                },
                show: { 
                  opacity: 1, 
                  x: 0, 
                  y: 0,
                  transition: {
                    duration: duration,
                    delay: delay,
                    ease: [0.215, 0.61, 0.355, 1],
                  }
                }
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0, margin: "200px 0px 200px 0px" }}
              className={`${fullWidth ? "w-full" : ""} ${className || ""}`}
            >
              {children}
            </motion.div>
          );
        };

export const FadeInStagger = ({ 
  children, 
  staggerChildren = 0.02, 
  delayChildren = 0,
  className 
}: { 
  children: ReactNode; 
  staggerChildren?: number;
  delayChildren?: number;
  className?: string;
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0, margin: "200px 0px 200px 0px" }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: staggerChildren,
            delayChildren: delayChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

