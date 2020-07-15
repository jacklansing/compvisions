import React from 'react';
import useCarouselData from '../hooks/use-carousel-data';

import Carousel from 'react-material-ui-carousel';
import { Paper, Typography } from '@material-ui/core';
import CarouselBackground from '../data/pages/index/carousel_bg.jpg';
import { Button, makeStyles } from '@material-ui/core';

const HomeCarousel = (props) => {
  // Pull data from each each node, and place into carouselData array
  const carouselData = [];
  useCarouselData().forEach((node) => carouselData.push(node.slide));

  return (
    <Carousel autoPlay={true} interval={10000} animation="fade">
      {carouselData.map((slide, i) => (
        <Slide slide={slide} key={i} />
      ))}
    </Carousel>
  );
};

const useStylesSlide = makeStyles((theme) => ({
  root: {
    padding: '1rem',
    minHeight: '370px',
    backgroundImage: `url(${CarouselBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  container: {
    marginTop: theme.spacing(5),
  },
  header: {
    textAlign: 'center',
    color: 'white',
    textShadow: '-1px 2px 0 #000, 1px 2px 0 #000, -1px 2px 0 #000',
  },
  body: {
    textAlign: 'center',
    color: theme.palette.primary.contrastText,
    [theme.breakpoints.up('md')]: {
      maxWidth: '50%',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: theme.spacing(1),
    },
  },
  button: {
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    maxWidth: 'fit-content',
    marginTop: theme.spacing(1),
  },
}));

const Slide = ({ slide }) => {
  const classes = useStylesSlide();
  return (
    <Paper className={classes.root}>
      <div className={classes.container}>
        <Typography variant="h4" className={classes.header}>
          {slide.header}
        </Typography>
        <Typography variant="body1" className={classes.body}>
          {slide.body}
        </Typography>
        {slide.link && (
          <Button
            component="a"
            color="primary"
            variant="contained"
            href={slide.link}
            className={classes.button}
          >
            Register Now
          </Button>
        )}
      </div>
    </Paper>
  );
};

export default HomeCarousel;
