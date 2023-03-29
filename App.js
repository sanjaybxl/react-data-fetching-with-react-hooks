import React, { Component, useState, useEffect } from 'react';
import { render } from 'react-dom';
import { Button, TextField, Box } from '@mui/material';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import './style.css';
import Dev from './Dev';
import Bus from './Bussines';

export default function App() {
  // async function getGitLabGroup(gitLab, index) {
  //   const response = await fetch(`/api/users${gitLab}`);
  //   if (!response.ok) {
  //     updateFieldData('error', 'Invalid gitlab group', index);
  //   } else {
  //     return await response.json();
  //   }
  // }

  // async function getAdgroup(adGroup, index) {
  //   const response = await fetch(`/api/users${adGroup}`);
  //   if (!response.ok) {
  //     updateFieldData('error', 'Invalid Ad group input', index);
  //   } else {
  //     return await response.json();
  //   }
  // }

  // const handleCompare = async () => {
  //   const data = [...formFields];
  //   data.forEach(async (field, index) => {
  //     const { adGroup, gitLab } = field;
  //     const responses = await Promise.all([
  //       getGitLabGroup(gitLab, index),
  //       getAdgroup(adGroup, index),
  //     ]);
  //     const gitLabData = responses[0];
  //     const adGroupData = responses[1];
  //     const result = gitLabData.filter((d) => adGroupData.includes(d));
  //     updateFieldData('compareData', result, index);
  //   });
  // };

  // const [formFields, setFormFields] = useState([
  //   { gitLab: '', adGroup: '', error: '', compareData: [] },
  // ]);

  // const handleFormChange = (event, index) => {
  //   updateFieldData(event.target.name, event.target.value, index);
  //   setFormValid(formRef.current.reportValidity());
  // };

  // const updateFieldData = (prop, data, index) => {
  //   let fields = [...formFields];
  //   fields[index][prop] = data;
  //   setFormFields(fields);
  // };

  // const addFields = () => {
  //   let object = {
  //     gitLab: '',
  //     adGroup: '',
  //     error: '',
  //     compareData: [],
  //   };
  //   setFormFields([...formFields, object]);
  // };

  // const removeFields = (index) => {
  //   let data = [...formFields];
  //   data.splice(index, 1);
  //   setFormFields(data);
  // };

  // const submit = (e) => {
  //   e.preventDefault();
  //   if (formRef.current.reportValidity()) {
  //     console.log('call api');
  //     handleCompare();
  //   } else {
  //     console.log('error');
  //   }
  // };

  // const [valid, setFormValid] = useState(false);
  // const formRef = React.useRef();

  // return (
  //   <div className="top-banner">
  //     <Grid style={{ paddingTop: '40px' }}>
  //       <Card style={{ maxWidth: 600, padding: '20px 5px', margin: '0 auto' }}>
  //         <CardContent>
  //           <Typography gutterBottom variant="h5">
  //             Users Compare Tool
  //           </Typography>
  //           <form onSubmit={submit} ref={formRef}>
  //             <Grid container spacing={1} style={{ marginTop: '10px' }}>
  //               {formFields.map((form, index) => {
  //                 return (
  //                   <Grid
  //                     container
  //                     spacing={3}
  //                     key={index}
  //                     style={{ marginBottom: '10px' }}
  //                   >
  //                     <Grid item xs="auto" item>
  //                       cw<TextField
  //                         error={formFields[index].error}
  //                         placeholder="Enter Girlab Group"
  //                         label="GitlLab Group"
  //                         name="gitLab"
  //                         variant="outlined"
  //                         fullWidth
  //                         required
  //                         onChange={(event) => handleFormChange(event, index)}
  //                         helperText={formFields[index].error}
  //                       ></TextField>
  //                     </Grid>
  //                     <Grid item xs="auto" item>
  //                       <TextField
  //                         error={formFields[index].error}
  //                         placeholder="Enter Ad Group"
  //                         label="Ad Group"
  //                         name="adGroup"
  //                         variant="outlined"
  //                         fullWidth
  //                         required
  //                         onChange={(event) => handleFormChange(event, index)}
  //                         helperText={formFields[index].error}
  //                       ></TextField>
  //                     </Grid>
  //                     <Grid item item xs="auto">
  //                       <IconButton aria-label="delete" onClick={removeFields}>
  //                         <DeleteIcon />
  //                       </IconButton>
  //                     </Grid>
  //                   </Grid>
  //                 );
  //               })}
  //               <button onClick={addFields}>Add More..</button>

  //               <Grid xs={12} item>
  //                 <Button
  //                   size="large"
  //                   variant="contained"
  //                   disabled={!valid}
  //                   onClick={submit}
  //                   fullWidth
  //                 >
  //                   Compare
  //                 </Button>
  //               </Grid>
  //             </Grid>
  //           </form>
  //           <>
  //             {formFields.map((field) => (
  //               <ul key={field}>
  //                 {field.compareData.map((item) => (
  //                   <li key={item}> {item} </li>
  //                 ))}
  //               </ul>
  //             ))}
  //           </>
  //         </CardContent>
  //       </Card>
  //     </Grid>
  //   </div>
  // );
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
    </div>
  );
}
