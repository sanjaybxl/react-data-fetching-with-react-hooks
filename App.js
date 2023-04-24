import React, { useState } from 'react';
import { Button, Box } from '@mui/material';
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import './style.css';
import Dev from './Dev';
import Bus from './Bussines';

export default function App() {
  const [devGitLabInputs, setDevGitLabInputs] = useState([
    { value: '', error: false },
  ]);
  const [devAdGroupInputs, setDevAdGroupInputs] = useState([
    { value: '', error: false },
  ]);

  const [busGitLabInputs, setBusGitLabInputs] = useState([
    { value: '', error: false },
  ]);
  const [busAdGroupInputs, setBusAdGroupInputs] = useState([
    { value: '', error: false },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleDevChange = ({ gitLabInputs, adGroupInputs }) => {
    setDevGitLabInputs(gitLabInputs);
    setDevAdGroupInputs(adGroupInputs);
  };

  const handleBusChange = ({ gitLabInputs, adGroupInputs }) => {
    setBusGitLabInputs(gitLabInputs);
    setBusAdGroupInputs(adGroupInputs);
  };

  const handleDevGitLabApi = async () => {
    // Do something with the inputs here
    try {
      setIsLoading(true);

      // Call API for GitLab inputs
      const devGitLabResponses = await Promise.all(
        devGitLabInputs.map(async (input) => {
          const response = await fetch(
            `https://api.example.com/gitlab?input=${input.value}`
          );
          if (!response.ok) {
            return false;
          }
          return await response;
        })
      );

      const devGitLabData = await Promise.all(
        devGitLabResponses.map((response) =>
          typeof response == 'boolean' ? response : response.json()
        )
      );

      console.log(devGitLabData);
      // Update state with API response data
      const updatedGitLabInputs = devGitLabInputs.map((input, index) => ({
        ...input,
        error: !devGitLabData[index],
        data: !devGitLabData[index] ? '' : devGitLabData[index],
      }));
      setDevGitLabInputs(updatedGitLabInputs);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBusGitLabInputs = async () => {
    // Do something with the inputs here
    try {
      setIsLoading(true);

      // Call API for GitLab inputs
      const busGitLabInputsResponses = await Promise.all(
        busGitLabInputs.map(async (input) => {
          const response = await fetch(
            `https://api.example.com/gitlab?input=${input.value}`
          );
          if (!response.ok) {
            return false;
          }
          return response;
        })
      );
      const busGitLabInputsData = await Promise.all(
        busGitLabInputsResponses.map((response) =>
          typeof response == 'boolean' ? response : response.json()
        )
      );

      // Update state with API response data
      const updatedGitLabInputs = busGitLabInputs.map((input, index) => ({
        ...input,
        error: !busGitLabInputsData[index],
        data: !busGitLabInputsData[index] ? '' : busGitLabInputsData[index],
      }));
      setBusGitLabInputs(updatedGitLabInputs);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDevAdGroupInputs = async () => {
    // Do something with the inputs here
    try {
      setIsLoading(true);

      // Call API for GitLab inputs
      const devAdGroupInputsResponses = await Promise.all(
        devAdGroupInputs.map(async (input) => {
          const response = await fetch(
            `https://api.example.com/gitlab?input=${input.value}`
          );
          if (!response.ok) {
            return false;
          }
          return response;
        })
      );
      const devAdGroupInputsData = await Promise.all(
        devAdGroupInputsResponses.map((response) =>
          typeof response == 'boolean' ? response : response.json()
        )
      );

      // Update state with API response data
      const updatedInputs = devAdGroupInputs.map((input, index) => ({
        ...input,
        error: !devAdGroupInputsData[index],
        data: !devAdGroupInputsData[index] ? '' : devAdGroupInputsData[index],
      }));
      setDevAdGroupInputs(updatedInputs);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBusAdGroupInputs = async () => {
    // Do something with the inputs here
    try {
      setIsLoading(true);

      // Call API for GitLab inputs
      const busAdGroupInputsResponses = await Promise.all(
        busAdGroupInputs.map(async (input) => {
          const response = await fetch(
            `https://api.example.com/gitlab?input=${input.value}`
          );
          if (!response.ok) {
            return false;
          }
          return response;
        })
      );
      const busAdGroupInputsData = await Promise.all(
        busAdGroupInputsResponses.map((response) =>
          typeof response == 'boolean' ? response : response.json()
        )
      );

      // Update state with API response data
      const updatedInputs = busAdGroupInputs.map((input, index) => ({
        ...input,
        error: !busAdGroupInputsData[index],
        data: !busAdGroupInputsData[index] ? '' : busAdGroupInputsData[index],
      }));
      setBusAdGroupInputs(updatedInputs);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCompare = async () => {
    await handleDevGitLabApi();
    await handleBusGitLabInputs();
    await handleDevAdGroupInputs();
    await handleBusAdGroupInputs();
  };

  const validateInputs = (inputs) => {
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
        <Dev
          onChange={handleDevChange}
          devGitLabInputs={devGitLabInputs}
          setDevGitLabInputs={setDevGitLabInputs}
          devAdGroupInputs={devAdGroupInputs}
          setDevAdGroupInputs={setDevAdGroupInputs}
        />
        <Bus
          onChange={handleBusChange}
          busGitLabInputs={busGitLabInputs}
          setBusGitLabInputs={setBusGitLabInputs}
          busAdGroupInputs={busAdGroupInputs}
          setBusAdGroupInputs={setBusAdGroupInputs}
        />
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
