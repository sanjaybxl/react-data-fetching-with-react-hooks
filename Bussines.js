import React, { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';
import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

export default function Bus() {
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
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 1,
          width: '100%',
        }}
        style={{ paddingTop: '40px' }}
      >
        <Box>Bus</Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
          }}
          style={{ paddingTop: '40px' }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
            }}
          >
            {gitLabInputs.map((input, index) => (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 2,
                }}
              >
                <TextField
                  key={`gitlab-${index}`}
                  label="GitLab"
                  value={input.value}
                  style={{ width: '400px' }}
                  onChange={(e) => {
                    const updatedInputs = [...gitLabInputs];
                    updatedInputs[index].value = e.target.value;
                    setGitLabInputs(updatedInputs);
                  }}
                />
                <IconButton
                  onClick={() =>
                    handleRemoveGitLabInput(gitLabInputs.length - 1)
                  }
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
            }}
          >
            {adGroupInputs.map((input, index) => (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 2,
                }}
              >
                <TextField
                  key={`adgroup-${index}`}
                  label="AD Group"
                  style={{ width: '400px' }}
                  value={input.value}
                  onChange={(e) => {
                    const updatedInputs = [...adGroupInputs];
                    updatedInputs[index].value = e.target.value;
                    setAdGroupInputs(updatedInputs);
                  }}
                />
                <IconButton
                  onClick={() =>
                    handleRemoveAdGroupInput(adGroupInputs.length - 1)
                  }
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Button variant="contained" onClick={handleAddGitLabInput}>
              Add GitLab
            </Button>
            <Button variant="contained" onClick={handleAddAdGroupInput}>
              Add Ad Group
            </Button>
          </Box>
          <Button variant="contained" onClick={handleCompare}>
            Compare
          </Button>
        </Box>
      </Box>
    </>
  );
}
