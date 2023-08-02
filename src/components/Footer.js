import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { Typography } from '@mui/material';

const footerList = [
    {
        icon: <LocalShippingOutlinedIcon />,
        name: "Free Shipping",
        text: "on orders above 299"
    },
    {
        icon: <KeyboardReturnIcon />,
        name: "Return",
        text: "15 day return policy"
    },
    {
        icon: <DoneOutlineIcon />,
        name: "100% Authentic",
        text: "products sourced directly"
    }
]
const Footer = () => {
    return (
        <div style={{ backgroundColor: "#f4e1d2",
         marginTop: 100, display: "flex", flexDirection: "row",justifyContent:"space-between" }}>
            {footerList.map((f) => (
                <div>
                    <Typography>
                        <strong>{f.icon}</strong>
                    </Typography>
                    <Typography >
                        <strong>{f.name}</strong>
                    </Typography>
                    <Typography>{f.text}</Typography>
                </div>
            ))}
        </div>
    )
}

export default Footer;

