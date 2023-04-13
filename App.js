import React, { useState } from 'react';
import { Button, Box } from '@mui/material';
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import './style.css';
import Dev from './Dev';
import Bus from './Bussines';

export default function App() {
  const [devGitLabInputs, setDevGitLabInputs] = useState([{ value: '' }]);
  const [devAdGroupInputs, setDevAdGroupInputs] = useState([{ value: '' }]);

  const [busGitLabInputs, setBusGitLabInputs] = useState([{ value: '' }]);
  const [busAdGroupInputs, setBusAdGroupInputs] = useState([{ value: '' }]);

  const handleDevChange = ({ gitLabInputs, adGroupInputs }) => {
    setDevGitLabInputs(gitLabInputs);
    setDevAdGroupInputs(adGroupInputs);
  };

  const handleBusChange = ({ gitLabInputs, adGroupInputs }) => {
    setBusGitLabInputs(gitLabInputs);
    setBusAdGroupInputs(adGroupInputs);
  };

  const handleCompare = () => {
    // Do something with the inputs here
    console.log(gitLabInputs, adGroupInputs);
  };

  const validateInputs = (inputs) => {
    console.log(inputs);
    return inputs?.every((input) => input.value.trim().length > 0);
  };

  return (
    <div className="top-banner">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 1,
          width: '100%',
        }}
        style={{ paddingTop: '40px' }}
      >
        <Dev onChange={handleDevChange} />
        <Bus onChange={handleBusChange} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <Button
          variant="contained"
          onClick={handleCompare}
          disabled={
            !validateInputs(devGitLabInputs) ||
            !validateInputs(devAdGroupInputs) ||
            !validateInputs(busGitLabInputs) ||
            !validateInputs(busAdGroupInputs)
          }
        >
          Compare
        </Button>
      </Box>
    </div>
  );
}
