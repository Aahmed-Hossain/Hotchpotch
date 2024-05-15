"use client";
import Image from "next/image";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "../../../public/assests/Logo_Hotchpotch.png";
import Link from "next/link";
import ButtonOutline from "../shared/ButtonOutline";
import ButtonContained from "../shared/ButtonContained";

interface Props {
  window?: () => Window;
}

const drawerWidth = 160;
const navItems = ["Demos", "About", "Blog", "Pages", "Contact"];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", backgroundColor: "black", height: "100%" }}
    >
      <Typography
        variant="h6"
        sx={{ mt: 2, display: "flex", justifyContent: "center" }}
      >
        <Link href={"/"}>
          <Image src={logo} alt="logo" width={100} height={100} />
        </Link>
      </Typography>
      <Divider />
      <List >
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{display:'flex' ,justifyContent:'center', textAlign: "center", color: "white" }}>
              <Link className="hover:text-[#9C35FE]"href={item.toLowerCase()}>
                <ListItemText primary={item} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", backgroundColor: "black" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "black"}} >
        <Toolbar  sx={{ display: 'flex',
  justifyContent: 'space-between', backgroundColor: "", height: "60px" }}>
          {/* left mobile responsive icon and logo */}
<Box>
<IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Link href={"/"}>
              <Image src={logo} alt="logo" width={100} height={100} />
            </Link>
          </Typography>
</Box>
          {/* nav items for large screen */}


<Box
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            {navItems.map((item) => (
              <Link  key={item} href={item.toLowerCase()}>
                <Button className="hover:text-[#9C35FE]"  sx={{ color: "#fff" }}>{item}</Button>
              </Link>
            ))}
          </Box>
         
      {/* buttons */}
      <Box sx={{display: 'flex', flexDirection: 'row', gap: '5px'}}>
        <ButtonOutline>
          {"Sign In"}
        </ButtonOutline>
        <ButtonContained>
      {'Get Started Free'}
      </ButtonContained>
      </Box>

        </Toolbar>
      
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 0, background: "black" }}>
        <Toolbar />
        <Typography  sx={{ background: "black" }}>

        </Typography>
      </Box>
    </Box>
  );
}
