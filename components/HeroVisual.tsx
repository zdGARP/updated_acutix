import {
  BookOpen,
  Code2,
  GraduationCap,
  Package,
  Send,
  Sparkles,
  Users,
  type LucideIcon,
} from 'lucide-react';

type HeroVisualVariant =
  | 'products'
  | 'services'
  | 'partnerships'
  | 'programs'
  | 'blogs'
  | 'about'
  | 'contact';

const visualContent: Record<HeroVisualVariant, {
  icon: LucideIcon;
  title: string;
  detail: string;
  accent: string;
}> = {
  products: { icon: Package, title: 'Purpose-built products', detail: 'Workflows, connected', accent: '#FF7A1A' },
  services: { icon: Code2, title: 'Digital engineering', detail: 'Ideas into systems', accent: '#43B8C5' },
  partnerships: { icon: Users, title: 'Strong partnerships', detail: 'Industry meets academia', accent: '#9B8AFB' },
  programs: { icon: GraduationCap, title: 'Learning by building', detail: 'Skills for what’s next', accent: '#FFAA55' },
  blogs: { icon: BookOpen, title: 'Ideas in motion', detail: 'Insights for builders', accent: '#43B8C5' },
  about: { icon: Sparkles, title: 'Built with purpose', detail: 'People, ideas, impact', accent: '#9B8AFB' },
  contact: { icon: Send, title: 'Let’s get started', detail: 'Your next step, together', accent: '#FF7A1A' },
};

export default function HeroVisual({ variant }: { variant: HeroVisualVariant }) {
  const content = visualContent[variant];
  const Icon = content.icon;

  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="hero-visual__aura" />
      <div className="hero-visual__orbit hero-visual__orbit--one" />
      <div className="hero-visual__orbit hero-visual__orbit--two" />
      <div className="hero-visual__satellite" />

      <div className="hero-visual__object-wrap">
        <div className="hero-visual__object">
          <div className="hero-visual__object-face">
            <Icon className="h-11 w-11" style={{ color: content.accent }} strokeWidth={1.5} />
          </div>
          <div className="hero-visual__object-shine" />
        </div>
      </div>

      <div className="hero-visual__label hero-visual__label--top">
        <span className="hero-visual__label-dot" style={{ backgroundColor: content.accent }} />
        <span>{content.title}</span>
      </div>
      <div className="hero-visual__label hero-visual__label--bottom">
        <span className="hero-visual__label-icon"><Icon className="h-4 w-4" /></span>
        <span>{content.detail}</span>
      </div>
    </div>
  );
}
