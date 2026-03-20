'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function SectorPage() {
  const params = useParams();
  const slug = params?.slug as string;

  // Convert slug → Title (smart-cities → Smart Cities)
  const title = slug
    ?.split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="min-h-screen bg-[#0c1018] text-white">
      
      {/* ─── Hero ─── */}
      <section className="pt-32 pb-20 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-blue-400 uppercase tracking-widest mb-4">
            Sector
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {title}
          </h1>

          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            This is a placeholder page for the <span className="text-white">{title}</span> sector.
            You can add detailed analytics, case studies, and SHM insights here.
          </p>

          <Link
            href="/#sectors"
            className="inline-block mt-8 px-6 py-3 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition"
          >
            ← Back to sectors
          </Link>
        </motion.div>
      </section>

      {/* ─── Dummy Content ─── */}
      <section className="px-6 pb-24 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {[1, 2, 3].map((card) => (
            <div
              key={card}
              className="p-6 rounded-2xl bg-white/[0.05] border border-white/10 hover:border-blue-500/30 transition"
            >
              <h3 className="text-lg font-semibold mb-2">
                Feature {card}
              </h3>
              <p className="text-white/60 text-sm">
                Example placeholder content describing monitoring capabilities,
                predictive insights, and infrastructure intelligence.
              </p>
            </div>
          ))}
        </motion.div>
      </section>

    </div>
  );
}