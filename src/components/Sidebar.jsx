import React, { useContext } from "react";
import { Box, List, ListItem, ListItemIcon, IconButton, Tooltip } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Sidebar = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const role = user?.role;

  if (!user) return null;

  const menuItems = role === "agent" ? [
    { icon: <HomeOutlinedIcon />, title: "Dashboard", to: "/dashboardAgent" },
    { icon: <BusinessOutlinedIcon />, title: "Entreprises", to: "/entreprisePage" },
    { icon: <ContactsOutlinedIcon />, title: "Contacts", to: "/contactPage" },
    { icon: <ReceiptOutlinedIcon />, title: "Tickets", to: "/ticket-form" },
  ] : role === "contact" ? [
    { icon: <HomeOutlinedIcon />, title: "Dashboard", to: "/dashboardContact" },
    { icon: <ReceiptOutlinedIcon />, title: "Tickets", to: "/ticket-form" },
  ] : [];

  return (
    <Box sx={{
      width: "110px",
      height: "100vh",
      backgroundColor: "#0A2540",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingTop: "20px",
    }}>
      <IconButton sx={{
        backgroundColor: "#1E3A5F",
        color: "#4CAF50",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        marginBottom: "20px",
      }}>
        {/* <HomeOutlinedIcon fontSize="large" /> */}
        {/* <img src="src\assets\logo1.jpg" alt="logo" style={{width: '50px', height: '50px'}} /> */}
      </IconButton>
      <List sx={{ width: "100%" }}>
        {menuItems.map((item, index) => (
          <Tooltip key={index} title={item.title} placement="right" arrow>
            <ListItem component="div" sx={{
              display: "flex",
              justifyContent: "center",
              padding: "15px 0",
              cursor: "pointer",
              "&:hover": { backgroundColor: "#1E3A5F" },
            }} onClick={() => navigate(item.to)}>
              <ListItemIcon sx={{ color: "#fff", minWidth: "unset" }}>
                {item.icon}
              </ListItemIcon>
            </ListItem>
          </Tooltip>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;

