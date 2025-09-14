import React from 'react';

interface TextFieldProps {
  inputRef?: React.RefObject<HTMLInputElement | null>;
  label: string;
  name: string;
  type?: 'text' | 'email' | 'tel';
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

const TextField: React.FC<TextFieldProps> = ({
  inputRef = null,
  label,
  name,
  type = 'text',
  placeholder,
  required = false,
  value,
  onChange,
  error,
}) => {
  return (
    <div className="mb-8 relative">
      <label htmlFor={name} className="block text-brown-p dark:text-pink-p text-lg font-semibold mb-3">
        {label}
        {required && <span className="text-red-600 ml-2 text-xl">*</span>}
      </label>
      <input
        ref={inputRef}
        formNoValidate
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-6 py-4 border-2 rounded-2xl rounded-tl-none focus:outline-none focus:ring-0 focus:border-bg-pink-p transition-all duration-300 text-lg ${
          error
            ? 'border-pink-p bg-pink-p/20 shadow-md'
            : 'border-brown-s/30 hover:border-brown-p/50 focus:border-pink-p bg-white-p/50 hover:bg-white-p/70'
        }`}
      />

      {error && (
        <div className="absolute -bottom-7 left-0 flex items-center gap-2 text-red-600 animate-fade-in text-sm font-medium">
          * {error}
        </div>
      )}
    </div>
  );
};

export default TextField;
