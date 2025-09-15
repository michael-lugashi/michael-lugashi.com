export default function StripedBox({ className }: { className: string }) {
  return (
    <div
      className={`bg-[repeating-linear-gradient(45deg,var(--color-pink-p)_0px,var(--color-pink-p)_3px,transparent_3px,transparent_9px)] dark:bg-[repeating-linear-gradient(45deg,theme(colors.brown-p-transparent)_0px,theme(colors.brown-p-transparent)_3px,transparent_3px,transparent_9px)] ${className}`}
    />
  );
}
