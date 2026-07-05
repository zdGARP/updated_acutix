'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Navigation, Compass, Radio } from 'lucide-react';

interface CollegeNode {
  id: string;
  name: string;
  location: string;
  x: number; // local coordinates in the radar map
  y: number;
  color: string;
  details: string;
}

export default function IndiaMap() {
  const [activeCampus, setActiveCampus] = useState<CollegeNode | null>(null);
  const [zoomed, setZoomed] = useState(false);

  const localCampuses: CollegeNode[] = [
    {
      id: 'vistas',
      name: 'VISTAS (Vels University)',
      location: 'Pallavaram, Southwest',
      x: 160 - 7,
      y: 180 - 7,
      color: '#06b6d4', // Cyan
      details: 'Healthcare AI, MedNexus Hackathons & Research Alliance.',
    },
    {
      id: 'srmv',
      name: 'SRM Valliammai Eng College',
      location: 'Kattankulathur, South',
      x: 110 - 7,
      y: 280 - 7,
      color: '#8b5cf6', // Purple
      details: 'AWS Cloud webinars, Fullstack Bootcamps, Placement evaluations.',
    },
    {
      id: 'saec',
      name: 'SA Engineering College',
      location: 'Poonamallee, West',
      x: 100 - 7,
      y: 90 - 7,
      color: '#10b981', // Emerald
      details: 'Frontend developer cohorts, direct capstone project mentorship.',
    },
    {
      id: 'jit',
      name: 'Jeppiaar Institute of Tech',
      location: 'Sriperumbudur, West-Southwest',
      x: 60 - 7,
      y: 200 - 7,
      color: '#f59e0b', // Amber
      details: 'Live SaaS coding sprints, React Native and Flutter mobile bootcamps.',
    },
  ];

  // Stylized India digital outline using dot arrays
  const indiaDots = [
    // Jammu & Kashmir
    { x: 195, y: 35 }, { x: 205, y: 30 }, { x: 215, y: 35 }, { x: 205, y: 50 }, { x: 220, y: 65 }, { x: 200, y: 70 },
    // Punjab, Haryana, Delhi
    { x: 180, y: 90 }, { x: 190, y: 105 }, { x: 210, y: 95 }, { x: 200, y: 120 }, { x: 210, y: 130 },
    // Rajasthan, Gujarat
    { x: 160, y: 140 }, { x: 140, y: 160 }, { x: 150, y: 180 }, { x: 130, y: 195 }, { x: 110, y: 205 },
    { x: 95, y: 215 }, { x: 115, y: 230 }, { x: 135, y: 225 }, { x: 150, y: 240 },
    // Maharashtra, Goa, Karnataka
    { x: 160, y: 270 }, { x: 150, y: 300 }, { x: 165, y: 330 }, { x: 160, y: 360 }, { x: 175, y: 385 },
    // Kerala & Tamil Nadu (West Coast and Tip)
    { x: 185, y: 410 }, { x: 195, y: 435 }, { x: 205, y: 445 }, { x: 215, y: 430 },
    // East Coast (Tamil Nadu, Andhra, Odisha)
    { x: 225, y: 395 }, { x: 235, y: 350 }, { x: 250, y: 310 }, { x: 270, y: 280 }, { x: 290, y: 255 },
    // West Bengal, Bangladesh border, Northeast
    { x: 300, y: 225 }, { x: 315, y: 215 }, { x: 335, y: 220 }, { x: 360, y: 185 }, { x: 380, y: 190 },
    { x: 370, y: 170 }, { x: 350, y: 175 }, { x: 325, y: 195 }, { x: 310, y: 190 },
    // Nepal border / North border
    { x: 270, y: 170 }, { x: 250, y: 160 }, { x: 230, y: 150 }, { x: 235, y: 125 }, { x: 225, y: 100 },
    // Central India
    { x: 185, y: 180 }, { x: 210, y: 190 }, { x: 235, y: 205 }, { x: 190, y: 225 }, { x: 220, y: 235 },
    { x: 255, y: 245 }, { x: 180, y: 250 }, { x: 205, y: 280 }, { x: 225, y: 275 }, { x: 200, y: 320 },
  ];

  return (
    <section className="relative z-10 px-6 max-w-7xl mx-auto my-24">
      <div className="text-center mb-16">
        <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
          GEOGRAPHIC NETWORK
        </h2>
        <h3 className="text-3xl font-extrabold text-white">
          Interactive Alliance Nodes
        </h3>
        <p className="text-sm text-gray-400 max-w-2xl mx-auto mt-3">
          Explore the locations of our academic partners around the Chennai technological corridor. Click the radar beacon to zoom.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gray-900/10 border border-white/5 rounded-3xl p-6 sm:p-8 backdrop-blur-md relative overflow-hidden">
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        {/* Map Column (7 cols) */}
        <div className="lg:col-span-7 flex justify-center items-center relative min-h-[460px] overflow-hidden rounded-2xl bg-black/40 border border-white/5 p-4">
          <div className="absolute top-4 left-4 flex items-center space-x-2 bg-black/60 border border-white/10 px-3 py-1.5 rounded-lg text-[10px] font-mono text-gray-300">
            <Compass className="w-3.5 h-3.5 animate-spin text-cyan-400" style={{ animationDuration: '6s' }} />
            <span>RADAR STATUS: ACTIVE</span>
          </div>

          <AnimatePresence mode="wait">
            {!zoomed ? (
              // Phase 1: India Map
              <motion.div
                key="india-map"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="relative w-[340px] h-[440px]"
              >
                {/* SVG Digital India map */}
                <svg className="w-full h-full opacity-80" viewBox="0 0 400 480">
                  {indiaDots.map((dot, idx) => (
                    <circle
                      key={idx}
                      cx={dot.x}
                      cy={dot.y}
                      r="2.5"
                      fill="#06b6d4"
                      opacity="0.8"
                    />
                  ))}
                  {/* Subtle connection grid paths */}
                  <path
                    d="M 205 30 L 220 65 L 200 120 L 140 160 L 95 215 L 150 240 L 160 360 L 205 445 L 235 350 L 290 255 L 360 185 L 310 190 L 235 125 Z"
                    fill="none"
                    stroke="rgba(6, 182, 212, 0.25)"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                </svg>

                {/* Chennai Glowing Beacon */}
                <div
                  className="absolute cursor-pointer group"
                  style={{ left: '52%', top: '78%' }}
                  onClick={() => setZoomed(true)}
                >
                  <span className="absolute -left-12 -top-8 bg-cyan-950/80 border border-cyan-400/30 text-[9px] font-mono px-2 py-0.5 rounded text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Chennai Cluster (Zoom)
                  </span>
                  {/* Pulsing rings */}
                  <span className="absolute flex h-5 w-5 -left-2.5 -top-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-5 w-5 bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.8)]"></span>
                  </span>
                  <MapPin className="w-4 h-4 text-white absolute -left-2 -top-2 relative z-10" />
                </div>
              </motion.div>
            ) : (
              // Phase 2: Chennai Zoomed Map
              <motion.div
                key="chennai-map"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative w-full max-w-[340px] aspect-square flex flex-col items-center justify-center"
              >
                {/* Radial Target Rings */}
                <div className="absolute inset-0 border border-cyan-500/10 rounded-full animate-pulse" />
                <div className="absolute inset-[15%] border border-cyan-500/5 rounded-full" />
                <div className="absolute inset-[30%] border border-purple-500/5 rounded-full" />
                <div className="absolute inset-[45%] border border-white/5 rounded-full" />

                {/* Radar Line Sweep */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/0 via-cyan-500/0 to-cyan-500/5 rounded-full animate-spin" style={{ animationDuration: '8s' }} />

                {/* Faint Grid and Chennai Coastline / Roads Representation */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 340 340">
                  <defs>
                    <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(6, 182, 212, 0.0)" />
                      <stop offset="100%" stopColor="rgba(6, 182, 212, 0.08)" />
                    </linearGradient>
                  </defs>

                  <style>{`
                    @keyframes dash {
                      to {
                        stroke-dashoffset: -20;
                      }
                    }
                    .animated-route {
                      stroke-dasharray: 5 5;
                      animation: dash 2.5s linear infinite;
                    }
                  `}</style>

                  {/* Ocean Area */}
                  <path
                    d="M 290 0 Q 305 170 325 340 L 340 340 L 340 0 Z"
                    fill="url(#oceanGradient)"
                  />

                  {/* Coastline */}
                  <path
                    d="M 290 0 Q 305 170 325 340"
                    fill="none"
                    stroke="rgba(6, 182, 212, 0.4)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />

                  <text x="315" y="80" fill="rgba(6, 182, 212, 0.4)" fontSize="8" fontFamily="monospace" fontWeight="bold" letterSpacing="2" transform="rotate(90 315 80)">
                    BAY OF BENGAL
                  </text>

                  {/* Concentric Radar Rings centered at Hub (240, 100) */}
                  <circle cx="240" cy="100" r="70" fill="none" stroke="rgba(6, 182, 212, 0.08)" strokeWidth="1" strokeDasharray="3 9" />
                  <circle cx="240" cy="100" r="140" fill="none" stroke="rgba(6, 182, 212, 0.05)" strokeWidth="1" />
                  <circle cx="240" cy="100" r="220" fill="none" stroke="rgba(6, 182, 212, 0.03)" strokeWidth="1" />

                  {/* Major Expressways / Connected Routes */}
                  {/* GST Road (NH-45) */}
                  <path
                    d="M 240 100 L 160 180 L 110 280"
                    fill="none"
                    stroke="rgba(139, 92, 246, 0.4)"
                    strokeWidth="1.5"
                    className="animated-route"
                  />
                  <text x="210" y="135" fill="rgba(139, 92, 246, 0.5)" fontSize="6" fontFamily="monospace" transform="rotate(45 210 135)" fontWeight="bold">
                    NH-45 (GST RD)
                  </text>

                  {/* Poonamallee High Road (NH-48) */}
                  <path
                    d="M 240 100 L 100 90"
                    fill="none"
                    stroke="rgba(16, 185, 129, 0.4)"
                    strokeWidth="1.5"
                    className="animated-route"
                  />
                  <text x="170" y="91" fill="rgba(16, 185, 129, 0.5)" fontSize="6" fontFamily="monospace" transform="rotate(-4 170 91)" fontWeight="bold">
                    NH-48 (POONAMALLEE HIGH RD)
                  </text>

                  {/* Bengaluru Highway Link */}
                  <path
                    d="M 100 90 L 60 200"
                    fill="none"
                    stroke="rgba(245, 158, 11, 0.4)"
                    strokeWidth="1.5"
                    className="animated-route"
                  />
                  <text x="72" y="140" fill="rgba(245, 158, 11, 0.5)" fontSize="6" fontFamily="monospace" transform="rotate(70 72 140)" fontWeight="bold">
                    BANGALURU HWY
                  </text>

                  {/* Center Node: Chennai Core */}
                  <circle cx="240" cy="100" r="5" fill="#06b6d4" />
                  <circle cx="240" cy="100" r="10" fill="none" stroke="#06b6d4" strokeWidth="1" className="animate-ping" style={{ animationDuration: '3s' }} />

                  {/* Geographic Labels */}
                  <text x="160" y="168" fill="rgba(255,255,255,0.4)" fontSize="7" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                    PALLAVARAM
                  </text>
                  <text x="110" y="268" fill="rgba(255,255,255,0.4)" fontSize="7" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                    KATTANKULATHUR
                  </text>
                  <text x="100" y="78" fill="rgba(255,255,255,0.4)" fontSize="7" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                    POONAMALLEE
                  </text>
                  <text x="60" y="188" fill="rgba(255,255,255,0.4)" fontSize="7" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                    SRIPERUMBUDUR
                  </text>
                </svg>

                {/* Chennai Center indicator */}
                <div className="absolute left-[240px] top-[115px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none">
                  <span className="text-[7px] font-mono text-[#06b6d4] font-bold">CHENNAI HUB</span>
                </div>

                {/* Zoom out button */}
                <button
                  onClick={() => {
                    setZoomed(false);
                    setActiveCampus(null);
                  }}
                  className="absolute bottom-2 bg-white/5 border border-white/15 text-[10px] text-gray-400 hover:text-white px-3 py-1 rounded font-mono hover:bg-white/10 transition-colors"
                >
                  &larr; BACK TO INDIA MAP
                </button>

                {/* College nodes on Radar */}
                {localCampuses.map((node) => (
                  <motion.div
                    key={node.id}
                    className="absolute cursor-pointer group"
                    style={{ left: node.x, top: node.y }}
                    whileHover={{ scale: 1.2 }}
                    onClick={() => setActiveCampus(node)}
                  >
                    <span
                      className="absolute h-3.5 w-3.5 -left-1.5 -top-1.5 rounded-full animate-ping opacity-60"
                      style={{ backgroundColor: node.color }}
                    />
                    <span
                      className="relative block h-3.5 w-3.5 rounded-full border border-white/50"
                      style={{
                        backgroundColor: node.color,
                        boxShadow: `0 0 10px ${node.color}cc`,
                      }}
                    />
                    {/* Tiny tooltip */}
                    <span className="absolute left-4 -top-2 whitespace-nowrap bg-black/90 border border-white/10 px-2 py-0.5 rounded text-[8px] font-mono text-gray-300 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200">
                      {node.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Panel Column (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
          <div className="bg-gray-900/40 border border-white/5 rounded-2xl p-6 backdrop-blur-xl h-full flex flex-col justify-between min-h-[300px]">
            <AnimatePresence mode="wait">
              {activeCampus ? (
                <motion.div
                  key={activeCampus.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <div className="flex items-center space-x-3">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: activeCampus.color }}
                    />
                    <span className="font-mono text-[10px] uppercase tracking-wider text-cyan-400 bg-white/5 border border-white/5 px-2 py-0.5 rounded">
                      {activeCampus.location}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-white leading-tight">
                    {activeCampus.name}
                  </h4>

                  <p className="text-sm text-gray-400 leading-relaxed">
                    {activeCampus.details}
                  </p>

                  <div className="pt-4 border-t border-white/5 flex items-center space-x-2 text-xs font-mono text-cyan-400">
                    <Radio className="w-4 h-4 animate-pulse text-cyan-400" />
                    <span>COORDINATES: {activeCampus.x}&deg;N, {activeCampus.y}&deg;E</span>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="default-panel"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4 flex flex-col justify-center items-center text-center py-8 h-full"
                >
                  <div className="p-4 bg-white/5 border border-white/10 rounded-full text-gray-400 animate-pulse">
                    <Navigation className="w-6 h-6 rotate-45 text-cyan-400" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Select a Node</h4>
                  <p className="text-xs text-gray-400 max-w-xs">
                    {!zoomed
                      ? 'Click the Chennai map node to zoom into our regional campus alliances.'
                      : 'Click any of the glowing nodes on the local radar to reveal cooperation metrics and focus details.'}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {zoomed && (
              <div className="mt-8 pt-4 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-gray-500">
                <span>ZOOM: 8.5x (REGIONAL SATELLITE VIEW)</span>
                <span className="text-cyan-400 animate-pulse">SWEEPING...</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
