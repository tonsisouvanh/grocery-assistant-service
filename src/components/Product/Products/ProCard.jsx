import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 245 }}>
      <CardMedia
        component="img"
        height="180"
        image="https://filebroker-cdn.lazada.vn/kf/S7eb9bd0ab41b477b8f752549595b2db4z.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Banh snack
        </Typography>
        <Typography variant="body2" color="text.secondary">
          6000 vnd
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Thêm</Button>
        <Button size="small">Xem</Button>
      </CardActions>
    </Card>
  );
}