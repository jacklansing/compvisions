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
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3),
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
  const showDivider = !useMediaQuery(theme.breakpoints.up('md'));

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
        {showDivider && <Divider variant="fullWidth" component="li" />}
        {testimonialData.map((testimonial, i) => (
          <React.Fragment key={i}>
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
                    <Typography className={classes.signature} component="span">
                      {testimonial.student} - {testimonial.course}
                    </Typography>
                  </>
                }
              ></ListItemText>
            </ListItem>
            {showDivider && <Divider variant="fullWidth" component="li" />}
          </React.Fragment>
        ))}
      </List>
    </section>
  );
};

export default Testimonials;
