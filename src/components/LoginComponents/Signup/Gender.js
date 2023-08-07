const Gender = (props) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <label style={{color:'#140202', fontWeight:'600'}}>
        Gender
        <select
          style={{
            border: "2px solid #908e9b",
            backgroundColor: "#fff6df93",
            height: "35px",
            fontSize: "1rem",
            fontWeight: "500",
            marginLeft: "5px",
            borderRadius:'20px'
           
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
