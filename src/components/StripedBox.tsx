export default function StripedBox({ className }: { className: string }) {
  return (
    <div
      className={`bg-[repeating-linear-gradient(45deg,theme(colors.pink-p-transparent)_0px,theme(colors.pink-p-transparent)_3px,transparent_3px,transparent_10px)] ${className}`}
    />
  );
}
