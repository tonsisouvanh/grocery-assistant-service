import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
function ProCard({ name, price, img, cloundinaryUrl }) {

  const formatting = (value) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "VND",
    });
  };

  return (
    <Card sx={{ maxWidth: 245 }}>
      <CardMedia
        style={{objectFit: "cover" }}
        component="img"
        height="200"
        image={cloundinaryUrl + img}
        alt="green iguana"
      />
      <CardContent>
        <Typography style={{fontSize: '1.2rem'}} gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography style={{fontSize: '1.2rem'}} variant="body2" color="text.secondary">
          {formatting(price)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Thêm</Button>
        <Button size="small">Xem</Button>
      </CardActions>
    </Card>
  );
}

export default ProCard;
