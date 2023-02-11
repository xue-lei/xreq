import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  MenuItem
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Quit } from '../../wailsjs/runtime/runtime'

export const Header: FC = () => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            color="inherit"
            component="div">
            <Link
              to="/request">
              REQUEST
            </Link>
          </Typography>
          <Typography>
            <MenuItem onClick={Quit}>
              <Typography textAlign="center">CLOSE</Typography>
            </MenuItem>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
