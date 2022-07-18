import React from "react";
import { AppBar, Container, Toolbar, Typography, IconButton, Box } from "@mui/material";
import icon from "../imgs/icon.png"

export default function Navbar(){
    return(
        <Box sx={{ flexGrow: 1}}>
            <AppBar position="static" sx={{backgroundColor: "#FDF3C0"}}>
                <Toolbar>
                    <IconButton
                        size="small"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr:2}}
                    >
                        <img height="75px" src={icon} alt="icon"/>
                    </IconButton>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'black',
                        textDecoration: 'none',
                        }}
                    >
                        HOWDY HO!
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}