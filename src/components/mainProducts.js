import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Skeleton from '@material-ui/lab/Skeleton';

import caseImage from '../images/case.png';
import suprimeImage from '../images/suprime.png';
import watchImage from '../images/watch.png';

import CountdownTimer from './countdown';

import { connect } from 'react-redux';
import { addToCart } from '../actions/addAction';

const useStyles = makeStyles({

  media: {
    height: 500,
  },
  mediasmall: {
    height: 160,
  },
  spacingSmall: {

    paddingTop: 10,
    paddingRight: 5,
    paddingLeft: 5,
    paddingBottom: 10,
  },
  spacingBig: {
    paddingTop: 10,
    paddingRight: 5,
    paddingLeft: 5,
    paddingBottom: 10,
  },
});

const MyButton = styled(({ color, ...other }) => <Button {...other} />)({
  background: (props) =>
    props.color === 'red'
      ? 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
      : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: (props) =>
    props.color === 'red'
      ? '0 3px 5px 2px rgba(255, 105, 135, .3)'
      : '0 3px 5px 2px rgba(33, 203, 243, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
  margin: 8,
});

const data = [
  {
    src: caseImage,
    price: '4.99$',
    description: 'Lizards are a widespread, raging across all continents',
  },
  {
    src: suprimeImage,
    price: '24.99$',
    description: 'Lizards are a widespread, raging across all continents',
  },

];

const dataR = [
  {
    src: watchImage,
    price: '59.99$',
    description: 'Lizards are a widespread',
  },
  {
    src: watchImage,
    price: '59.99$',
    description: 'Lizards are a widespread',
  },
  {
    src: watchImage,
    price: '59.99$',
    description: 'Lizards are a widespread',
  },
  {
    src: watchImage,
    price: '59.99$',
    description: 'Lizards are a widespread',
  },
  {
    src: watchImage,
    price: '59.99$',
    description: 'Lizards are a widespread',
  },
  {
    src: watchImage,
    price: '59.99$',
    description: 'Lizards are a widespread',
  },
]

function ProductBody(props) {

  const classes = useStyles();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
    setTimeout(() => {

    }, 1000)
  }, []);


 
  return (
    <>

      <Box maxWidth="xl" display={{ xs: 'block', md: 'inline-flex' }}>
        <Grid container >
          {(loading ? Array.from(new Array(2)) : data).map((item, index) => (
            <Grid key={index} item xl={5} lg={5} md={5} className={classes.spacingBig}>
              <Card className={classes.card}>
                <CardActionArea>
                  {item ? (
                    <CardMedia
                      className={classes.media}
                      image={item.src}
                      title={item.price}
                    />
                  ) : (<Skeleton animation="wave" variant="rect" width="100%" height={500} />
                    )}
                  {item ? (
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">{item.price}</Typography>
                      <Typography variant="body2" color="textSecondary" component="p">{item.description}</Typography>
                    </CardContent>
                  ) : (<Skeleton animation="wave" width="80%" height={30} />
                    )}
                </CardActionArea>
                <CardActions>

                  <MyButton color="blue" onClick={() => props.addToCart('left' + index)} >ADD TO CART</MyButton>
                  <MyButton color="red">BUY NOW</MyButton>
                </CardActions>
              </Card>

            </Grid>
          ))}
        </Grid>

        <Grid container >
          {(loading ? Array.from(new Array(6)) : dataR).map((item, index) => (
            <Grid item key={index} md={4} sm={12} className={classes.spacingSmall}>
              <Card className={classes.cardsmall}>
                <CardActionArea>
                  {item ? (
                    <CardMedia
                      className={classes.mediasmall}
                      image={item.src}
                      title={item.price}
                    />
                  ) : (<Skeleton animation="wave" variant="rect" width="100%" height={200} />
                    )}
                  {item ? (
                    <CardContent >
                      <Typography gutterBottom variant="h5" component="h2">{item.price}</Typography>
                      <Typography variant="body2" color="textSecondary" component="p">{item.description}</Typography>
                    </CardContent>
                  ) : (<Skeleton animation="wave" width="60%" />
                    )}
                </CardActionArea>
                <CardActions>
                  <MyButton color="blue" onClick={() => props.addToCart('right' + index)} >ADD TO CART</MyButton>
                  <MyButton color="red">BUY NOW</MyButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <CountdownTimer />

    </>
  );
}

export default connect(null, { addToCart })(ProductBody);