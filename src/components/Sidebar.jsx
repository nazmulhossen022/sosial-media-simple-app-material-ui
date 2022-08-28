import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import {
    AccountBox,
    Article,
    Group,
    Home,
    ModeNight,
    Person,
    Settings,
    Storefront,
  } from "@mui/icons-material";
import React from 'react'

const Sidebar = ({mode,setMode}) => {
  return (
    <Box flex={{sm:1,md:2,lg:1}} p={2} sx={{display:{xs:"none",md:"flex"}}}>
      <Box position="fixed">
        <List>
            <ListItem disablePadding>
                <ListItemButton component="a" href="#home">
                    <ListItemIcon><Home/></ListItemIcon>
                    <ListItemText primary="HomePage"></ListItemText>
                </ListItemButton>
            </ListItem>
        </List>
        <List>
            <ListItem disablePadding>
                <ListItemButton component="a" href="#home">
                    <ListItemIcon><Article /></ListItemIcon>
                    <ListItemText primary="Page"></ListItemText>
                </ListItemButton>
            </ListItem>
        </List>
        <List>
            <ListItem disablePadding>
                <ListItemButton component="a" href="#home">
                    <ListItemIcon><Group /></ListItemIcon>
                    <ListItemText primary="Groups"></ListItemText>
                </ListItemButton>
            </ListItem>
        </List>
        <List>
            <ListItem disablePadding>
                <ListItemButton component="a" href="#home">
                    <ListItemIcon><Storefront /></ListItemIcon>
                    <ListItemText primary="Marketplace"></ListItemText>
                </ListItemButton>
            </ListItem>
        </List>
        <List>
            <ListItem disablePadding>
                <ListItemButton component="a" href="#home">
                    <ListItemIcon><Person  /></ListItemIcon>
                    <ListItemText primary="Friends"></ListItemText>
                </ListItemButton>
            </ListItem>
        </List>
        <List>
            <ListItem disablePadding>
                <ListItemButton component="a" href="#home">
                    <ListItemIcon><Settings /></ListItemIcon>
                    <ListItemText primary="Settings"></ListItemText>
                </ListItemButton>
            </ListItem>
        </List>
        <List>
            <ListItem disablePadding>
                <ListItemButton component="a" href="#home">
                    <ListItemIcon><AccountBox /></ListItemIcon>
                    <ListItemText primary="Portfolio"></ListItemText>
                </ListItemButton>
            </ListItem>
        </List>
        <List>
            <ListItem disablePadding>
                <ListItemButton component="a" href="#home">
                    <ListItemIcon><ModeNight /></ListItemIcon>
                    <Switch onChange={()=>setMode(mode === "light" ? "dark" : "light")} />
                </ListItemButton>
            </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Sidebar