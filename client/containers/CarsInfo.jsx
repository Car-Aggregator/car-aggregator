import { Button } from "@mui/material";
import React from "react";
import { useState,useEffect } from "react";
import CarsList from "../Components/CarsList";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import { useLocation } from "react-router-dom";


export default function CarsInfo() {
  const [carsCom, setCarsCom] = useState([]);
  const [autoTrader, setAutoTrader] = useState([]);
  const [trueCar, setTrueCar] = useState([]);
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState(2022);
  const [zip, setZip] = useState(10001);
  const [user, setUser] = useState('');

  const updateMake = (e) => {
    setMake(e.target.value);
  };
  const updateYear = (e) => {
    setYear(e.target.value);
  };
  const updateModel = (e) => {
    setModel(e.target.value);
  };
  const updateZip = (e) => {
    setZip(e.target.value);
  };
  const location = useLocation();
  const userState = location.state.email;

  useEffect(() => {
    setUser(location.state.email)
  },[])

  const fetching = () => {
    // fetch(`/getcars/scrape/${make}/${model}/${year}/${zip}`)
    //   .then(response => response.json())
    //   .then(data => {
    //     setCarsCom(data.carsComData)
    //     setAutoTrader(data.autoTraderData)
    //     setTrueCar(data.trueCarData)
    //   })
    //   .catch(err => console.log(err))
    fetch(`/getcars/scrapeCarCom/${make}/${model}/${year}/${zip}`)
      .then((response) => response.json())
      .then((data) => {
        setCarsCom(data.carsComData);
      })
      .catch((err) => console.log(err));

    fetch(`/getcars/scrapePupAuto/${make}/${model}/${year}/${zip}`)
      .then((response) => response.json())
      .then((data) => {
        setAutoTrader(data.autoTraderData);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          margin: 2,
        }}
        noValidate
        autoComplete="off"
      >
        <>{user}</>
        <TextField
          onChange={updateMake}
          color="secondary"
          label="Make"
          variant="outlined"
        />
        <TextField
          onChange={updateModel}
          id="outlined-basic"
          label="Model"
          variant="outlined"
        />
        <TextField
          onChange={updateYear}
          id="outlined-basic"
          label="Minimum Year"
          variant="outlined"
        />
        <TextField
          onChange={updateZip}
          id="outlined-basic"
          label="Zip"
          variant="outlined"
        />
        <Button variant="contained" color="success" onClick={fetching}>
          Search
        </Button>
      </Box>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <CarsList carsArr={carsCom} name={"Cars.com"} />
        <CarsList carsArr={autoTrader} name={"AutoTrader"} />
        <CarsList carsArr={trueCar} name={"True Car"} />
      </div>
    </>
  );
}
