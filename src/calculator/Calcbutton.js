import Button from '@mui/material/Button';

    const Calcbutton = (props) => {
        return (
            <Button onClick={() => props.setsstuff({inputvalu:(props.inputvalue+''+props.number)})} variant="contained">
                {props.number}
            </Button>
        );
    }

export default Calcbutton;