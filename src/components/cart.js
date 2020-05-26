import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import cart from '../images/empty_cart.jpg'
import history from '../history';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import '../css/cart.css';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import {productQuantity} from '../actions/productQuantity';
import {removeProduct} from '../actions/removeAction';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  containerBlue: {
    backgroundColor: '#fff',
  },
  yourcartisempty: {
    color: '#423f3f',
    fontFamily: '"Google Sans",Arial,sans-serif',
    fontSize: '50px',
    fontWeight: '600',
    letterSpacing: '0',
    lineHeight: '36px',
    marginBottom: '60px',
    marginTop: '130px',
    textAlign: 'center',
  },
  emptyButton: {
    fontSize: '1.2rem',
    backgroundColor: '#e6e6e6',
    fontFamily: 'cursive',
    fontWeight: '600',
  },
  emptycartlogo: {
    backgroundImage: `url(${cart})`,
    backgroundSize: 'cover',
    height: '400px',
    margin: '30px auto',
    textAlign: 'center',
    width: '703px',
  },
  root: {
    flexGrow: 1,
    marginTop: '20px'
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 600,

  },
  image: {
    width: 150,
    height: 150,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 50,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },

}));

function ShoppingCart({ cartProps, productQuantity, removeProduct}) {

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
        <Box maxWidth="xl" className={classes.root}>

          <Paper className={classes.paper} elevation={3}>
            <Grid container spacing={2} justify="center" >
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img className={classes.img} alt="complex" src={product.src} />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} md container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      Tittle
                </Typography>
                    <Typography gutterBottom variant="body2" >
                      {product.description}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" className='removeButton' style={{ cursor: 'pointer' }}>
                      <Link className='removeButton' onClick={() => removeProduct(product.tagName)} >Remove</Link>
                    </Typography>  
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography>${(product.numbers * product.price).toFixed(2) }</Typography>
                  <FormControl className={classes.formControl}>
                    <Select
                      value={product.numbers}
                      onChange={ (event) => productQuantity(event.target.value, product.tagName)}
                      displayEmpty
                      className={classes.selectEmpty}
                      inputProps={{ 'aria-label': 'Without label' }}
                    >
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={4}>4</MenuItem>
                      <MenuItem value={5}>5</MenuItem>
                    </Select>
                    <FormHelperText>Quantity</FormHelperText>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
          </Paper>

        </Box>

      </div>
    )
  })
  if (productsInCart === undefined || productsInCart.length === 0) {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl" className={classes.containerBlue}>
          <div className={classes.yourcartisempty}>Your cart is empty</div>
          <Button variant="outlined" className={classes.emptyButton} onClick={() => history.push('/')}>Continue shopping</Button>
          <div className={classes.emptycartlogo}></div>
        </Container>
      </React.Fragment>
    )
  } else {
    return (
      <>
        <Button className='backButton' onClick={() => history.push('/')} size="large" variant="outlined">Back</Button>
        <Grid container  >
          <Grid item xs={12} md={8}>
            {productsInCart}
          </Grid>
          <Grid item className={classes.root}  xs={12}  md={3} >
              <Paper className={classes.paper}>total: {(cartProps.cartCost).toFixed(2)}</Paper>
          </Grid>
        </Grid> 

      </>
    )
  }
}

const mapStateToProps = state => ({
  cartProps: state.shoppingCartState
});

export default connect(mapStateToProps, {productQuantity , removeProduct})(ShoppingCart);