"use client";

import { motion } from "framer-motion";

export default function MusicPlayer() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-neutral-100 p-2 mt-8 border border-neutral-200 rounded-xl"
    >
      <div className="flex items-center gap-3 bg-white p-4 rounded-lg">
        {/* <Image
          src="/placeholder.svg?height=48&width=48"
          width={48}
          height={48}
          alt="Album cover"
        /> */}
        <div>
          <h3 className="font-medium text-sm">Love Somebody</h3>
          <p className="text-neutral-500 leading-relaxed text-xs">
            Morgan Wallen
          </p>
        </div>
      </div>
      <p className="text-neutral-400 leading-relaxed text-xs mt-2">
        <span className="w-2 h-2 bg-neutral-300 rounded-full inline-block mr-2 ml-1"></span>
        Last played on Jan 28, 6:59 PM EST
      </p>
    </motion.div>
  );
}
