import React, { useState, useEffect } from 'react';
import { Button, TextField, Box } from '@mui/material';
import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

export default function Dev(props) {
  const devGitLabInputs = props.devGitLabInputs || [
    { value: '', error: false },
  ];
  const devAdGroupInputs = props.devAdGroupInputs || [
    { value: '', error: false },
  ];

  const handleAddGitLabInput = () => {
    const newGitLabInputs = [...devGitLabInputs, { value: '', error: false }];
    props.setDevGitLabInputs(newGitLabInputs);
  };

  const handleRemoveGitLabInput = (index) => {
    const updatedInputs = [...devGitLabInputs];
    updatedInputs.splice(index, 1);
    props.setDevGitLabInputs(updatedInputs);
  };

  const handleAddAdGroupInput = () => {
    const newAgGroupList = [...devAdGroupInputs, { value: '', error: false }];
    props.setDevAdGroupInputs(newAgGroupList);
  };

  const handleRemoveAdGroupInput = (index) => {
    const updatedInputs = [...devAdGroupInputs];
    updatedInputs.splice(index, 1);
    props.setDevAdGroupInputs(updatedInputs);
  };

  const handleBlur = (index, type) => {
    if (type === 'gitLab') {
      const newGitLab = [...devGitLabInputs];
      if (newGitLab[index].value.trim() === '') {
        newGitLab[index].error = true;
      } else {
        newGitLab[index].error = false;
      }
      props.setDevGitLabInputs(newGitLab);
    } else if (type === 'adGroup') {
      const newAdGroup = [...devAdGroupInputs];
      if (newAdGroup[index].value.trim() === '') {
        newAdGroup[index].error = true;
      } else {
        newAdGroup[index].error = false;
      }
      props.setDevAdGroupInputs(newAdGroup);
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
            {devGitLabInputs.map((input, index) => (
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
                  helperText={
                    input.error && input?.data !== ''
                      ? 'Please fill in GitLab input'
                      : input?.data === ''
                      ? 'Invalid data'
                      : ''
                  }
                  onBlur={() => handleBlur(index, 'gitLab')}
                  onChange={(e) => {
                    const updatedInputs = [...devGitLabInputs];
                    updatedInputs[index].value = e.target.value;
                    props.setDevGitLabInputs(updatedInputs);
                  }}
                />
                <IconButton
                  onClick={() =>
                    handleRemoveGitLabInput(devGitLabInputs.length - 1)
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
            {devAdGroupInputs.map((input, index) => (
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
                  helperText={
                    input.error && input?.data !== ''
                      ? 'Please fill in AgGroup input'
                      : input?.data === ''
                      ? 'Invalid data'
                      : ''
                  }
                  onBlur={() => handleBlur(index, 'adGroup')}
                  onChange={(e) => {
                    const updatedInputs = [...devAdGroupInputs];
                    updatedInputs[index].value = e.target.value;
                    props.setDevAdGroupInputs(updatedInputs);
                  }}
                />
                <IconButton
                  onClick={() =>
                    handleRemoveAdGroupInput(devAdGroupInputs.length - 1)
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
