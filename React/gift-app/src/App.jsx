import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Recommendations from './components/Recommendations';
import fetchRecommendations  from './utils/openai';

function App() {
  const [recipientInfo, setRecipientInfo] = useState({
    age: '',
    gender: '',
    interests: '',
  });
  const [recommendations, setRecommendations] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (formData) => {
    setRecipientInfo(formData);
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetchRecommendations(formData);
      setRecommendations(response.data.split('\n'));
    } catch (err) {
      console.error('Error fetching recommendations:', err);
      setError('An error occurred while generating recommendations.');
    } finally {
      setIsLoading(false);
    }
  };

  // Corrected useEffect
  useEffect(() => {
    // Optional: Clear recommendations when form is reset
    return () => setRecommendations([]);
  }, []);

  return (
    <div className="App">
      <h1>Gift Recommendation App</h1>
      <Form onSubmit={handleFormSubmit} />
      {error && <p className="error-message">{error}</p>}
      {isLoading && <p>Loading recommendations...</p>}
      {recommendations.length > 0 && (
        <Recommendations recommendations={recommendations} />
      )}
    </div>
  );
}

export default App;
