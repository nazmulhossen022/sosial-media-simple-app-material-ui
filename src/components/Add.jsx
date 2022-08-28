import { Fab, Tooltip,Modal, Typography, Avatar, TextField, Stack, ButtonGroup, Button } from '@mui/material'
import {
    Add as AddIcon,
    DateRange,
    EmojiEmotions,
    Image,
    PersonAdd,
    VideoCameraBack,
  } from "@mui/icons-material";
import React, { useState } from 'react'
import styled from '@emotion/styled';
import { Box } from '@mui/system';

const StyleModel = styled(Modal)({
display:"flex",
alignItems:"center",
justifyContent:"center",
});
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    // background: '#fff',
    boxShadow: 24,
    p: 4,
    borderRadius: 4,
  };
  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
  });
const Add = () => {
    const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Tooltip
      onClick={()=>setOpenModal(!openModal)}
      title="Delete"
      sx={{
        position: "fixed",
        bottom: 20,
        left: { xs: 'calc(50% - 25px)', md: 30 },
      }}
      >
        <Fab color="primary" aria-label="add">
            <AddIcon />
        </Fab>
      </Tooltip>
      <StyleModel
        keepMounted
        open={openModal}
        onClose={()=>setOpenModal(!openModal)}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style} bgcolor={"background.default"} color={"text.primary"}>
          <Typography variant="h6" color="gray" textAlign="center">
            Create post
          </Typography>
          <UserBox>
            <Avatar
              src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={500} variant="span">
              John Doe
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyleModel>
    </>
  )
}

export default Add
