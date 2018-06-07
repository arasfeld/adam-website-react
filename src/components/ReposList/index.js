import React from 'react';
import PropTypes from 'prop-types';

import LinearProgress from '@material-ui/core/LinearProgress';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';

import RepoListItem from 'containers/RepoListItem';

function ReposList({ loading, error, repos }) {
  if (loading) {
    return <LinearProgress />;
  }

  if (error !== false) {
    return <Typography>Something went wrong, please try again!</Typography>;
  }

  if (repos !== false) {
    return (
      <List>
        {repos.map((repo) => (
          <RepoListItem key={repo.name} item={repo} />
        ))}
      </List>
    );
  }

  return null;
}

ReposList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  repos: PropTypes.any,
};

export default ReposList;
