"use client";

import { IconArrowUpRight } from "@tabler/icons-react";
import { motion } from "framer-motion";

const links = [
  { name: "Email", href: "mailto:michaelwbeer@gmail.com" },
  { name: "X", href: "https://x.com/michaelbeer01" },
  { name: "Telegram", href: "https://t.me/ship_crypto" },
];

export default function HeaderContact() {
  return (
    <nav>
      <div className="flex items-center space-x-6">
        {links.map((link, i) => (
          <motion.a
            key={link.name}
            href={link.href}
            className="group flex items-center text-sm text-neutral-600 hover:text-neutral-900 transition-colors duration-200"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <span className="border-b border-transparent hover:border-neutral-300 transition-colors group-hover:border-neutral-600">
              {link.name}
            </span>
            <IconArrowUpRight className="h-3.5 w-3.5 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>
        ))}
      </div>
    </nav>
  );
}
