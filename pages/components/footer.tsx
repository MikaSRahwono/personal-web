// app/components/Footer.tsx (or your layout/page)
import TennisBallEvader from './tennis';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-12 text-sm text-neutral-400">
        <p>© {new Date().getFullYear()} Mika Suryofakhri Rahwono</p>
        <p className="opacity-70">Made with Next.js & Tailwind</p>
      </div>

      <TennisBallEvader
        src="/tennis-ball.png"
        size={56}
        speed={1.1}
        evadeRadius={40}
        zIndex={60}
      />
    </footer>
  );
}
