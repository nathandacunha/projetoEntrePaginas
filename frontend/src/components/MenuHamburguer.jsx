import "../styles/MenuHamburguerBotao.css";
import '../styles/App.css';

function MenuHamburguerBotao({aberto, onClick}) {
    return (
        <button
            className={`hamburguer ${aberto ? 'hamburguer--ativo' : ''}`}
            onClick = {onClick}
            aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={aberto}   
        >
            <span></span>
            <span></span>
            <span></span>
        </button>
    );
}

export default MenuHamburguerBotao;