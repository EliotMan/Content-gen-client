const Textarea = ({ value, onChange, placeholder, rows, ...props }) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      className="w-full px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
      {...props}
    />
  );
};

export default Textarea;
