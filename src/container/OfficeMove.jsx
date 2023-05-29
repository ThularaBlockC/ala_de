import React, {  useState,useRef } from "react";
import emailjs from '@emailjs/browser';
import "./Impo.scss";
import {
  FormHelperText,
  TextField,
  Checkbox,
  FormControlLabel,
  Autocomplete,
  InputAdornment,
  FormControl,
  FilledInput,
  Button,
} from "@mui/material";


const OfficeMove = () => {
  const form = useRef();
  const [notificationMessage, setNotificationMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_*****', 'template_*****', form.current, '-**********')
      .then((result) => {
          setNotificationMessage("Email sent. We'll contact you with your quotation.");
        document.querySelector(".notification").classList.add("show");
      }, (error) => {
      });
  };
  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
      <div className="title">
        <h2>Office Move</h2>
        </div>
      <div>
        <div className="card">
          - Board Room -
          <table>
            <FormControl sx={{ m: 1, width: "25ch" }}>
              
              <tr>
                <td>
                <TextField
            id="filled-number"
            label="Board Room Table Qty"
            type="number"
            name="brtw"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
                </td>
              </tr>
              <br />
              
              <tr>
                <td>
                <TextField
            id="filled-number"
            label="Boardroom Chair Qty"
            type="number"
            name="bctw"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
                </td>
              </tr>
            </FormControl>
          </table>
        </div>
        <div className="card">
          - Office Room -
          <TextField
            id="filled-number"
            label="Office Chair"
            type="number"
            name="oc"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
          <TextField
            id="filled-number"
            label="Office Table"
            type="number"
            name="ot"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
        
        
          <table>
            <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
              <tr>
                <td>
                  <TextField
                    id="filled-number"
                    label="Bookshelf"
                    name="bk"
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="filled"
                  /> 
                </td>
                <td>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={mesurement}
                    getOptionLabel={(option) => option.type}
                    sx={{ width: 150 }}
                    renderInput={(params) => (
                      <TextField {...params} label="Mesurement" name="mesu"/>
                    )}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <FilledInput
                    id="filled-adornment-weight"
                    name="len"
                    endAdornment={
                      <InputAdornment position="end"></InputAdornment>
                    }
                    aria-describedby="filled-weight-helper-text"
                    inputProps={{
                      "aria-label": "weight",
                    }}
                  />
                  <FormHelperText id="filled-weight-helper-text">
                    Length
                  </FormHelperText>
                </td>
                <td>
                  <FilledInput
                    id="filled-adornment-weight"
                    name="wid"
                    endAdornment={
                      <InputAdornment position="end"></InputAdornment>
                    }
                    aria-describedby="filled-weight-helper-text"
                    inputProps={{
                      "aria-label": "weight",
                    }}
                  />
                  <FormHelperText id="filled-weight-helper-text">
                    Width
                  </FormHelperText>
                </td>
                <td>
                  <FilledInput
                    id="filled-adornment-weight"
                    name="hei"
                    endAdornment={
                      <InputAdornment position="end"></InputAdornment>
                    }
                    aria-describedby="filled-weight-helper-text"
                    inputProps={{
                      "aria-label": "weight",
                    }}
                  />
                  <FormHelperText id="filled-weight-helper-text">
                    Height
                  </FormHelperText>
                </td>
              </tr>
            </FormControl>
          </table>
          </div>

          <div className="card"> -  Other Items -
          <TextField
            id="filled-number"
            label="Cupboards"
            type="number"
            name="cb"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
          <TextField
            id="filled-number"
            label="Printer & Photocopy Matchine"
            type="number"
            name="pm"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
          <TextField
            id="filled-number"
            label="Computers"
            type="number"
            name="cp"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
          <TextField
            id="filled-number"
            label="Monitors"
            type="number"
            name="mo"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
          <TextField
            id="filled-multiline-static"
            label="Additional Items"
            name="aItm"
            multiline
            rows={4}
            defaultValue=" "
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
            control={<Checkbox defaultChecked />}
            label="Outside Victoria/regional Victoria or different State"
            name="vr"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Property has Parking Restrictions"
            name="pr"
          />
        </div>
        <div className="card">
        - Prefferd Delivery Day -
        <TextField
          id="filled-number"
          label="DD/MM/YY"
          type=""
          name="dt"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
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
              <TextField {...params} label="Property Type" name="dht"/>
            )}
          />
          <TextField
            id="input-with-sx"
            label="Drop-off Address"
            variant="standard"
            name="dpa"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Outside Victoria/regional Victoria or different State"
            name="dvr"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Property has Parking Restrictions"
            name="dpr"
          />
        </div>
        <div className="card">
          {" "}
          - Your Information -
          <TextField
            id="standard-basic"
            label="First & Last Name"
            variant="standard"
            name="name"
          />
          <TextField
            id="standard-basic"
            label="Contact Number"
            variant="standard"
            name="num"
          />
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
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
        
      </div>
      
          
      </form>
      
    </div>
  );
};

export default OfficeMove;

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
    type: "Single storey building",
  },
  {
    id: 2,
    type: "Double storey building",
  },
  {
    id: 3,
    type: "Triple story building",
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
    type: "Town House building",
  },
];
