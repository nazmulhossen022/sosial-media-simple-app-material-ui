import { Mail, Notifications,Pets } from '@mui/icons-material';
import { AppBar, Avatar, Badge, Box, IconButton, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'

const StyleToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
});
const Search = styled("div")(({theme})=>({
    backgroundColor:"white",
    padding:"0 10px",
    borderRadius: theme.shape.borderRadius,
    width:"40%",
}));
const UserIcons = styled(Box)(({theme})=>({
    display:"flex",
    alignItems:"center",
    gap:"20px",
}))

const Navbar = () => {
    const[openUser, setOpenUser] = useState(false);
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
  return (
    <AppBar>
      <StyleToolbar>
       <Typography variant="h6" sx={{display:{xs:"none", sm:"block"}}}>
        NAzmul Hosssen
        </Typography>
        <Pets sx={{display:{xs:"block", sm:"none"}}} />
        <Search>
        <InputBase placeholder="search..." />
        </Search>
        <UserIcons>
            <IconButton aria-label="show 4 new notifications" color="inherit" sx={{display:{xs:"none", md:"block"}}}>
                <Badge badgeContent={4} color="error">
                    <Mail />
                </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit" sx={{display:{xs:"none", md:"block"}}}>
                <Badge badgeContent={17} color="error">
                <Notifications />
                </Badge>
            </IconButton>
            <IconButton onClick={()=>setOpenUser(!openUser)} sx={{ p: 0 }}>
                    <Avatar alt="Login Image" src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
            </IconButton>
            <Menu
              sx={{ mt: '-10px' }}
              id="menu-appbar"
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={openUser}
              onClose={()=>setOpenUser(!openUser)}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={()=>setOpenUser(!openUser)}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
        </UserIcons>
      </StyleToolbar>
    </AppBar>
  )
}

export default Navbar
