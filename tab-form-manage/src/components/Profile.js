export default Profile = ({ values, handleChange, errors }) => {
  console.log(values);
  return (
    <>
      <h4>Profile</h4>
      <div class="form-container">
        <input
          className="input-box"
          placeholder="Name"
          value={values?.name}
          onChange={(e) => handleChange(e.target.value, "name")}
        ></input>
        {errors?.name && <span style={{ color: "red" }}>{errors?.name}</span>}
        <input
          className="input-box"
          placeholder="Age"
          value={values?.age}
          type="number"
          onChange={(e) => handleChange(e.target.value, "age")}
        ></input>
        {errors?.age && <span style={{ color: "red" }}>{errors?.age}</span>}
        <input
          className="input-box"
          placeholder="Email"
          value={values?.email}
          onChange={(e) => handleChange(e.target.value, "email")}
        ></input>
        {errors?.email && <span style={{ color: "red" }}>{errors?.email}</span>}
      </div>
    </>
  );
};
