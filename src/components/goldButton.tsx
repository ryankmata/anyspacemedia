import React from 'react';

interface GoldButtonProps {
  href?: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const GoldButton: React.FC<GoldButtonProps> = ({ 
  href = "#explore", 
  children, 
  onClick, 
  className = "" 
}) => {
  const baseClasses = `
    inline-block
    px-12 
    py-4 
    bg-gradient-to-br 
    from-yellow-400 
    via-yellow-500 
    to-yellow-600
    text-black 
    font-medium 
    text-sm 
    tracking-widest 
    uppercase 
    rounded-full 
    transition-all 
    duration-300 
    ease-in-out
    shadow-lg
    shadow-yellow-500/30
    hover:shadow-xl
    hover:shadow-yellow-500/50
    hover:-translate-y-1
    hover:from-yellow-300
    hover:via-yellow-400
    hover:to-yellow-500
    active:translate-y-0
    active:shadow-md
    relative
    overflow-hidden
    group
    no-underline
    ${className}
  `;

  const shimmerClasses = `
    absolute
    inset-0
    -translate-x-full
    bg-gradient-to-r
    from-transparent
    via-white/30
    to-transparent
    group-hover:translate-x-full
    transition-transform
    duration-500
    ease-in-out
  `;

  if (href) {
    return (
      <a href={href} className={baseClasses} onClick={onClick}>
        <span className={shimmerClasses}></span>
        <span className="relative z-10">{children}</span>
      </a>
    );
  }

  return (
    <button className={baseClasses} onClick={onClick}>
      <span className={shimmerClasses}></span>
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default GoldButton;

// Usage example:
// <GoldButton href="#explore">Explore Collection</GoldButton>
// <GoldButton onClick={() => console.log('clicked')}>Explore Collection</GoldButton>