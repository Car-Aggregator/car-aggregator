import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListSubheader from '@mui/material/ListSubheader';
import CarsCard from './CarsCard';
import Typography from '@mui/material/Typography';
import { useLocation } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from 'axios';
import CarsList from "../Components/CarsList";



export default function Favorites (props) {
//   const [user, setUser] = useState('');
    const [list, setList] = useState(null);
//   const location = useLocation();
//   const userState = location.state.email;
  useEffect(() => {
      console.log('component did mount')
    const email = 'alex@test.com'
  axios.post('/favorites', {
      email
  }).then(res => {
    setList(res.data)
  })
    //setUser(location.state.email)
  },[])
  if(list !== null) {
    return(<div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <CarsList carsArr={list} name={"Favorites"} />
      </div>)
  }
    return(<div
    style={{
      display: "flex",
      justifyContent: "space-evenly",
    }}
  >
    <p>HELLO</p>
  </div>)
}