import { Typography, Card, CardMedia, Button, Grid } from "@mui/material";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import Rating from '@mui/material/Rating';
import "./BuyNow.css";

const BuyNow = () => {
    const location = useLocation();
    const prodDetails = location.state.prodDetails;
    console.log(prodDetails.rating, "listtttt");


    return (
        <div>
            <Grid style={{ marginTop: 150, marginLeft: 150 }}>
                <Card style={{ height: "100%", width: 250, float: "left" }}>
                    <CardMedia
                        className="image"
                        style={{ backgroundColor: "pink" }}
                        sx={{ width: 250, height: 250, display: "flex", }}
                        component="img"
                        image={prodDetails.image}
                    ></CardMedia>
                    <div>
                        <Typography>
                            <strong>{prodDetails.type}</strong>
                        </Typography>
                    </div>
                </Card>
                <div className="text">
                    <Typography variant="h5" className="brand">
                        <strong>{prodDetails.brand}</strong>
                    </Typography>
                    <Typography className="word">
                        <strong>Description:</strong>
                        {prodDetails.description}
                    </Typography>
                    <Rating name="half-rating-read" precision={0.5} value={prodDetails.rating} readOnly></Rating>
                    <div>
                        <Typography>
                            <strong>Total:$</strong>
                            {prodDetails.price}
                        </Typography>
                        <NavLink to="/payment">
                            <Button variant="contained" style={{ backgroundColor: "#50394c" }}>Proceed to buy</Button>
                        </NavLink>
                    </div>
                </div>
            </Grid>
        </div>
    )
}
export default BuyNow;