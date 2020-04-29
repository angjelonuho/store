import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import cart from '../images/empty_cart.jpg'
import history from '../history';

const useStyles = makeStyles({
  containerBlue: {
    backgroundColor: '#fff',
  },
  yourcartisempty: {
    color: '#423f3f',
    fontFamily: '"Google Sans",Arial,sans-serif',
    fontSize: '43px',
    fontWeight: '600',
    letterSpacing: '0',
    lineHeight: '36px',
    marginBottom: '24px',
    marginTop: '200px',
    textAlign: 'center',
  },
  emptycartlogo:{
    backgroundImage: `url(${cart})`,
    backgroundSize: 'cover',
    height: '400px',
    margin: '72px auto',
    textAlign: 'center',
    width: '703px',
}
  
});

export default function ShoppingCart() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" className={classes.containerBlue}>  
        <div className={classes.yourcartisempty}>Your cart is empty</div>
        <Button variant="outlined" onClick={() => history.push('/')}>Continue shopping</Button>
        <div className={classes.emptycartlogo}></div>
      </Container>
    </React.Fragment>
  );
}
