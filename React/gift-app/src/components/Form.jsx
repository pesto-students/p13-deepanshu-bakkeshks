import React, { useState } from 'react';

function Form({ onSubmit }) {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [interests, setInterests] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ age, gender, interests });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="age">Age:</label>
      <input
        type="number"
        id="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
      />
      <br />
      <label htmlFor="gender">Gender:</label>
      <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)} required>
        <option value="">Select...</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="non-binary">Non-Binary</option>
      </select>
      <br />
      <label htmlFor="interests">Interests (comma-separated):</label>
      <textarea
        id="interests"
        value={interests}
        onChange={(e) => setInterests(e.target.value)}
        required
      />
      <br />
      <button type="submit">Generate Recommendations</button>
    </form>
  );
}

export default Form;
