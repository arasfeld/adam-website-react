/**
 * RepoListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedNumber } from 'react-intl';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

import { makeSelectCurrentUser } from 'containers/App/selectors';

export class RepoListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const item = this.props.item;
    let nameprefix = '';

    // If the repository is owned by a different person than we got the data for
    // it's a fork and we should show the name of the owner
    if (item.owner.login !== this.props.currentUser) {
      nameprefix = `${item.owner.login}/`;
    }

    // Render the content into a list item
    return (
      <ListItem button key={`repo-list-item-${item.full_name}`} to={item.html_url}>
        <ListItemText>
          {nameprefix + item.name}
        </ListItemText>
        <ListItemSecondaryAction>
          <a href={`${item.html_url}/issues`} target="_blank">
            <ErrorOutlineIcon />
            <FormattedNumber value={item.open_issues_count} />
          </a>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

RepoListItem.propTypes = {
  item: PropTypes.object,
  currentUser: PropTypes.string,
};

export default connect(createStructuredSelector({
  currentUser: makeSelectCurrentUser(),
}))(RepoListItem);
