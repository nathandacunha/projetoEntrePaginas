import { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const paginas = [
    { nome: 'Início', caminho: '/QuemSomos'},
    { nome: 'Cadastro', caminho: '/cadastro' },
    { nome: 'Login', caminho: '/login' },
];

function NavBar() {
    const [aberto, setAberto] = useState(false);

    return (
        <AppBar position="static" elevation={0} sx={{ bgcolor: '#282c34' }}>
            <Toolbar>
                <Typography
                    variant="h6"
                    component={Link}
                    to="/home"
                    sx={{ flexGrow: 1, color: 'inherit', textDecoration: 'none' }}
                >
                    Entre Páginas
                </Typography>

                {/* Desktop */}
                <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
                    {paginas.map((pagina) => (
                        <Button key={pagina.caminho} color="inherit" component={Link} to={pagina.caminho}>
                            {pagina.nome}
                        </Button>
                    ))}
                </Box>

                {/* Botão hamburguer (só no celular) */}
                <IconButton
                    color="inherit"
                    aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
                    aria-expanded={aberto}
                    onClick={() => setAberto(!aberto)}
                    sx={{ display: { xs: 'flex', md: 'none' } }}
                >
                    {aberto ? <CloseIcon /> : <MenuIcon />}
                </IconButton>
            </Toolbar>

            {/* Lista que desce (só no celular) */}
            <Collapse in={aberto} timeout="auto" unmountOnExit sx={{ display: { md: 'none' } }}>
                <List>
                    {paginas.map((pagina) => (
                        <ListItemButton
                            key={pagina.caminho}
                            component={Link}
                            to={pagina.caminho}
                            onClick={() => setAberto(false)}
                        >
                            <ListItemText primary={pagina.nome} />
                        </ListItemButton>
                    ))}
                </List>
            </Collapse>
        </AppBar>
    );
}

export default NavBar;