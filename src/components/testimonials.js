import React from 'react';
import useTestimonialData from '../hooks/use-testimonial-data';

import { makeStyles, ListItem, Card } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

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
  item: {
    maxWidth: '42ch',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3),
    },
  },
  signature: {
    marginTop: theme.spacing(1),
    textAlign: 'right',
  },
}));

const Testimonials = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const showDivider = !useMediaQuery(theme.breakpoints.up('md'));

  // Pull data from each each node, and place into testimonialData array
  const testimonialData = [];
  useTestimonialData().forEach((node) =>
    testimonialData.push(node.testimonial),
  );
  console.log(testimonialData);
  return (
    <section>
      <List className={classes.root}>
        {showDivider && <Divider variant="fullWidth" component="li" />}
        {testimonialData.map((testimonial) => (
          <>
            <ListItem
              alignItems="flex-start"
              className={classes.item}
              component={showDivider ? 'li' : Card}
            >
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
                    <Typography className={classes.signature}>
                      {testimonial.student} - {testimonial.course}
                    </Typography>
                  </>
                }
              ></ListItemText>
            </ListItem>
            {showDivider && <Divider variant="fullWidth" component="li" />}
          </>
        ))}
      </List>
    </section>
  );
};

export default Testimonials;
