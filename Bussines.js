import React, { useState, useEffect } from 'react';
import { Button, TextField, Box } from '@mui/material';
import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

export default function Bus(props) {
  const busGitLabInputs = props.busGitLabInputs || [
    { value: '', error: false },
  ];
  const busAdGroupInputs = props.busAdGroupInputs || [
    { value: '', error: false },
  ];

  const handleAddGitLabInput = () => {
    const newGitLabInputs = [...busGitLabInputs, { value: '', error: false }];
    props.setBusGitLabInputs(newGitLabInputs);
  };

  const handleRemoveGitLabInput = (index) => {
    const updatedInputs = [...busGitLabInputs];
    updatedInputs.splice(index, 1);
    props.setBusGitLabInputs(updatedInputs);
  };

  const handleAddAdGroupInput = () => {
    const newAgGroupList = [...busAdGroupInputs, { value: '', error: false }];
    props.setBusAdGroupInputs(newAgGroupList);
  };

  const handleRemoveAdGroupInput = (index) => {
    const updatedInputs = [...busAdGroupInputs];
    updatedInputs.splice(index, 1);
    props.setBusAdGroupInputs(updatedInputs);
  };

  const handleBlur = (index, type) => {
    if (type === 'gitLab') {
      const newGitLab = [...busGitLabInputs];
      if (newGitLab[index].value.trim() === '') {
        newGitLab[index].error = true;
      } else {
        newGitLab[index].error = false;
      }
      props.setBusGitLabInputs(newGitLab);
    } else if (type === 'adGroup') {
      const newAdGroup = [...busAdGroupInputs];
      if (newAdGroup[index].value.trim() === '') {
        newAdGroup[index].error = true;
      } else {
        newAdGroup[index].error = false;
      }
      props.setBusAdGroupInputs(newAdGroup);
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
            {busGitLabInputs.map((input, index) => (
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
                    const updatedInputs = [...busGitLabInputs];
                    updatedInputs[index].value = e.target.value;
                    props.setBusGitLabInputs(updatedInputs);
                  }}
                />
                <IconButton
                  onClick={() =>
                    handleRemoveGitLabInput(busGitLabInputs.length - 1)
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
            {busAdGroupInputs.map((input, index) => (
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
                    const updatedInputs = [...busAdGroupInputs];
                    updatedInputs[index].value = e.target.value;
                    props.setBusAdGroupInputs(updatedInputs);
                  }}
                />
                <IconButton
                  onClick={() =>
                    handleRemoveAdGroupInput(busAdGroupInputs.length - 1)
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
