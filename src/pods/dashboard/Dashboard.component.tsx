import React, { useState } from "react";
import { menuList } from "./MenuList";
//Importr clsx para trabajar con las clases
import clsx from "clsx";

//Makestyles -> Estilos con material UI y el tema (theme) por defecto
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

//Componentes de Material UI
import {
  AppBar,
  Badge, 
  Drawer,
  IconButton,
  List,
  Toolbar,
  Typography
} from "@material-ui/core";


//Iconos de Material UI
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationIcon from "@material-ui/icons/NotificationsNoneOutlined";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import MenuListItems from "../../common-components/dashboard/MenuListItem.component";

//Definicion de estilos
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  //Toolbar del menu lateral
  toolbar: {
    paddingRight: 24,
    height: 80,
    backgroundColor: '#f1f1f1'
  },
  //Iconos del Toolbar
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  //AppBar -> Barra de navegación para desaparecer de la pantalla
  appBar: {
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    boxShadow: 'none',
  },
  //AppBar -> Barra de navegación para aparecere en pantalla
  appBarShift: {
    marginLeft: drawerWidth, //Ancho del Drawer
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  //Botones del menú (Drawer)
  menuButton: {
    marginRight: 35,
  },
  //Botones del menú (Drawer) cuando el menú esté plegado
  menuButtonHidden: {
    display: "none",
  },
  //Titulo de las opciones del menú
  title: {
    flexGrow: 1,  
    color: '#171948',
    fontSize: '18px',
    fontWeight: 500, 
  },
  textBar: {  
    color: '#171948',
    fontSize: '18px',
    fontWeight: 500, 
  },
  //Menu (Drawer) abierto
  drawerPaper: {
    display:'flex',
    width: drawerWidth,
    whiteSpace: "nowrap",
    transition: theme.transitions.create(["width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundColor: '#FFFFFF'
  },

  drawerPaperClosed: {
    overflowX: "hidden",
    width: theme.spacing(7),
    transition: theme.transitions.create(["width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  }, 
}));

interface Props {
  handleDrawerOpen: () => void;
  logout: () => void;
  handleDrawerClose: () => void;
  open: boolean;
}

export const DashboardComponent: React.FC<Props> = (props) => {
  const { handleDrawerOpen, logout, handleDrawerClose, open } = props;
  //Clases para aplicar a los elementos
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* Barra de navegación superior */}
      <AppBar
        className={clsx(classes.appBar, open && classes.appBarShift)}
        position="absolute"
      >
        <Toolbar className={classes.toolbar} >
          {/* Icono para abrir el drawer */}
          <IconButton
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
          >
            <MenuIcon style={{ color: '#D01E69'}}/>
          </IconButton>

          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            className={classes.title}
            noWrap
          >
            Bienvenido/a a tu banca
          </Typography>

          {/* Sección de Notificaciones para el usuario */}
          <IconButton color="inherit">
            <Badge color = "secondary" badgeContent={10} >
              <NotificationIcon style={{ color: '#42446E'}} />
            </Badge>
          </IconButton>
          <div className={classes.textBar}>Notificaciones</div>

          <IconButton color="inherit">
             <AccountCircleIcon style={{ color: '#D01E69'}} fontSize='large'/>  
          </IconButton>
          <div className={classes.textBar}>NOMBRE APELLIDOS</div>
          {/* Boton para Logout */}
          <IconButton color="inherit" onClick={logout}>
            <ExitToAppIcon />
          </IconButton>
        </Toolbar>      
      </AppBar>   

      {/* Drawer (Contenido izquierda(nav))*/}
      <Drawer
        variant="persistent"
        open={open}
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClosed),
        }}
      >     
        <div className={classes.toolbarIcon}> 
          <div className = "logo">
            <svg width="82" height="23" viewBox="0 0 82 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0H3.04126V17.7106H0V0Z" fill="#D01E69"/>
              <path d="M62.9187 17.7106V4.33051H65.96V17.7106H62.9187Z" fill="#D01E69"/>
              <path d="M65.96 2.96901H62.9187V0H65.96V2.96901Z" fill="#D01E69"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M78.6898 17.7106L78.7373 15.8626C78.2817 16.5923 77.7114 17.1375 77.021 17.4925C76.339 17.842 75.5088 18.0153 74.5276 18.0153C72.5486 18.0153 70.8937 17.3387 69.566 15.9856C68.2354 14.6325 67.5702 12.9579 67.5702 10.9618C67.5702 8.99923 68.2271 7.34978 69.5408 6.01065C70.8546 4.66313 72.4926 3.99217 74.4549 3.99217C75.3215 3.99217 76.1041 4.1655 76.803 4.51496C77.5102 4.85603 78.1531 5.38721 78.7373 6.1085L78.6646 4.33324H81.7059V17.7134H78.6898V17.7106ZM70.7708 10.9115C70.7708 12.0549 71.1509 13.0026 71.914 13.7575C72.6827 14.5039 73.6443 14.8758 74.796 14.8758C75.8498 14.8758 76.7527 14.4983 77.5102 13.7463C78.2649 12.9915 78.6423 12.0941 78.6423 11.0569C78.6423 9.93019 78.2593 8.98525 77.499 8.22203C76.7359 7.45881 75.7883 7.0786 74.6534 7.0786C73.5744 7.0786 72.6604 7.44763 71.9056 8.18569C71.1481 8.92375 70.7708 9.83235 70.7708 10.9115Z" fill="#D01E69"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M32.4085 4.33033H29.6104L29.6719 6.13075C29.015 5.40108 28.2966 4.86151 27.5196 4.51205C26.7481 4.16259 25.8843 3.98926 24.9283 3.98926C23.0331 3.98926 21.4342 4.65184 20.1372 5.98258C18.8458 7.30494 18.2029 8.92084 18.2029 10.8359C18.2029 12.7761 18.8542 14.4088 20.1596 15.7395C21.4734 17.0675 23.1002 17.7328 25.0373 17.7328C25.9794 17.7328 26.8291 17.5595 27.5922 17.21C28.3609 16.8606 29.0542 16.3294 29.6719 15.6165V15.787C29.6691 17.1262 29.2722 18.2193 28.4783 19.072C27.6929 19.9246 26.7117 20.3496 25.5349 20.3496C24.7327 20.3496 24.0283 20.1846 23.4189 19.8519C22.8095 19.5193 22.3427 19.044 22.0184 18.4289H19.0023C19.4971 19.9135 20.291 21.0345 21.3867 21.7977C22.4825 22.5582 23.8382 22.9412 25.4511 22.9412C27.6006 22.9412 29.2946 22.2814 30.5357 20.959C31.7851 19.6367 32.4085 17.8139 32.4085 15.4963V4.33033ZM22.4825 13.7238C21.6858 12.9354 21.2889 11.9597 21.2889 10.7911C21.2889 9.6561 21.6858 8.70557 22.4825 7.94794C23.2847 7.18472 24.2742 6.80451 25.4511 6.80451C26.6446 6.80451 27.6314 7.1987 28.4196 7.98429C29.2135 8.76987 29.6104 9.75675 29.6104 10.9393C29.6104 12.0324 29.2051 12.969 28.3945 13.749C27.5894 14.5178 26.5915 14.9036 25.4007 14.9036C24.2491 14.9036 23.2763 14.5094 22.4825 13.7238Z" fill="#D01E69"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M38.9635 14.3081C39.6931 14.9148 40.4842 15.1803 41.3395 15.1049C42.1977 15.0266 42.9943 14.6212 43.7239 13.8915C44.2047 13.4107 44.5373 12.8795 44.7246 12.2952C44.9063 11.7081 44.9203 11.1154 44.7665 10.5227L47.1341 8.1548C47.7519 9.55264 47.9448 10.9393 47.71 12.312C47.5169 13.4471 47.0452 14.468 46.2965 15.3748L46.3204 15.3535L47.827 17.0449L46.1443 18.5443L44.6479 16.8645C43.542 17.5949 42.2944 17.9555 40.9063 17.9453C39.0055 17.9229 37.3786 17.2352 36.0257 15.8849C34.6616 14.5206 33.9712 12.8851 33.946 10.9728C33.9265 9.29661 34.4102 7.85606 35.3951 6.65304L33.9182 5.01939L35.5899 3.50767L37.0719 5.14702C38.1911 4.41485 39.4487 4.05687 40.8448 4.07311C42.7735 4.08988 44.4702 4.83074 45.935 6.29568C46.0775 6.43825 46.1809 6.54729 46.2508 6.62836C46.3179 6.69546 46.3794 6.76256 46.4381 6.83245L38.9635 14.3081ZM42.3822 7.44191C41.5967 6.9946 40.814 6.83245 40.0397 6.94986C39.2654 7.07008 38.547 7.45868 37.8846 8.12125C37.3059 8.69717 36.9621 9.39888 36.8475 10.2264C36.7385 11.0455 36.8922 11.8088 37.3059 12.5189L42.3822 7.44191Z" fill="#D01E69"/>
              <path d="M52.5317 5.85185V4.331H49.4904V17.7111H52.5065V11.98C52.5065 10.1879 52.7329 8.9271 53.1885 8.19743C53.6414 7.46775 54.3821 7.10152 55.4136 7.10152C56.4283 7.10152 57.1411 7.43141 57.5548 8.0884C57.9769 8.74538 58.1865 9.97828 58.1865 11.7871V17.7083H61.3256V10.6297C61.3256 9.4443 61.2557 8.54409 61.1188 7.92904C60.9818 7.3056 60.7498 6.74647 60.4255 6.25163C59.9475 5.52196 59.3465 4.9768 58.6254 4.61057C57.9098 4.24434 57.074 4.06262 56.118 4.06262C55.3577 4.06262 54.684 4.21079 54.0998 4.50154C53.5184 4.79229 52.9929 5.24239 52.5317 5.85185Z" fill="#D01E69"/>
              <path d="M7.74276 4.27744V5.79829C8.20398 5.19163 8.72949 4.74152 9.31091 4.44798C9.89512 4.15723 10.5688 4.00906 11.3319 4.00906C12.2879 4.00906 13.1237 4.19078 13.8365 4.55701C14.5576 4.92325 15.1586 5.4712 15.6366 6.19807C15.9609 6.69291 16.1929 7.25205 16.3298 7.87828C16.4668 8.49612 16.5367 9.39633 16.5367 10.5789V17.6576H13.4004V11.7335C13.4004 9.92472 13.188 8.69182 12.7687 8.03483C12.355 7.37785 11.6422 7.04796 10.6275 7.04796C9.59882 7.04796 8.85528 7.4142 8.40244 8.14387C7.94681 8.87354 7.72039 10.1344 7.72039 11.9264V17.6548H4.70149V4.27744H7.74276Z" fill="#D01E69"/>
            </svg>         
            <svg width="50" height="23" viewBox="0 0 50 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.764709 13.6471H6.53228C9.56437 13.6471 11.1793 12.0754 11.1793 9.94048C11.1793 7.95622 9.74893 6.75781 8.21311 6.68577V6.5548C9.61711 6.24046 10.652 5.25161 10.652 3.67337C10.652 1.66291 9.14911 0.235291 6.16975 0.235291H0.764709V13.6471ZM3.61883 11.3288V7.76631H6.01155C7.38258 7.76631 8.23289 8.55216 8.23289 9.65889C8.23289 10.6674 7.54078 11.3288 5.94564 11.3288H3.61883ZM3.61883 5.84754V2.52734H5.78744C7.05301 2.52734 7.77148 3.17566 7.77148 4.14487C7.77148 5.20576 6.9014 5.84754 5.73471 5.84754H3.61883Z" fill="#171948"/>
              <path d="M14.4809 13.6471L15.4828 10.5888H20.3539L21.3558 13.6471H24.4143L19.7607 0.235291H16.0826L11.4224 13.6471H14.4809ZM16.2079 8.37534L17.8689 3.30009H17.9744L19.6355 8.37534H16.2079Z" fill="#171948"/>
              <path d="M36.8009 0.235291H33.96V8.67003H33.8414L28.0145 0.235291H25.5097V13.6471H28.3638V5.20576H28.4627L34.3357 13.6471H36.8009V0.235291Z" fill="#171948"/>
              <path d="M38.6297 13.6471H41.4838V9.8357L42.8878 8.13304L46.5856 13.6471H50L44.9311 6.24046L49.9407 0.235291H46.5197L41.6617 6.14878H41.4838V0.235291H38.6297V13.6471Z" fill="#171948"/>
            </svg>
          </div>      
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon style={{ color: '#D01E69'}}/>
          </IconButton>
        </div>  
        <List>
          <MenuListItems list={menuList} />
        </List>
      </Drawer>
    </div>
  );
};
