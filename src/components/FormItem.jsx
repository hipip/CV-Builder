function FormItem({ htmlFor, label, value, onChange }) {
  return (
    <div className="form-item">
      <label htmlFor={htmlFor}>{label}</label>
      <input id={htmlFor} type="text" value={value} onChange={onChange} />
    </div>
  );
}

export default FormItem;
