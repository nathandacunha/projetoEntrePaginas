import Alert from "@mui/material/Alert";
import CheckIcon from '@mui/icons-material/Check';

export default function ErrorMessage({ mensagem }) 
{
    if(!mensagem) return null;
    return(
        <Alert icon={<CheckIcon fontSize="filled" />} severity="error">
            {mensagem}
        </Alert>   
    );
}