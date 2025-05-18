export default Settings = ({
  values,
  submitFormData,
  handleChange,
  setValues,
}) => {
  return (
    <>
      <h1>Settings</h1>
      <div class="form-container">
        <select
          onChange={(e) => {
            handleChange(e.target.value, "setting");
          }}
        >
          <option value="op1">Op 1</option>
          <option value="op2">Op 2</option>
        </select>
        <button onClick={() => submitFormData()}> Submit Data</button>
        <button
          onClick={() => {
            setValues({
              name: "",
              age: "",
              email: "",
              cricket: false,
              badminton: false,
              volleyball: false,
              setting: "",
            });
          }}
        >
          Reset Data
        </button>
      </div>
    </>
  );
};
