const ScrollIndicator: React.FC = () => {
  return (
    <div className="flex flex-col absolute top-3/5 items-center justify-center w-min ml-36">
      <span className="text-gray-p tracking-[0.5em] mb-4 text-sm">SCROLL</span>
      <div className="w-px h-96 bg-gray-p mr-1" />
    </div>
  );
};

export default ScrollIndicator;
