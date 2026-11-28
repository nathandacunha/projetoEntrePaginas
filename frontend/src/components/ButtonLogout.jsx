import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LogoutButton()
{
    const navigate = useNavigate();
    const [erro, setErro] = useState('');

    async function handleLogout()
    {
        setErro('');

        try {
            const resposta = await fetch('http://localhost:3001/api/auth/logout', {
                method: 'POST',
                credentials: 'include',
            });

            if(!resposta.ok) {
                setErro("Não foi possível sair. Tente novamente!");
            }

            navigate('/login');
        } catch(error) {
            console.log(error);
            setErro("Não foi possível conectar com o servidor. Tente novamente");
        }
    }

    return(
        <>
            <button type="button" onClick={handleLogout}>Sair</button>
            {erro && <p>{erro}</p>}
        </>
    );
}

export default LogoutButton;