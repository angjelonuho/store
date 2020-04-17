import React from 'react';
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
import suprimeImage from '../images/suprime.png';
import caseImage from '../images/case.png';
import watchImage from '../images/watch.png';

const useStyles = makeStyles({

  media: {
    height: 500,
  },
  mediasmall: {
    height: 160,
  },
  spacingSmall:{
    
    paddingTop: 10,
    paddingRight: 5,
    paddingLeft: 5,
    paddingBottom: 10,
  },
  spacingBig:{
    paddingTop: 10,
    paddingRight: 5,
    paddingLeft: 5,
    paddingBottom: 10,
  }
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

export default function MediaCard() {
  const classes = useStyles();
  return (
    <>

      <Box maxWidth="xl" display={{ xs: 'block', md: 'inline-flex' }}>

        <Grid container >
          <Grid item xl={5} lg={5} md={5} className={classes.spacingBig}> 
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={caseImage}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    4.99$
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>

              <MyButton color="blue">ADD TO CART</MyButton>
              <MyButton color="red">BUY NOW</MyButton>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xl={5} lg={5} md={5} className={classes.spacingBig}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={suprimeImage}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    25.44$
          </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread, ranging
                    across all continents except Antarctica
          </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <MyButton color="blue">ADD TO CART</MyButton>
                <MyButton color="red">BUY NOW</MyButton>
              </CardActions>
            </Card>
          </Grid>
        </Grid>

        <Grid container >
          <Grid item md={4} sm={12} className={classes.spacingSmall}>
            <Card className={classes.cardsmall}>
              <CardActionArea>
                <CardMedia
                  className={classes.mediasmall}
                  image={watchImage}
                  title="Contemplative Reptile"
                />
                <CardContent >
                  <Typography gutterBottom variant="h5" component="h2">59.99$</Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread
          </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
               <MyButton color="blue">ADD TO CART</MyButton>
                <MyButton color="red">BUY NOW</MyButton>
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={4} sm={12} className={classes.spacingSmall}>
            <Card className={classes.cardsmall}>
              <CardActionArea>
                <CardMedia
                  className={classes.mediasmall}
                  image={watchImage}
                  title="Contemplative Reptile"
                />
                <CardContent >
                  <Typography gutterBottom variant="h5" component="h2">59.99$</Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread
          </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <MyButton color="blue">ADD TO CART</MyButton>
                <MyButton color="red">BUY NOW</MyButton>
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={4} sm={12} className={classes.spacingSmall}>
            <Card className={classes.cardsmall}>
              <CardActionArea>
                <CardMedia
                  className={classes.mediasmall}
                  image={watchImage}
                  title="Contemplative Reptile"
                />
                <CardContent >
                  <Typography gutterBottom variant="h5" component="h2">59.99$</Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread
          </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <MyButton color="blue">ADD TO CART</MyButton>
                <MyButton color="red">BUY NOW</MyButton>
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={4} sm={12} className={classes.spacingSmall}>
            <Card className={classes.cardsmall}>
              <CardActionArea>
                <CardMedia
                  className={classes.mediasmall}
                  image={watchImage}
                  title="Contemplative Reptile"
                />
                <CardContent >
                  <Typography gutterBottom variant="h5" component="h2">59.99$</Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread
          </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <MyButton color="blue">ADD TO CART</MyButton>
                <MyButton color="red">BUY NOW</MyButton>
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={4} sm={12} className={classes.spacingSmall}>
            <Card className={classes.cardsmall}>
              <CardActionArea>
                <CardMedia
                  className={classes.mediasmall}
                  image={watchImage}
                  title="Contemplative Reptile"
                />
                <CardContent >
                  <Typography gutterBottom variant="h5" component="h2">59.99$</Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread
          </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <MyButton color="blue">ADD TO CART</MyButton>
                <MyButton color="red">BUY NOW</MyButton>
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={4} sm={12} className={classes.spacingSmall}>
            <Card className={classes.cardsmall}>
              <CardActionArea>
                <CardMedia
                  className={classes.mediasmall}
                  image={watchImage}
                  title="Contemplative Reptile"
                />
                <CardContent >
                  <Typography gutterBottom variant="h5" component="h2">59.99$</Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread
          </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <MyButton color="blue">ADD TO CART</MyButton>
                <MyButton color="red">BUY NOW</MyButton>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>

    </>
  );
}