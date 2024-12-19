function SectionItem({
  htmlFor,
  placeHolder,
  label,
  value,
  onChange,
  type = "text",
}) {
  return (
    <div className="section-item">
      <label htmlFor={htmlFor}>{label}</label>
      <input
        id={htmlFor}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeHolder}
        {...(type === "number" && { min: "0", max: "100" })}
      />
    </div>
  );
}

export default SectionItem;
