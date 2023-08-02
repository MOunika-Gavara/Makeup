import { useState, useEffect } from "react";
import { Typography, Card, CardMedia } from "@mui/material";
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { useLocation } from "react-router";

const CartPage = () => {
    const location = useLocation();
    const cart = location.state.cart;

    const [cartTotal, setCartTotal] = useState(1);
    console.log(cart, "cartttttt")

    useEffect(() => {
        const total = () => {

            let sum = 0;
            for (let i = 0; i < cart.length; i++) {
                sum += parseFloat(cart[i].price);
            }

            console.log("Sum is " + sum)

            setCartTotal(sum);
        };
        total();
    }, [cart]);


    return (
        <div>
            <TableContainer style={{ marginTop: 150 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><strong>Items</strong></TableCell>
                            <TableCell><strong>Brand</strong></TableCell>
                            <TableCell><strong>Price</strong></TableCell>
                            <TableCell><strong>Name</strong></TableCell>
                            <TableCell><strong>SubTotal</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cart.map((c) => (
                            <TableRow key={c.id}>
                                <TableCell component="th" scope="row">
                                    <Card variant="outlined" style={{ width: 200 }} >
                                        <CardMedia
                                            className="image"
                                            sx={{ width: 200, height: 200, justifyItem: "center" }}
                                            component="img"
                                            image={c.image}
                                        />
                                    </Card>
                                </TableCell>
                                <TableCell><h3><strong>{c.brand}</strong></h3></TableCell>
                                <TableCell >{c.price}</TableCell>
                                <TableCell >{c.type}</TableCell>
                                <TableCell>{c.price}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                    <Typography style={{ textAlign:"center"}}>
                        <strong>Total: ${cartTotal}</strong>
                    </Typography>
               
            </TableContainer>
            </div>
    )
}
export default CartPage;