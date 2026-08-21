"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ToastProps {
  message: string;
}

export function Toast({ message }: ToastProps) {
  return (
    <AnimatePresence>
      <motion.div
        key={message}
        initial={{ y: 30, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 30, opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="fixed bottom-14 left-1/2 -translate-x-1/2 z-50"
        role="alert"
        aria-live="polite"
      >
        <div className="paint-bevel px-4 py-2 text-xs font-[family-name:var(--font-pixel)] text-black whitespace-nowrap">
          {message}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
