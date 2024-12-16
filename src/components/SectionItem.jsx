function SectionItem({ htmlFor, placeHolder, label, value, onChange }) {
  return (
    <div className="section-item">
      <label htmlFor={htmlFor}>{label}</label>
      <input
        id={htmlFor}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeHolder}
      />
    </div>
  );
}

export default SectionItem;
