import React from "react";
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Impo.scss";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Autocomplete
} from "@mui/material";

const DropOff = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
      <div className="title">
        <h2>Moving Few Item</h2>
        </div>
      <div className="card"> - Item Info -
        <TextField
          id="filled-number"
          label="Description"
          name=""
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-number"
          label="Height"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-number"
          label="Length"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-number"
          label="Width"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={mesurement}
          getOptionLabel={(option) => option.type}
          sx={{ width: 190 }}
          renderInput={(params) => <TextField {...params} label="Mesurement" />}
        />
        <FormControlLabel control={<Checkbox />} label="Dimensions are an estimate / guess only" />
        <TextField
          id="filled-number"
          label="Weight, Kg"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        <FormControlLabel control={<Checkbox />} label="Weight is an estimate / guess only" />
      </div>
      <div className="card">
        - Prefferd Delivery Day -
        <TextField
          id="filled-number"
          label="DD/MM/YY"
          type=""
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
      </div>
      <div className="card">
        - PickUp Details -
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={houseTypes}
          getOptionLabel={(option) => option.type}
          sx={{ width: 250 }}
          renderInput={(params) => (
            <TextField {...params} label="Property Type" />
          )}
        />
        <TextField
          id="input-with-sx"
          label="Pick-up Address"
          variant="standard"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Outside Victoria/regional Victoria or different State"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Property has Parking Restrictions"
        />
      </div>
      <div className="card">
        - DropOff Details -
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={houseTypes}
          getOptionLabel={(option) => option.type}
          sx={{ width: 250 }}
          renderInput={(params) => (
            <TextField {...params} label="Property Type" />
          )}
        />
        <TextField
          id="input-with-sx"
          label="Drop-off Address"
          variant="standard"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Outside Victoria/regional Victoria or different State"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Property has Parking Restrictions"
        />
      </div>
      <div className="card">
        - Your Information -
        <TextField
          id="standard-basic"
          label="First & Last Name"
          variant="standard"
        />
        <TextField
          id="standard-basic"
          label="Contact Number"
          variant="standard"
        />
      </div>
      <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default DropOff;
const mesurement = [
  {
    id: 1,
    type: "cm",
  },
  {
    id: 2,
    type: "m",
  },
  {
    id: 3,
    type: "ft",
  },
];

const houseTypes = [
    {
      id: 1,
      type: "Single storey house",
    },
    {
      id: 2,
      type: "Double storey house",
    },
    {
      id: 3,
      type: "Triple story house",
    },
    {
      id: 4,
      type: "Apartment with elevator",
    },
    {
      id: 5,
      type: "Apartment without elevator(1st floor)",
    },
    {
      id: 6,
      type: "Apartment without elevator(2nd floor)",
    },
    {
      id: 7,
      type: "Apartment without elevator(3rd+ floor)",
    },
    {
      id: 8,
      type: "Town House",
    },
  ];
