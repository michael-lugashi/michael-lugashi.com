interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  disabled = false,
  isLoading = false,
  className = '',
}) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled || isLoading}
    className={`transition-all duration-300 transform px-12 py-3 text-xl font-bold rounded-2xl text-brown-p border-2 border-brown-p ${className} ${
      disabled
        ? 'hover:scale-100 active:scale-100 cursor-not-allowed bg-gray-400/40'
        : 'hover:scale-105 active:scale-95 bg-[repeating-linear-gradient(45deg,theme(colors.pink-p-transparent)_0px,theme(colors.pink-p-transparent)_3px,transparent_3px,transparent_10px)] hover:bg-pink-p/40 '
    }`}
  >
    <span className="relative z-10">
      {isLoading ? (
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 border-2 border-brown-p/30 border-t-brown-p rounded-full animate-spin"></div>
          Loading...
        </div>
      ) : (
        children
      )}
    </span>
  </button>
);

export default Button;
