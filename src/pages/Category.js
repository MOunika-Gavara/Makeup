import { useState, useEffect } from "react";
import { Typography, Card, CardMedia, Grid, TextField } from "@mui/material";
import { db } from "../Firebase";
import { collection, query, onSnapshot } from "firebase/firestore";



const Category = () => {
    const [category, setCategory] = useState([]);
    //const [search, setSearch] = useState("");
    const list = [];

    useEffect(() => {

        const q = query(collection(db, 'products'));

        const unsub = onSnapshot(q, (querySnapshot) => {
            let categoryList = [];
            querySnapshot.forEach((doc) => {
                categoryList.push({ ...doc.data(), id: doc.id });
            });
            setCategory(categoryList);
        });
        return () => unsub();
    }, []);
    category.map((l) => (
        list.push({
            skincare: l.skincare,
            perfume: l.perfume,
            hairproduct: l.hairproduct,
        })
    ))

    console.log(list, "lili")

    // const searchedCategories = (event) => {
    //     setSearch(event.target.value)

    //     if (event.target.value !== "") {
    //         const filteredCategory = list.filter((l) => {
    //             return Object
    //                 .values(l)
    //                 .join("")
    //                 .toLowerCase()
    //                 .includes(event.target.value.toLowerCase())
    //         })
    //         setSearchCategories(filteredCategory);
    //     }
    //     else {
    //         setSearchCategories(list)
    //     }
    // }
    return (
        <div>
            <TextField
                placeholder="search for categories....."
                style={{ marginTop: 100, width: 400 }}></TextField>
            <Grid
                container>
                <Typography
                    variant="h5"
                    style={{ marginTop: 100, color: "#50394c" }}>
                    <strong>SkinCare</strong>
                </Typography>
                {list.map((s) => (
                    <div style={{ padding: "1rem", marginLeft: 90, display: "flex", flexDirection: "row", gridGap: 80, marginTop: 150 }}>
                        <Card variant="outlined" sx={{ width: 250 }} >
                            <CardMedia
                                sx={{ width: 250, height: 250, justifyItem: "center" }}
                                component="img"
                                image={s.skincare}
                            />
                        </Card>
                    </div>
                ))}
                <Typography
                    variant="h5"
                    style={{ marginTop: 100, color: "#50394c" }}>
                    <strong>Perfumes</strong>
                </Typography>
                {list.map((c) => (
                    <div style={{ padding: "1rem", marginLeft: 90, display: "flex", flexDirection: "row", gridGap: 80, marginTop: 150 }}>
                        <Card variant="outlined" sx={{ width: 250 }} >
                            <CardMedia
                                sx={{ width: 250, height: 250, justifyItem: "center" }}
                                component="img"
                                image={c.perfume}
                            />
                        </Card>
                    </div>
                ))}
                <div>
                    <Typography
                        variant="h5"
                        style={{ marginTop: 100, color: "#50394c" }}>
                        <strong>Hair</strong>
                    </Typography>
                </div>
                {list.map((h) => (
                    <div style={{ padding: "1rem", marginLeft: 100, display: "flex", flexDirection: "row", gridGap: 80, marginTop: 150 }}>
                        <Card variant="outlined" sx={{ width: 250 }} >
                            <CardMedia
                                sx={{ width: 250, height: 250, justifyItem: "center" }}
                                component="img"
                                image={h.hairproduct}
                            />
                        </Card>
                    </div>
                ))}
            </Grid>
        </div>
    )
}
export default Category;