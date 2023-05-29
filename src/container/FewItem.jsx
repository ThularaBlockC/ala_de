import React, { useState,useRef  } from "react";
import emailjs from '@emailjs/browser';
import "./Impo.scss";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Autocomplete,
  Button,
} from "@mui/material";

const FewItem = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_*****', 'template_*****', form.current, '-**********')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  const [selectedId, setSelectedId] = useState();

  const handleClick = (id) => {
    setSelectedId(id !== selectedId ? id : null);
  };
  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
      <div className="title">
        <h2>Marketplace Delivery</h2>
        </div>
        {moreItems.map((val) => (
          <div className="card-item"> 
            <Button variant="outlined" onClick={() => handleClick(val.id)}>
              {val.label}
              
            </Button>
            {selectedId === val.id && (
              <div>
              <div className="card">
                - Item Info -
                <TextField
                  id="filled-number"
                  label="Description"
                  type="number"
                  name="dp"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                />
                <TextField
                  id="filled-number"
                  label="Height"
                  name="hei"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                />
                <TextField
                  id="filled-number"
                  label="Length"
                  name="len"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                />
                <TextField
                  id="filled-number"
                  label="Width"
                  name="wid"
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
                  renderInput={(params) => (
                    <TextField {...params} label="Mesurement" name="mesu"/>
                  )}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Dimensions are an estimate / guess only"
                  name="kg"
                />
                <TextField
                  id="filled-number"
                  label="Weight, Kg"
                  name="wkgT"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Weight is an estimate / guess only"
                  name="gus"
                />
              </div>
              <div className="card">
                - Item Info -
                <TextField
                  id="filled-number"
                  label="Description"
                  type="number"
                  name="dpT"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                />
                <TextField
                  id="filled-number"
                  label="Height"
                  name="heiT"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                />
                <TextField
                  id="filled-number"
                  label="Length"
                  name="lenT"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                />
                <TextField
                  id="filled-number"
                  label="Width"
                  name="widT"
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
                  renderInput={(params) => (
                    <TextField {...params} label="Mesurement" name="mesuT"/>
                  )}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Dimensions are an estimate / guess only"
                  name="kgT"
                />
                <TextField
                  id="filled-number"
                  label="Weight, Kg"
                  name="wkgT"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Weight is an estimate / guess only"
                  name="gusT"
                />
              </div>
              </div>
            )}
          </div>
        ))}
      <div className="card">
        - Prefferd Delivery Day -
        <TextField
          id="filled-number"
          label="DD/MM/YY"
          name="dt"
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
            <TextField {...params} label="Property Type" name="ht"/>
          )}
        />
        <TextField
          id="input-with-sx"
          label="Pick-up Address"
          variant="standard"
          name="pa"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Outside Victoria/regional Victoria or different State"
          name="vr"
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

export default FewItem;

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
const moreItems = [
  {
    id: 1000,
    label: "Add 1st Item",
    
  },
  {
    id: 1001,
    label: "Add 2nd Item",
  },
  {
    id: 1002,
    label: "Add 3rd Item",
  },
  {
    id: 1003,
    label: "Add 4th Item",
  },
  {
    id: 1004,
    label: "Add 5th Item",
  },
];
