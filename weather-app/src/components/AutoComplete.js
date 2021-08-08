import React, { useState } from 'react';
import useAutocomplete from 'use-autocomplete';
const testWords = [
  "Leslie",
  "Jolene",
  "Cooley",
  "Allison",
  "Debbie",
  "Beryl",
  "Carissa",
  "Jewel",
  "Daisy",
  "Gordon"
];
const AutoComplete = () => {
  // const [textState, setTextState] = useState('');
  // const [completions] = useAutocomplete(textState, testWords);

  return (
    <div>
      <input
        type='text'
        value={textState}
        onChange={(e) => setTextState(e.target.value)}
      />
      <div>
        {completions.map((val, index) => (
          <p key={index}>{val}</p>
        ))}
      </div>    
    </div>
  );
};

export default AutoComplete;