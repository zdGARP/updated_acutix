'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Award, Target, Eye, Image as ImageIcon, CheckCircle } from 'lucide-react';

interface InstDetails {
  framework: string;
  initiatives: string[];
}

interface InstImages {
  mou: string;
  event1: string;
  event2: string;
}

interface Institution {
  id: string;
  name: string;
  location: string;
  desc: string;
  details: InstDetails;
  images: InstImages;
  logo: string;
  banner: string;
  stats: { label: string; value: string }[];
  achievements: string[];
  focusAreas: string[];
}

interface CollaborationCardProps {
  institution: Institution;
  onViewCollaboration: (inst: Institution) => void;
  onEventGallery: (inst: Institution) => void;
}

export default function CollaborationCard({
  institution,
  onViewCollaboration,
  onEventGallery,
}: CollaborationCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // 3D Tilt calculation
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Spotlight Coordinates
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });

    // Tilt Coordinates (-0.5 to 0.5)
    const normalizedX = (x / rect.width) - 0.5;
    const normalizedY = (y / rect.height) - 0.5;
    
    // Tilt limit to 10 degrees
    setTilt({
      x: -normalizedY * 10,
      y: normalizedX * 10,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: isHovered ? 'none' : 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
      }}
      className="relative bg-gray-950 border border-white/5 hover:border-cyan-500/30 rounded-3xl overflow-hidden transition-all duration-300 group shadow-2xl flex flex-col justify-between h-full"
    >
      {/* Spotlight overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, rgba(6, 182, 212, 0.08), transparent 80%)`,
        }}
      />

      {/* Main card inner content */}
      <div>
        {/* Banner Image Container */}
        <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
          <Image
            src={institution.banner}
            alt={`${institution.name} Banner`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.7] contrast-[1.05]"
          />
          {/* Cyan/Purple Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
          
          <span className="absolute top-4 right-4 font-mono text-[9px] tracking-wider text-cyan-400 uppercase bg-black/60 px-2.5 py-1 rounded-md border border-cyan-500/20 z-10 backdrop-blur-md">
            📍 {institution.location}
          </span>
        </div>

        {/* Brand/School Identity Section */}
        <div className="relative px-6 pb-4">
          {/* Overlapping Logo */}
          <div className="absolute -top-10 left-6 w-18 h-18 rounded-2xl overflow-hidden border-2 border-white/10 bg-white shadow-xl flex-shrink-0 z-20 transition-all duration-500 group-hover:border-cyan-500/40">
            <Image
              src={institution.logo}
              alt={`${institution.name} Logo`}
              fill
              className="object-contain p-1.5"
            />
          </div>

          <div className="pt-10">
            <h3 className="text-xl font-extrabold text-white group-hover:text-cyan-400 transition-colors duration-300 mt-2 leading-tight">
              {institution.name}
            </h3>
            <p className="text-xs text-gray-400 mt-3 leading-relaxed">
              {institution.desc}
            </p>
          </div>
        </div>

        {/* Animated Statistics */}
        <div className="grid grid-cols-3 gap-2 px-6 py-4 border-y border-white/5 bg-white/[0.01]">
          {institution.stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <span className="block text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-mono">
                {stat.value}
              </span>
              <span className="text-[9px] text-gray-500 uppercase tracking-wider font-mono">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Focus Areas */}
        <div className="px-6 pt-5">
          <h4 className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 mb-2.5 flex items-center gap-1.5">
            <Target className="w-3.5 h-3.5" /> Key Focus Domains
          </h4>
          <div className="flex flex-wrap gap-2">
            {institution.focusAreas.map((area, idx) => (
              <span
                key={idx}
                className="text-[9px] font-mono bg-white/5 text-gray-300 px-2.5 py-1 rounded-md border border-white/5 hover:border-cyan-500/20 hover:bg-cyan-950/20 transition-colors duration-300"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="px-6 pt-5">
          <h4 className="text-[10px] font-mono uppercase tracking-widest text-purple-400 mb-2.5 flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5" /> Milestones & Achievements
          </h4>
          <ul className="space-y-2">
            {institution.achievements.map((ach, idx) => (
              <li key={idx} className="flex items-start space-x-2 text-[11px] text-gray-400">
                <CheckCircle className="w-3.5 h-3.5 text-cyan-500/80 mt-0.5 flex-shrink-0" />
                <span className="leading-snug">{ach}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Inline Event Gallery Preview */}
        <div className="px-6 pt-5">
          <h4 className="text-[10px] font-mono uppercase tracking-widest text-gray-500 mb-2.5 flex items-center gap-1.5">
            <ImageIcon className="w-3.5 h-3.5" /> Event Highlights
          </h4>
          <div className="grid grid-cols-3 gap-2">
            {[institution.images.mou, institution.images.event1, institution.images.event2].map((img, idx) => (
              <div
                key={idx}
                onClick={() => onEventGallery(institution)}
                className="relative aspect-video rounded-lg overflow-hidden border border-white/5 bg-slate-900 cursor-pointer group/thumb hover:border-cyan-500/30 transition-colors duration-300"
              >
                <Image
                  src={img}
                  alt="Gallery Thumbnail"
                  fill
                  className="object-cover group-hover/thumb:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover/thumb:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                  <Eye className="w-3 h-3 text-white opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dual CTA Buttons */}
      <div className="px-6 py-6 mt-6 flex space-x-3 border-t border-white/5 bg-white/[0.01]">
        <button
          onClick={() => onViewCollaboration(institution)}
          className="flex-1 bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:bg-cyan-950/20 text-gray-300 hover:text-cyan-400 font-mono text-xs py-3.5 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer uppercase font-semibold"
        >
          <Eye className="w-4 h-4" /> View Details
        </button>
        <button
          onClick={() => onEventGallery(institution)}
          className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-mono text-xs py-3.5 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer uppercase shadow-lg shadow-cyan-500/10 hover:shadow-cyan-400/20 font-bold"
        >
          <ImageIcon className="w-4 h-4" /> Event Gallery
        </button>
      </div>
    </div>
  );
}
