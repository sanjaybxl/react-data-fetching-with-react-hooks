import React, { useState } from 'react';
import { Button, Box } from '@mui/material';
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import './style.css';
import Dev from './Dev';
import Bus from './Bussines';

export default function App() {
  const [gitLabInputs, setGitLabInputs] = useState([{ value: '' }]);
  const [adGroupInputs, setAdGroupInputs] = useState([{ value: '' }]);

  const handleAddGitLabInput = () => {
    setGitLabInputs([...gitLabInputs, { value: '' }]);
  };

  const handleRemoveGitLabInput = (index) => {
    const updatedInputs = [...gitLabInputs];
    updatedInputs.splice(index, 1);
    setGitLabInputs(updatedInputs);
  };

  const handleAddAdGroupInput = () => {
    setAdGroupInputs([...adGroupInputs, { value: '' }]);
  };

  const handleRemoveAdGroupInput = (index) => {
    const updatedInputs = [...adGroupInputs];
    updatedInputs.splice(index, 1);
    setAdGroupInputs(updatedInputs);
  };

  const handleCompare = () => {
    // Do something with the inputs here
    console.log(gitLabInputs, adGroupInputs);
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
        <Dev />
        <Bus />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <Button variant="contained" onClick={handleCompare}>
          Compare
        </Button>
      </Box>
    </div>
  );
}
