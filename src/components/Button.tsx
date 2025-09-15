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
    className={`transition-transform cursor-pointer duration-300 transform px-12 py-3 text-xl font-bold rounded-lg text-brown-p dark:text-pink-p border-2 border-brown-p dark:border-pink-p ${className} ${
      disabled
        ? 'hover:scale-100 active:scale-100 cursor-not-allowed bg-gray-400/40'
        : 'tablet:hover:scale-110 tablet:active:scale-95 active:scale-80 bg-[repeating-linear-gradient(45deg,var(--color-pink-p)_0px,var(--color-pink-p)_3px,transparent_3px,transparent_9px)] hover:bg-none active:bg-none hover:bg-pink-p/50 active:bg-pink-p/50 dark:bg-[repeating-linear-gradient(45deg,var(--color-brown-p)_0px,var(--color-brown-p-transparent)_3px,transparent_3px,transparent_9px)] dark:hover:bg-brown-p/40 dark:active:bg-brown-p/40'
    }`}
  >
    <span className="relative z-10">
      {isLoading ? (
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 border-2 border-brown-p/30 border-t-brown-p rounded-full animate-spin" />
          Loading...
        </div>
      ) : (
        children
      )}
    </span>
  </button>
);

export default Button;
