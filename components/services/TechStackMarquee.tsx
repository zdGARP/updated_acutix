'use client';
import { motion } from 'framer-motion';
import { 
  SiReact, SiNextdotjs, SiAngular, SiVuedotjs, 
  SiNodedotjs, SiPython, SiOpenjdk, SiDotnet,
  SiMysql, SiPostgresql, SiMongodb, SiRedis,
  SiAmazon, SiGooglecloud, SiDocker, SiKubernetes,
  SiGithubactions, SiJenkins, SiTerraform, SiNginx
} from 'react-icons/si';

const techs = [
  { name: 'React', icon: SiReact, color: 'text-[#61DAFB]' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
  { name: 'Angular', icon: SiAngular, color: 'text-[#DD0031]' },
  { name: 'Vue', icon: SiVuedotjs, color: 'text-[#4FC08D]' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-[#339933]' },
  { name: 'Python', icon: SiPython, color: 'text-[#3776AB]' },
  { name: 'Java', icon: SiOpenjdk, color: 'text-[#ED8B00]' },
  { name: '.NET', icon: SiDotnet, color: 'text-[#512BD4]' },
  { name: 'MySQL', icon: SiMysql, color: 'text-[#4479A1]' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-[#4169E1]' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-[#47A248]' },
  { name: 'Redis', icon: SiRedis, color: 'text-[#DC382D]' },
  { name: 'AWS', icon: SiAmazon, color: 'text-[#FF9900]' },
  { name: 'Google Cloud', icon: SiGooglecloud, color: 'text-[#4285F4]' },
  { name: 'Docker', icon: SiDocker, color: 'text-[#2496ED]' },
  { name: 'Kubernetes', icon: SiKubernetes, color: 'text-[#326CE5]' },
  { name: 'GitHub Actions', icon: SiGithubactions, color: 'text-[#2088FF]' },
  { name: 'Jenkins', icon: SiJenkins, color: 'text-[#D24939]' },
  { name: 'Terraform', icon: SiTerraform, color: 'text-[#7B42BC]' },
  { name: 'Nginx', icon: SiNginx, color: 'text-[#009639]' }
];

export default function TechStackMarquee() {
  return (
    <section className="bg-gray-950 py-20 overflow-hidden border-t border-b border-white/5 relative">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-950 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-950 to-transparent z-10 pointer-events-none"></div>

      <div className="text-center mb-10 relative z-20">
        <h3 className="text-2xl font-bold text-white mb-2">Our Technology Stack</h3>
        <p className="text-gray-400">Powered by the best-in-class modern tools.</p>
      </div>

      <div className="flex relative w-full overflow-hidden">
        <motion.div 
          className="flex space-x-12 shrink-0 items-center whitespace-nowrap pl-12"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 40 }}
        >
          {/* Double map to ensure seamless looping without glitch */}
          {[...techs, ...techs, ...techs, ...techs].map((tech, i) => (
            <div key={i} className="inline-flex flex-col items-center gap-3 grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300">
              <tech.icon className={`w-12 h-12 ${tech.color}`} />
              <span className="text-xs text-gray-500 font-medium">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
