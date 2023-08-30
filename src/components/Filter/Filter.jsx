import { PropTypes } from 'prop-types';
import { Component } from 'react';
import { Input, P } from './Filter.styled';
export default class Filter extends Component {
  render() {
    const { filter, handleSearch } = this.props;
    return (
      <>
        <P>Find contact by name</P>
        <label htmlFor="filter">
          <Input
            type="text"
            name="filter"
            value={filter}
            onChange={handleSearch}
          />
        </label>
      </>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
};
