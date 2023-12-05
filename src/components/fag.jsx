import { useState, useEffect } from 'react';

const WordPressFag = () => {
  const [fags, setFags] = useState([]);

  useEffect(() => {
    const fetchFags = async () => {
      try {
        const response = await fetch('https://wordpress.vicw.dk/?cat=3"');
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        setFags(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
 
    fetchFags();
  }, []);

  return (
    <div>
      {fags.map(fag => (
        <div key={fag.id} className="mui-card">
          <p>{fag.question}</p>
          <p>{fag.answer}</p>
          {/* Additional content if needed */}
        </div>
      ))}
    </div>
  );
};

export default WordPressFag;
