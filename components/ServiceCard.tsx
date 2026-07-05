'use client';

import { motion } from 'framer-motion';

export default function ServiceCard({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="card p-7 hover:shadow-[0_8px_32px_-8px_rgba(11,15,13,0.12)] hover:-translate-y-1 transition-all duration-300"
    >
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-forest/10 text-forest font-display font-bold">
        {String(index + 1).padStart(2, '0')}
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm text-slate-body leading-relaxed">{description}</p>
    </motion.div>
  );
}
