import {
  styled,
  alpha,
  AppBar,
  Box,
  Toolbar,
  Typography,
  InputBase,
  Avatar,
  Button,
  Stack,
  Paper,
  Modal,
  Fade,
  Backdrop,
  TextField,
} from '@mui/material';
import AddContact from './AddContact';
import * as React from 'react';

import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function ContactList() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [backendData, setBackendData] = React.useState([{}]);

  const contacts = backendData.map((contact: any) => (
    <Item>
      <Button>
        {contact.name} {contact.surname}
      </Button>
    </Item>
  ));

  React.useEffect(() => {
    fetch('/contacts')
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: '#311b92' }}>
          <Toolbar>
            <Avatar
              sx={{ mr: 2 }}
              alt="Remy Sharp"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
            />
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              Nicolas Villafane
            </Typography>
            <Button onClick={handleOpen} variant="contained" color="success">
              <AddIcon />
            </Button>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <Button variant="contained" color="error" sx={{ ml: 2 }}>
              Log Out
            </Button>
          </Toolbar>
        </AppBar>
        <Stack spacing={2} sx={{ mt: 2 }}>
          <Typography
            variant="h2"
            noWrap
            textAlign="center"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            CONTACTS
          </Typography>
          {contacts}
        </Stack>
      </Box>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <TextField
              sx={{ mt: 2 }}
              id="outlined-basic"
              label="Name"
              variant="outlined"
            />
            <TextField
              sx={{ mt: 2 }}
              id="outlined-basic"
              label="Surname"
              variant="outlined"
            />
            <TextField
              sx={{ mt: 2 }}
              id="outlined-basic"
              label="Age"
              variant="outlined"
            />
            <TextField
              sx={{ mt: 2 }}
              id="outlined-basic"
              label="Mail"
              variant="outlined"
            />
            <TextField
              sx={{ mt: 2 }}
              id="outlined-basic"
              label="Adress"
              variant="outlined"
            />
            <Button sx={{ ml: 2 }} variant="contained" color="success">
              Submit
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default ContactList;
