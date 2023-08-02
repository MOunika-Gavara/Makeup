import { Grid, CardMedia, Card, Typography,Button } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";


const Lipsticks = () => {
    const [data, setData] = useState([]);
    const [count, setCount] = useState(0);
    const [cart, setCart] = useState([]);
    const makeupList = [];

    const addToCart = id => {
        setCart((currentCart) => [...currentCart, id]);
        setCount(count + 1)
    };

    useEffect(() => {
        let urls = [
            "http://makeup-api.herokuapp.com/api/v1/products.json"
        ]
        const requests = urls.map((url) => axios.get(url));
        axios.all(requests).then((responses) => {
            responses.forEach((resp) => {
                console.log(resp.data, "response");
                setData(resp.data);
            })
        }).catch((error) => {
            console.error(error);
        });

    }, []);
    console.log(data, "dataaaaa");

    const handleScroll = () => {
        const element = document.getElementById("lipsticks");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }
    data.map((d) => (
        makeupList.push({
            id: d.id,
            brand: d.brand,
            image: d.image_link,
            price: d.price,
            type: d.product_type,
        })
    ))

    return (
        <div>
            <Grid
                id="lipsticks"
                container
                sx={{ marginTop: 10 }}>
                {makeupList.map((l) => (
                    <div style={{ padding: "1rem", marginTop: 50 }} key={l.id}>
                        <div style={{ padding: "1rem", marginLeft: 100 }}>
                            <Card variant="outlined" sx={{ width: 250 }} >
                                <CardMedia
                                    sx={{ width: 200, height: 200, justifyItem: "center" }}
                                    component="img"
                                    image={l.image}
                                    onClick={handleScroll}
                                />
                            </Card>
                            <div style={{ display: "inline" }}>
                                <Typography variant="h6">{l.brand}</Typography>
                                <Typography variant="h6">${l.price}</Typography>
                                <Typography variant="h6">{l.type}</Typography>
                            </div>
                            <Button
                                style={{ backgroundColor: "#50394c", color: "white" }}
                                onClick={() => addToCart(l)}>Add to cart</Button>
                        </div>
                    </div>
                ))}
            </Grid>
        </div >
    )
}
export default Lipsticks;