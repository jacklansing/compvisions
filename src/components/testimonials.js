import React from 'react';
import useTestimonialData from '../hooks/use-testimonial-data';

import { makeStyles, ListItem, Card } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import ResponsiveHeading from './utils/responsive-heading';

const useStyles = makeStyles((theme) => ({
  root: {
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
    [theme.breakpoints.down('md')]: {
      marginLeft: 'auto',
      marginRight: 'auto',
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
  const theme = useTheme();

  // Pull data from each each node, and place into testimonialData array
  const testimonialData = [];
  useTestimonialData().forEach((node) =>
    testimonialData.push(node.testimonial),
  );
  return (
    <section style={{ marginTop: theme.spacing(2) }}>
      <ResponsiveHeading style={{ textAlign: 'center' }}>
        Why us? Why now?
      </ResponsiveHeading>
      <List className={classes.root}>
        {testimonialData.map((testimonial, i) => (
          <React.Fragment key={i}>
            <ListItem alignItems="flex-start">
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
