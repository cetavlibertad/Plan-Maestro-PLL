import React, { useState, useEffect } from 'react';

function DropdownPrint() {
  const [selectedOption, setSelectedOption] = useState();
  const [optionsState, setOptionsState] = useState({
    build: true,
    notbuild: false,
  });

  const handleRadioChange = (e) => {
    const option = e.target.value;
    const updatedOptionsState = {
      build: false,
      notbuild: false,
    };

    if (option === 'both') {
      updatedOptionsState["build"] = true;
      updatedOptionsState["notbuild"] = true;
    } else {
      updatedOptionsState[option] = true;
    }

    setOptionsState(updatedOptionsState);
    setSelectedOption(option);
  };

  useEffect(() => {
    handleStateChange(optionsState);
  }, [optionsState]);

  const handleStateChange = (newState) => {
    const buildElements = document.getElementsByClassName('built');
    const notbuildElements = document.getElementsByClassName('not_built');
    
    for (const element of buildElements) {
      element.style.display = newState.build ? 'block' : 'none';
    }

    for (const element of notbuildElements) {
      element.style.display = newState.notbuild ? 'block' : 'none';
    }
  };

  const generalStyle = {
    background: 'rgb(166, 200, 152)',
    width: '250px',
    color: 'black',
    fontSize: '20px',
    height: '20px',
    textAlign: 'center',
    padding: '10px',
    margin: '10px 30px',
    border: 'solid black 1px',
    cursor: 'pointer', // Added cursor pointer for better UX
  };

  return (
    <div className='maptab'>
      <label style={{ ...generalStyle, background: optionsState.build ? 'rgb(185, 225, 169)' : 'rgb(166, 200, 152)' }}>
        <input
          type="radio"
          name="option"
          value="build"
          checked={selectedOption === 'build'}
          onChange={handleRadioChange}
          style={{ display: 'none' }}
        />
        Built & Remodelation
      </label>

      <label style={{ ...generalStyle, background: optionsState.notbuild ? 'rgb(185, 225, 169)' : 'rgb(166, 200, 152)' }}>
        <input
          type="radio"
          name="option"
          value="notbuild"
          checked={selectedOption === 'notbuild'}
          onChange={handleRadioChange}
          style={{ display: 'none' }}
        />
        To Build
      </label>

      <label style={{ ...generalStyle, background: optionsState.build && optionsState.notbuild ? 'rgb(185, 225, 169)' : 'rgb(166, 200, 152)' }}>
        <input
          type="radio"
          name="option"
          value="both"
          checked={selectedOption === 'both'}
          onChange={handleRadioChange}
          style={{ display: 'none' }}
        />
        Show All
      </label>
    </div>
  );
}

export default DropdownPrint;
