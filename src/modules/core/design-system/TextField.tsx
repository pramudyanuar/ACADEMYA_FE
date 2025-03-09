// components/TextField.tsx
interface TextFieldProps {
  label: string;
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextField: React.FC<TextFieldProps> = ({ label, type, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 dark:text-gray-300">{label}</label>
      <input
        type={type}
        className="w-full p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded mt-1"
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default TextField;