interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`backdrop-blur-sm bg-brown-s/12 rounded-3xl p-8 md:p-12 shadow-2xl border border-white-p/20 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
