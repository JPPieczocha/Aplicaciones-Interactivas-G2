import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';

const StyledMenu = withStyles({
  paper: {
    border: '4px solid #1F2742',
    backgroundColor: '#1769AA',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.dark,
    '&:focus': {
      backgroundColor: theme.palette.primary.dark,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        backgroundColor: theme.palette.primary.dark,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        ^
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemText primary="Sent mail" align="center" justify="center"/>
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary="Drafts" align="center" justify="center"/>
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary="Inbox" align="center" justify="center"/>
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}