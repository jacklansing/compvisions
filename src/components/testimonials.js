import React from 'react';
import useTestimonialData from '../hooks/use-testimonial-data';

import { makeStyles, ListItem, Card } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import ResponsiveHeading from './utils/responsive-heading';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
  listRoot: {
    width: '100%',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'space-around',
    },
  },
  testimonialHeader: {
    textAlign: 'center',
  },
  item: {
    maxWidth: '42ch',
    padding: theme.spacing(3),
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(2),
    },
    [theme.breakpoints.up('md')]: {
      height: '100%',
    },
  },
  signature: {
    marginTop: theme.spacing(1),
    textAlign: 'right',
    display: 'block',
  },
}));

const Testimonials = (props) => {
  const classes = useStyles();

  // Pull data from each each node, and place into testimonialData array
  const testimonialData = [];
  useTestimonialData().forEach((node) =>
    testimonialData.push(node.testimonial),
  );
  return (
    <section className={classes.root}>
      <ResponsiveHeading style={{ textAlign: 'center' }}>
        Why us? Why now?
      </ResponsiveHeading>
      <List className={classes.listRoot}>
        {testimonialData.map((testimonial, i) => (
          <React.Fragment key={i}>
            <ListItem>
              <Card className={classes.item}>
                <ListItemText
                  primary={
                    <>
                      <Typography>
                        <FormatQuoteIcon
                          fontSize="inherit"
                          style={{ transform: 'scaleX(-1)' }}
                        />
                        {testimonial.quote}
                        <FormatQuoteIcon fontSize="inherit" />
                      </Typography>
                    </>
                  }
                  secondary={
                    <>
                      <Typography
                        className={classes.signature}
                        component="span"
                      >
                        {testimonial.student} - {testimonial.course}
                      </Typography>
                    </>
                  }
                ></ListItemText>
              </Card>
            </ListItem>
          </React.Fragment>
        ))}
      </List>
    </section>
  );
};

export default Testimonials;
