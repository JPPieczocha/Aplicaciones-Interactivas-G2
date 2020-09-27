import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';

const StyledMenu = withStyles({
  paper: {
    border: '4px solid #1F3354',
    backgroundColor: '#1F3354',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
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
    color: '#A2B2E9',
    borderTop: '4px solid #1F3354',
    backgroundImage: 'linear-gradient(0deg, #42639D, #6982AE)',
  },
}))(MenuItem);

export default function CustomizedMenus(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(!open);
  };

  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(!open);
  };

  return (
    <div className="menuDesplegable">
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="secondary"
        onClick={handleClick}
      >
        {open != null ? open ? <ExpandLess /> : <ExpandMore /> : null}
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
        <Link to={'/turnos'}>
          <Button className="boton" color="secondary">Gestión de turnos</Button>
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
        <Link to={'/recetas'}>
          <Button className="boton" color="secondary">Gestión de recetas</Button>
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link to='/cargarNovedades'><Button className="boton" color="secondary">Ingresar novedades</Button></Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link to='/actualizarHistorial'><Button className="boton" color="secondary">Modificar historial clínico</Button></Link>
        </StyledMenuItem>
        <StyledMenuItem>
        <Link to='/consultarHistorial'><Button className="boton" color="secondary">Consultar historial clínico</Button></Link>
        </StyledMenuItem>
        <StyledMenuItem>
        <Link to='/configuracion'><Button className="boton" color="secondary">Configuración</Button></Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Button className="boton" color="secondary" onClick={props.cambio}>Cerrar sesión</Button>
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}