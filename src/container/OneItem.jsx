import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import "./Impo.scss";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Autocomplete,
  Button,
} from "@mui/material";

const OneItem = () => {
  const form = useRef();
  const [notificationMessage, setNotificationMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_kv1p8xn', 'template_v1u2wpr', form.current, '-qVah-6ICODdS9FTo')
      .then((result) => {
        console.log(result.text);
        setNotificationMessage("Email sent. We'll contact you with your quotation.");
        document.querySelector(".notification").classList.add("show");
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="title">
          <h2>One Item</h2>
        </div>
        <div className="card"> - Item Info -
          <TextField
            id="filled-number"
            label="Description"
            type="text"
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
            renderInput={(params) => <TextField {...params} label="Mesurement" name="mesu" />}
          />
          <FormControlLabel control={<Checkbox />} label="Dimensions are an estimate / guess only" name="kg" />
          <TextField
            id="filled-number"
            label="Weight, Kg"
            name="wkg"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
          <FormControlLabel control={<Checkbox />} label="Weight is an estimate / guess only" name="gus" />
        </div>
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
              <TextField {...params} label="Property Type" name="ht" />
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
            name="pr"
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
              <TextField {...params} label="Property Type" name="dht" />
            )}
          />
          <TextField
            id="input-with-sx"
            label="Drop-off Address"
            variant="standard"
            name="dpa"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Outside Victoria/regional Victoria or different State"
            name="dvr"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Property has Parking Restrictions"
            name="dpr"
          />
        </div>
        <div className="card">
          - Your Information -
          <TextField
            id="standard-basic"
            label="First & Last Name"
            variant="standard"
            name="name"
            required
          />
          <TextField
            id="standard-basic"
            label="Contact Number"
            variant="standard"
            name="num"
            required
          />
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            required
            name="email"
          />
          <Button variant="outlined" type="submit" value="Send">
            Submit
          </Button>
          <br></br>
          <div>
            <div className="notification">{notificationMessage}</div>
          </div>
        </div>
      </form>
      
    </div>
  );
};

export default OneItem;
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
