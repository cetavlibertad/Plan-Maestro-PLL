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
    updatedOptionsState[option] = true;
    setOptionsState(updatedOptionsState);
    setSelectedOption(option);
  };

  useEffect(() => {
    handleStateChange(optionsState);
  }, [optionsState]);

  const handleStateChange = (newState) => {
    console.log('Nuevo estado:', newState);
    const buildElements = document.getElementsByClassName('built');
    const notbuildElements = document.getElementsByClassName('not_built');
    const buildbt = document.getElementById('buildID');
    const notbuildbt = document.getElementById('NTbuildID')
    

    for (const element of buildElements) {
      element.style.display = newState.build ? 'block' : 'none';
      buildbt.style.background = newState.build ? 'rgb(185 225 169)' : 'rgb(166 200 152)';
    }
    for (const element of notbuildElements) {
      element.style.display = newState.notbuild ? 'block' : 'none';
      notbuildbt.style.background = newState.build ? 'rgb(166 200 152)' : 'rgb(185 225 169)';
    }
  };
  const generalStyle = {
    background: '#4cc29c',
    width: '250px',
    color:'black',
    fontSize:'20px',
    height: '20px',
    textAlign: 'center',
    padding: '10px',
    margin:' 10px 30px',
    border: 'solid black 1px'
  };



  return (
    <div className='maptab' >
      <label style={generalStyle} id='buildID'>
        <input
          type="radio"
          name="option"
          value="build"
          checked={selectedOption === 'build'}
          onChange={handleRadioChange}
          style={{ display: 'none' }}
        />
        Built 
      </label>
      <label style={generalStyle} id='NTbuildID'>
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
    </div>
  );
}

export default DropdownPrint;