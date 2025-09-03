interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`backdrop-blur-sm  bg-gradient-to-br from-transparent to-brown-s/30 rounded-3xl p-8 md:p-12 shadow-2xl${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
