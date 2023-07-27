const Gender = (props) => {
  return (
    <div style={{ marginTop: "50px" }}>
      <label style={{color:'black', fontWeight:'700'}}>
        Gender
        <select
          style={{
            border: "none",
            backgroundColor: "#fff6df93",
            height: "35px",
            fontSize: "1rem",
            fontWeight: "500",
            marginLeft: "5px",
          }}
          id="gender"
        >
          <option id="gender" value="Unisex">
            Prefer not to say
          </option>
          <option id="gender">Male</option>
          <option id="gender">Female</option>
        </select>
      </label>
    </div>
  );
};

export default Gender;
