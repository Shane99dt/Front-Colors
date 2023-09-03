const Select = ({ options, handleChange, value }) => {
  return (
    <select defaultValue={value} onChange={handleChange} className="selectTri">
      {options.map((option) => {
        return (
          <option key={option.text} value={option.value}>
            {option.text}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
