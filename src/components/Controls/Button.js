import { Button as MUIButton} from '@material-ui/core';

const Button = (props) => {

    const { name, label, onClick} = props;

    return ( 
        <MUIButton name={name} variant="contained" color="primary" onClick={onClick}>
            {label}
        </MUIButton>
     );
}
 
export default Button;