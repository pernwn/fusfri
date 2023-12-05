export function Copyright(props) {
    return (
      <Typography variant="body2" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="#">
          UniqTravels
        </Link>{''}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

export default function Footer(){
    return(
        <>
        
        </>
    );
}