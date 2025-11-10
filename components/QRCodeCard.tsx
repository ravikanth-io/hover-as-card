import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const CopyIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </svg>
);

const CheckIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-peacock-green"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

interface QRCardProps {
  textToCopy: string;
  src: string;
  delay?: number;
  direction?: "left" | "right" | "center";
}

const QRCard: React.FC<QRCardProps> = ({ textToCopy, src, delay = 0, direction = "center" }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const MAX_ROTATE = 25;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !glowRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = MAX_ROTATE * ((y / rect.height) - 0.5);
    const rotateY = MAX_ROTATE * ((x / rect.width) - 0.5) * -1;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
    glowRef.current.style.opacity = "1";
    glowRef.current.style.setProperty("--mx", `${x}px`);
    glowRef.current.style.setProperty("--my", `${y}px`);
  };

  const handleMouseLeave = () => {
    if (!cardRef.current || !glowRef.current) return;
    cardRef.current.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
    glowRef.current.style.opacity = "0";
  };

  const directionOffset =
    direction === "left" ? -100 : direction === "right" ? 100 : 0;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: directionOffset }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay }}
      className="relative w-80 h-96 rounded-3xl backdrop-blur-md border border-white/30 
        shadow-[0_8px_32px_rgba(31,38,135,0.15)] overflow-hidden 
        bg-white/20 dark:bg-peacock-blue/20 hover:bg-white/30 transition-all duration-300"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
        <div className="p-3 bg-white/70 dark:bg-white/10 rounded-xl shadow-md">
          <img
            src={src}
            alt="UPI QR Code"
            className="w-64 h-64 object-cover rounded-lg"
            loading="lazy"
          />
        </div>

        <div className="flex gap-2 bg-white/30 dark:bg-peacock-teal/10 backdrop-blur-md p-2 rounded-full mt-4 border border-white/30">
          <span className="text-xs font-mono">{textToCopy}</span>
          <button onClick={handleCopy}>
            {isCopied ? <CheckIcon /> : <CopyIcon />}
          </button>
        </div>
      </div>

      <div
        ref={glowRef}
        className="absolute inset-0 opacity-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,0.25), transparent 40%)`,
        }}
      />
    </motion.div>
  );
};

const QRCodeCard: React.FC = () => {
  return (
    <div className="flex justify-center items-center gap-10 min-h-screen bg-transparent">
      <QRCard src="/assets/qr.jpg" textToCopy="9113530989@jio" delay={0.1} direction="left" />
      <QRCard src="/assets/qr1.jpg" textToCopy="Govinda Goovindaa" delay={0.3} direction="center" />
      <QRCard src="/assets/qr2.jpg" textToCopy="ravikanth.0989@waaxis" delay={0.5} direction="right" />
    </div>
  );
};

export default QRCodeCard;
