import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import axios from 'axios';

export default function CarsCard(props) {
  const [id, setId] = useState(0);
  console.log('props: ', props);

  function addFavorite() {
    const url = '/favorites/addfavorite';
    const sendData = {
      email: props.userState,
      date: props.carObj.date,
      image: props.carObj.image,
      make: props.carObj.make,
      mileage: props.carObj.mileage,
      model: props.carObj.model,
      price: props.carObj.price,
      url: props.carObj.url,
      year: props.carObj.year,
      zip: props.carObj.zip
    }
    axios.post(url, sendData).then(res => {
      useEffect(() => {
        setId(res.data);
      })
    })
  }

  return (
    <Card sx={{ maxWidth: 450 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={props.carObj.image ? props.carObj.image : "https://static.wikia.nocookie.net/0b6408dc-ead8-42d9-a639-94068519d635/scale-to-width/755"}
          alt="car photo"
        />
        <CardContent sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridTemplateRows: 'repeat(4,1fr)',
          alignItems: 'center',
          justifyItems: 'space-arond',
          columnGap: 4
        }}>
          <Typography
            sx={{
              gridColumn: '1/2',
              gridRow: '1/4',
            }}
            gutterBottom variant="h4" component="div">
            {/* {console.log('car make', props.carObj.make)} */}
            {`${props.carObj.make.charAt(0).toUpperCase() + props.carObj.make.slice(1)} ${props.carObj.model.charAt(0).toUpperCase() + props.carObj.model.slice(1)}`}
          </Typography>
          <Typography sx={{
            gridColumn: '2/3',
            gridRow: '1/2'
          }}
            variant="h5" color="text.secondary">
            {`$${props.carObj.price}`}
          </Typography>
          <Typography
            sx={{
              gridColumn: '2/3',
              gridRow: '2/3'
            }}
            variant="body2" color="text.secondary">
            {`${props.carObj.mileage} mileage`}
          </Typography>
          <Typography
            sx={{
              gridColumn: '2/3',
              gridRow: '3/4'
            }}
            variant="body2" color="text.secondary">
            {`Year: ${props.carObj.year}`}
          </Typography>
          <Typography
            sx={{
              gridColumn: '2/3',
              gridRow: '4/5'
            }}
            variant="body2" color="text.secondary">
            {`ZIP: ${props.carObj.zip}`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className='buttonContainer'>
        <div className='buttonWrapper'>
        <Button size="small" color="primary">
          <a href={`https://www.${props.carObj.url}`} target="_blank" rel="noreferrer noopener">Check in the website</a>
        </Button>
        <Button
          className='favoriteButton'
          id={id}
          onClick={addFavorite}
        >
          Favorite
        </Button>
        </div>
      </CardActions>
    </Card>
  );
}
