import { useState } from "react";
import { Grid, Card, CardMedia, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import "./Brands.css";

const imageList = [
    {
        id: "1",
        image: "https://www.thesalenetwork.co.uk/blog/wp-content/uploads/2020/06/TSN_-_clinique.jpg",
        company: "Clinique",
        offer: "Up To 25% offer"
    },

    {
        id: "2",
        image: "https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-nyxcosmetics-us-Library/en_US/dw8d570fc2/homepage/2023-03-24-DTC-FRIENDS-FAMILY-D%20ASSETS-D3.jpg?sw=570&sh=570&sm=cut&sfrm=jpg&q=70",
        company: "NYX",
        offer: "Up To 20% offer"
    },
    {
        id: "3",
        image: "https://www.smashbox.com/media/images/products/388x396/sb_sku_C78G01_388x396_0.jpg",
        company: "Smashbox",
        offer: "Up To 50% offer"
    },
    {
        id: "4",
        image: "https://www.byrdie.com/thmb/P6kZwAWUQNMss8wi3E-arFudLzg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/benefitcosmeticsbrandguide-4980c237ab3641c9aeadf556b1dee6c4.jpg",
        company: "Benefit",
        offer: "Up To 30% offer"
    },
    {
        id: "5",
        image: "https://www.soco.id/cdn-cgi/image/w=700,format=auto,dpr=1.45/https://images.soco.id/159854f7-9a05-46af-8917-65185533b5e3-.jpg",
        company: "Loreal",
        offer: "Up To 40% offer"
    },
    {
        id: "6",
        image: "https://img.etimg.com/thumb/width-1200,height-900,imgsize-189454,resizemode-1,msid-83198662/industry/cons-products/fashion-/-cosmetics-/-jewellery/lakme-lever-sales-declined-19-slipped-into-losses-during-fy20-21.jpg",
        company: "Lakme",
        offer: "Up To 10% offer"
    },
    {
        id: "7",
        image: "https://assets.gadgets360cdn.com/pricee/assets/category/202006/og-banner-maybelline-1200x628_1591353201.jpg",
        company: "Maybelline",
        offer: "Up To 40% offer",
        path: "/maybelline"
    },
    {
        id: "8",
        image: "https://media.ulta.com/i/ulta/physicians-formula_bn_m?w=326",
        company: "Physicians Formula",
        offer: "Up To 25% offer"
    },
    {
        id: "9",
        image: "https://media.fashionnetwork.com/m/05c5/9de6/bd32/8bff/c182/ab97/b96d/7527/1194/c973/c973.jpg",
        company: "E.L.F",
        offer: "Up To 15% offer"
    }
]

const Brands = () => {
    const [currentFilter, setCurrentFilter] = useState(0);

    const length = imageList.length;

    const offSet = 3;
    const nextFilter = () => {
        setCurrentFilter(
            currentFilter === length - 1 - offSet ? 0 : currentFilter + 1
        );
    };

    const prevFilter = () => {
        setCurrentFilter(
            currentFilter === 0 ? length - 1 - offSet : currentFilter - 1
        );
    };
    console.log(currentFilter, "filterrrr");

    if (!Array.isArray(imageList) || imageList.length <= 0) {
        return null;
    }

    return (
        <div style={{ marginTop: 100 }}>
            <Typography variant="h5" style={{textAlign:"left"}}>
                <strong>Best In Beauty</strong></Typography>
            <List
                data={imageList.filter(
                    (d, i) => i > currentFilter && i <= currentFilter + offSet
                )}
            />
            <ArrowBackIosNewIcon onClick={prevFilter}>Pervious</ArrowBackIosNewIcon>
            <ArrowForwardIosIcon onClick={nextFilter}>next</ArrowForwardIosIcon>
        </div>
    );
};

function List({ data = [] }) {
    if (!data.length) return;
    return (
        <Grid style={{ display: "flex", flexDirection: "row", gridGap: 150, marginTop:20}}>
            {data.map((d, i) => (
                <Card>
                    <NavLink to={d.path}>
                        <CardMedia
                            sx={{ width: 350, height: 250, justifyItem: "center", filter: "brightness(90%)" }}
                            component="img"
                            image={d.image}
                        />
                    </NavLink>
                    <Typography>
                        <strong>{d.company}</strong>
                    </Typography>
                    <Typography>
                        {d.offer}
                    </Typography>
                </Card>
            ))}
        </Grid>
    );
}

export default Brands;