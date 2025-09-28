import CopyIcon from '../assets/svgs/copy';
import useNotify from '../hooks/useNotify';

interface CopyButtonProps {
  text: string;
  className?: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ text, className = '' }) => {
  const notify = useNotify();
  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(text);
      notify({ message: 'Copied to clipboard', type: 'info' });
    } catch {
      notify({ message: 'Failed to copy to clipboard', type: 'error' });
    }
  };

  return (
    <button
      type="button"
      title="copy"
      onClick={() => void handleClick()}
      className={`group/btn flex flex-row border-2 text-brown-p border-gray-p dark:text-brown-s bg-gray-p/50 active:bg-gray-p/30 items-center gap-2 cursor-pointer w-fit rounded-lg h-8 font-bold px-3 py-2 font-mono ${className} active:shadow-none`}
      aria-label="Copy to clipboard"
    >
      <span>{text}</span>
      <CopyIcon className="w-5 h-5 group-hover/btn:scale-120 group-active/btn:scale-130 group-active/btn:laptop:scale-90 transition-transform duration-200" />
    </button>
  );
};

export default CopyButton;
