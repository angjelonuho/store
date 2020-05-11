import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import cart from '../images/empty_cart.jpg'
import history from '../history';
import { connect } from 'react-redux';

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
    marginBottom: '60px',
    marginTop: '200px',
    textAlign: 'center',
  },
  emptycartlogo: {
    backgroundImage: `url(${cart})`,
    backgroundSize: 'cover',
    height: '400px',
    margin: '30px auto',
    textAlign: 'center',
    width: '703px',
  }

});

function ShoppingCart({ cartProps }) {

  const classes = useStyles();

  let productsInCart = [];

  Object.keys(cartProps.products).forEach(function (item) {

    if (cartProps.products[item].inCart) {

      productsInCart.push(cartProps.products[item]);

    }
  })

  productsInCart = productsInCart.map((product, index) => {
    return (
      <div key={index}>
        <p>{product.description}</p>

      </div>
    )
  })
  if (productsInCart === undefined || productsInCart.length === 0) {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl" className={classes.containerBlue}>
          <div className={classes.yourcartisempty}>Your cart is empty</div>
          <Button variant="outlined" onClick={() => history.push('/')}>Continue shopping</Button>
          <div className={classes.emptycartlogo}></div>
        </Container>
      </React.Fragment>
    )
  } else {
    return (
      <>
        {productsInCart}
      </>
    )
  }
}

const mapStateToProps = state => ({
  cartProps: state.shoppingCartState
});

export default connect(mapStateToProps)(ShoppingCart);