import React from 'react';

function Recommendations({ recommendations }) {
  return (
    <div className="recommendations">
      <h2>Recommended Gifts:</h2>
      <ul>
        {recommendations.map((recommendation, index) => (
          <li key={index}>{recommendation}</li>
        ))}
      </ul>
    </div>
  );
}

export default Recommendations;
