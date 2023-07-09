const Gender = (props) => {
  return (
    <div>
      <label>
        Gender
        <select id="gender">
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
