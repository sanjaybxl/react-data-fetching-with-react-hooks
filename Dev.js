import React, { useState, useEffect } from 'react';
import { Button, TextField, Box } from '@mui/material';
import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

export default function Dev({ onChange }) {
  const [gitLabInputs, setGitLabInputs] = useState([
    { value: '', error: false },
  ]);
  const [adGroupInputs, setAdGroupInputs] = useState([
    { value: '', error: false },
  ]);

  useEffect(() => {
    onChange({ gitLabInputs, adGroupInputs });
  }, [adGroupInputs, gitLabInputs, onChange]);

  const handleAddGitLabInput = () => {
    const newGitLabInputs = [...gitLabInputs, { value: '', error: false }];
    setGitLabInputs(newGitLabInputs);
  };

  const handleRemoveGitLabInput = (index) => {
    const updatedInputs = [...gitLabInputs];
    updatedInputs.splice(index, 1);
    setGitLabInputs(updatedInputs);
  };

  const handleAddAdGroupInput = () => {
    const newAgGroupList = [...adGroupInputs, { value: '', error: false }];
    setAdGroupInputs(newAgGroupList);
  };

  const handleRemoveAdGroupInput = (index) => {
    const updatedInputs = [...adGroupInputs];
    updatedInputs.splice(index, 1);
    setAdGroupInputs(updatedInputs);
  };

  const handleBlur = (index, type) => {
    if (type === 'gitLab') {
      const newGitLab = [...gitLabInputs];
      if (newGitLab[index].value.trim() === '') {
        newGitLab[index].error = true;
      } else {
        newGitLab[index].error = false;
      }
      setGitLabInputs(newGitLab);
    } else if (type === 'adGroup') {
      const newAdGroup = [...adGroupInputs];
      if (newAdGroup[index].value.trim() === '') {
        newAdGroup[index].error = true;
      } else {
        newAdGroup[index].error = false;
      }
      setAdGroupInputs(newAdGroup);
    }
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
        <Box>Dev</Box>
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
                  style={{ width: '400px' }}
                  value={input.value}
                  error={input.error}
                  helperText={input.error ? 'Please fill in GitLab input' : ''}
                  onBlur={() => handleBlur(index, 'gitLab')}
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
                  error={input.error}
                  helperText={input.error ? 'Please fill in AgGroup input' : ''}
                  onBlur={() => handleBlur(index, 'adGroup')}
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
        </Box>
      </Box>
    </>
  );
}
