const StripedText = ({ children }: { children: React.ReactNode }) => (
  <span
    className={`text-transparent bg-clip-text
      bg-[repeating-linear-gradient(45deg,var(--color-brown-p)_0px,var(--color-brown-p)_1px,transparent_1px,transparent_2px)]
      dark:bg-[repeating-linear-gradient(45deg,var(--color-pink-p)_0px,var(--color-pink-p)_1px,transparent_1px,transparent_2px)]
      laptop:bg-[repeating-linear-gradient(45deg,var(--color-brown-p)_0px,var(--color-brown-p)_2px,transparent_2px,transparent_4px)]
      laptop:dark:bg-[repeating-linear-gradient(45deg,var(--color-pink-p)_0px,var(--color-pink-p)_2px,transparent_2px,transparent_4px)]
    `}
  >
    {children}
  </span>
);

export default StripedText;
