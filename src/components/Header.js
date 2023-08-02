import { AppBar, Toolbar, Typography, ListItemButton} from "@mui/material";
import { NavLink } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const shopList = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Category",
        path: "/category"
    },
    {
        name: "Brands",
        path: "/brands"
    }
]

const Header = ({ children }) => {

    return (
        <div>
            <AppBar className="appbar"
                style={{ backgroundColor: "#50394c" }}
                position="fixed">
                <Toolbar>
                    <Typography>
                        <strong>App</strong>
                    </Typography>
                    {shopList.map((s) => (
                        <NavLink className="link" to={s.path}>
                            <ListItemButton>
                                <strong>{s.name}</strong>
                            </ListItemButton>
                        </NavLink>
                    ))}
                    <div style={{display:"flex",flexDirection:"row",marginLeft:300}}>
                    <AccountCircleIcon />
                    <Typography>Add your Account</Typography>
                    </div>
                </Toolbar>
            </AppBar>
            <main>{children}</main>

        </div>
    )
}
export default Header;