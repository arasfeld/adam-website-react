import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = () => ({
  container: {
    alignItems: 'center',
    display: 'flex',
  },
  content: {
    display: 'flex',
    flex: '1 auto',
    flexDirection: 'column',
    margin: '10px',
  },
  image: {
    maxHeight: 100,
    maxWidth: 100,
  },
});

function Feature({ classes, title, body, image, imagePosition }) {
  const img = image ? (
    <img className={classes.image} src={image} alt={title} />
  ) : null;

  return (
    <Card>
      <CardContent className={classes.container}>
        {img && imagePosition === 'left' ? img : null}
        <div className={classes.content}>
          <Typography variant="title" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {body}
          </Typography>
        </div>
        {img && imagePosition === 'right' ? img : null}
      </CardContent>
    </Card>
  );
}

Feature.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  body: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  image: PropTypes.any,
  imagePosition: PropTypes.oneOf(['left', 'right']),
};

Feature.defaultProps = {
  title: '',
  body: '',
  image: null,
  imagePosition: 'left',
};

export default withStyles(styles)(Feature);
