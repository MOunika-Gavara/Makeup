import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Grid, Card, CardMedia, Button, Badge, TextField } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import maybelline1 from "../images/maybelline1.avif";
import Rating from '@mui/material/Rating';
import axios from "axios";

const Maybelline = () => {
    const [data, setData] = useState([]);
    const [count, setCount] = useState(0);
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState("");
    const [searchProducts, setSearchProducts] = useState([]);
    const makeupList = [];

    const addToCart = id => {
        setCart((currentCart) => [...currentCart, id]);
        setCount(count + 1)
    };
    console.log(cart, "cartt");


    useEffect(() => {
        axios({
            method: 'GET',
            url: "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
        }).then((response) => {
            console.log(response.data);
            setData(response.data);
        }).catch((error) => {
            console.error(error);
        });

    }, []);
    data.map((d) => (
        makeupList.push({
            id: d.id,
            brand: d.brand,
            image: d.image_link,
            price: d.price,
            type: d.product_type,
            description: d.description,
            rating: d.rating
        })
    ))

    const searchedProduct = (event) => {
        setProducts(event.target.value)
        if(event.target.value !== ""){
            const filteredProduct = makeupList.filter((m)=>{
                return Object.values(m).join("").toLowerCase().includes(event.target.value.toLowerCase());
            })
            setSearchProducts(filteredProduct);
        }
        else{
            setSearchProducts(makeupList);
        }
    }

    return (
        <div>
            <AppBar style={{ backgroundColor: "#50394c" }}>
                <Toolbar>
                    <Typography>
                        <strong>Maybelline</strong>
                    </Typography>
                    <Link to={{ pathname: '/cart' }}
                        state={{ cart: cart }}
                        style={{
                            color: "white",
                            marginLeft: 1000

                        }}>
                        <Badge color="secondary" badgeContent={count} >
                            <ShoppingCartIcon />
                        </Badge>
                    </Link>
                </Toolbar>
            </AppBar>
            <div >
            <TextField 
            value={products}
            placeholder="search for products,brands or categories....."
            style={{marginTop:100,width:400}}
            onChange={searchedProduct}></TextField>
                {!products && <img
                    className="img"
                    style={{ marginTop: 60, width: "100%", height: 300 }}
                    src={maybelline1}
                    alt="maybelline">
                </img>}
            </div>
            <Grid
                container
                sx={{ marginTop: 10 }}>
                {products.length > 1 ? searchProducts.map((l) => (
                    <div style={{ padding: "1rem", marginTop: 50 }} key={l.id}>
                        <div style={{ padding: "1rem", marginLeft: 100 }}>
                          
                                <Link to={{ pathname: "/buy" }}
                                    state={{ prodDetails: l }}><CardMedia
                                        sx={{ width: 200, height: 200, justifyItem: "center" }}
                                        component="img"
                                        image={l.image}
                                    />
                                </Link>
                            
                            <div style={{ display: "inline" }}>
                                <Typography variant="h6">
                                    <strong>{l.brand}</strong></Typography>
                                <Typography variant="h6">${l.price}</Typography>
                                <Typography variant="h6">{l.type}</Typography>
                                <Rating name="half-rating-read" precision={0.5} value={l.rating} readOnly />
                            </div>
                            <div>
                            <Button
                                style={{ backgroundColor: "#50394c", color: "white" }}
                                onClick={() => addToCart(l)}>Add to cart</Button>
                                </div>
                        </div>
                    </div>
                )): (makeupList.map((l) => (
                    <div style={{ padding: "1rem", marginTop: 50 }} key={l.id}>
                        <div style={{ padding: "1rem", marginLeft: 100 }}>
                            <Card variant="outlined" sx={{ width: 250 }} >
                                <Link to={{ pathname: "/buy" }}
                                    state={{ prodDetails: l }}><CardMedia
                                        sx={{ width: 200, height: 200, justifyItem: "center" }}
                                        component="img"
                                        image={l.image}
                                    />
                                </Link>
                            </Card>
                            <div style={{ display: "inline" }}>
                                <Typography variant="h6" style={{textTransform:"capitalize"}}>
                                    <strong>{l.brand}</strong>
                                    </Typography>
                                <Typography variant="h6">${l.price}</Typography>
                                <Typography variant="h6">{l.type}</Typography>
                            <Rating name="half-rating-read" precision={0.5} value={l.rating} readOnly />
                            </div>
                            <div>
                            <Button
                                style={{ backgroundColor: "#50394c", color: "white" }}
                                onClick={() => addToCart(l)}>Add to cart</Button>
                                </div>
                        </div>
                        </div>
                )))
                }

            </Grid>
        </div>
    )
}

export default Maybelline;