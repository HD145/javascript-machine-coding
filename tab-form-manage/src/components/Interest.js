export default Interest = ({ values, handleChange }) => {
  return (
    <>
      <h1>Interest</h1>
      <div class="form-container">
        <div className="checkbox">
          <label for="cric">Cricket</label>
          <input
            className="input-box"
            checked={values?.cricket}
            type="checkbox"
            id="cric"
            onChange={(e) => handleChange(!values?.cricket, "cricket")}
          ></input>
        </div>
        <div className="checkbox">
          <label>Volley Ball</label>
          <input
            className="input-box"
            placeholder="Hobbies"
            checked={values?.volleyball}
            type="checkbox"
            onChange={(e) => handleChange(!values?.volleyball, "volleyball")}
          />
        </div>
        <div className="checkbox">
          <label>Badminton</label>
          <input
            className="input-box"
            placeholder="Hobbies"
            checked={values?.badminton}
            type="checkbox"
            onChange={(e) => handleChange(!values?.badminton, "badminton")}
          ></input>
        </div>
      </div>
    </>
  );
};
