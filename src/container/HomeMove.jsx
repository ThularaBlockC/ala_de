import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import "./Impo.scss";
import {
  TextField,
  Checkbox,
  FormControl,
  FormControlLabel,
  Autocomplete,
  FormHelperText,
  InputAdornment,
  FilledInput,
  Button
} from "@mui/material";

const HomeMove = () => {
  const form = useRef();
  const [notificationMessage, setNotificationMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_kv1p8xn', 'template_98sh4zw', form.current, '-qVah-6ICODdS9FTo')
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
          <h2>Home Move</h2>
        </div>
        <div className="card" name="HomeMove">
          - Living Room -
          <br />
          <table>
            <FormControl sx={{ m: 1, width: "25ch" }}>
              Sofa Set or Lunge Set Qty
              <tr>
                <td>
                  <TextField
                    id="filled-number"
                    label="1 Seater"
                    type="number"
                    name="one"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="filled"
                  />
                </td>
                <td>
                  <TextField
                    id="filled-number"
                    label="2 Seater"
                    type="number"
                    name="two"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="filled"
                  />
                </td>
                <td>
                  <TextField
                    id="filled-number"
                    label="3 Seater"
                    type="number"
                    name="three"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="filled"
                  />
                </td>
              </tr>
              <br />
              Dinning Table Qty
              <tr>
                <td>
                  <TextField
                    id="filled-number"
                    label="GlassTop"
                    type="number"
                    name="glassTop"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="filled"
                  />
                </td>
                <td>
                  <TextField
                    id="filled-number"
                    label="WoodTop "
                    type="number"
                    name="woodTop"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="filled"
                  />
                </td>
                <td>
                  <TextField
                    id="filled-number"
                    label="MarbelTop"
                    type="number"
                    name="marbelTop"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="filled"
                  />
                </td>
                <td></td>
              </tr>
              <br />
             

              
              <tr>
                <td>
                <TextField
            id="filled-number"
            label=" Chair Qty"
            type="number"
            name="twel"
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
                    label="Tv Size"
                    type="number"
                    name="tvsize"
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
                      <TextField {...params} label="Measurement" name="mes" />
                    )}
                  />
                </td>
              </tr>
            </FormControl>
          </table>
          <TextField
            id="filled-number"
            label="Tv Unit Qty"
            type="number"
            name="tvq"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
          <TextField
            id="filled-number"
            label="Coffe Table Qty"
            type="number"
            name="cofq"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
        </div>
        <div className="card">
          {" "}
          - Office Room -
          <TextField
            id="filled-number"
            label="Executive Office Chair"
            type="number"
            name="exchair"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
          <TextField
            id="filled-number"
            label="Executive Office Table"
            type="number"
            name="ext"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
          <TextField
            id="filled-number"
            label="Cupboard"
            type="number"
            name="cup"
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
                    type="number"
                    name="bk"
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
                      <TextField {...params} label="Mesurement" name="mesu" />
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
        <div className="card">
          - Rooms -
          <TextField
            id="filled-number"
            label="Bedroom Count"
            type="number"
            name="brc"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
          <TextField
            id="filled-number"
            label="Bed Bases"
            type="number"
            name="bd"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
          <TextField
            id="filled-number"
            label="Bed Frames"
            type="number"
            name="fm"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
          <TextField
            id="filled-number"
            label="Bed Mattresses"
            type="number"
            name="mt"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
          <TextField
            id="filled-number"
            label="Bedside Tables"
            type="number"
            name="bt"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
          <TextField
            id="filled-number"
            label="Dressing Table with Mirrors"
            type="number"
            name="dm"
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
                    label="Mirror"
                    type="number"
                    name="miro"
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
                      <TextField {...params} label="Mesurement" name="mesure" />
                    )}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <FilledInput
                    id="filled-adornment-weight"
                    name="mlen"
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
                    name="mwid"
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
                    name="mhei"
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
              <br />
              <tr>
                <td>
                  <TextField
                    id="filled-number"
                    label="Tollboy"
                    type="number"
                    name="tob"
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
                      <TextField {...params} label="Mesurement" name="tmes" />
                    )}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <FilledInput
                    id="filled-adornment-weight"
                    name="tlen"
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
                    name="twid"
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
                    name="thei"
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

        <div className="card">
          - Kitchen Area-
          <table>
            <FormControl sx={{ m: 1, width: "25ch" }}>
              <tr>
                <td>
                  <TextField
                    id="filled-number"
                    label="Firdge"
                    type="number"
                    name="fri"
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
                    options={door}
                    getOptionLabel={(option) => option.type}
                    sx={{ width: 150 }}
                    renderInput={(params) => (
                      <TextField {...params} label="Door" name="dr" />
                    )}
                  />
                </td>
              </tr>
            </FormControl>
          </table>
          <TextField
            id="filled-number"
            label="Dryer"
            type="number"
            name="dry"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
          <TextField
            id="filled-number"
            label="Washing Machine"
            type="number"
            name="wm"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
        </div>
        <div className="card">
          - Boxes & Other -
          <TextField
            id="filled-number"
            label="Large Size Boxes"
            type="number"
            name="lb"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
          <TextField
            id="filled-number"
            label="Medium Size Boxes"
            type="number"
            name="mb"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
          <TextField
            id="filled-number"
            label="Small Size Boxes"
            type="number"
            name="sb"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
          <TextField
            id="filled-multiline-static"
            label="Additional Items"
            name="aItm"
            multiline rows={4}
            defaultValue=" "
            variant="filled"
          />
        </div>
        <div className="card">
          {" "}
          - Outdoor Area -
          <FormControlLabel control={<Checkbox />} label="Bicycle" name="bic" />
          <FormControlLabel control={<Checkbox />} label="BBQ" name="bbq" />
          <FormControlLabel control={<Checkbox />} label="Tredmils" name="trd" />
        </div>
        <div className="card">
          - Prefferd Delivery Day -
          <TextField
            id="filled-number"
            label="DD/MM/YY"
            type="number"
            name="dt"
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
            name="pa"
            variant="standard"
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
            name="dpa"
            variant="standard"
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
            name="name"
            variant="standard"
          />
          <TextField
            id="standard-basic"
            label="Contact Number"
            name="num"
            variant="standard"
          />
          <TextField
            id="standard-basic"
            label="Email"
            name="email"
            variant="standard"
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

export default HomeMove;

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

const door = [
  {
    id: 1,
    type: "2",
  },
  {
    id: 1,
    type: "3",
  },
  {
    id: 3,
    type: "4",
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
