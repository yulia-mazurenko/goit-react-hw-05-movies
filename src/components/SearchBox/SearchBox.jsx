import { useState } from 'react';
import { SearchFormButton, SearchFormInput } from './SearchBox.styled';
import PropTypes from 'prop-types';
import { ReactComponent as SearchButtonIcon } from '../../icons/icon-search.svg';
import { Form } from './SearchBox.styled';
import { toast } from 'react-toastify';

export const SearchBox = ({ onSearch }) => {
  const [name, setName] = useState('');

  const handleInputChange = e => {
    setName(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (name.trim() === '') {
      toast.warning('Please, enter movie name');
      return;
    }

    onSearch(name);
    setName('');
    e.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <SearchFormInput
        name="query"
        type="text"
        onChange={handleInputChange}
        placeholder="Enter movie name"
      />
      <SearchFormButton aria-label="search button" type="submit">
        <SearchButtonIcon width="24" height="24" fill="currentColor" />
      </SearchFormButton>
    </Form>
  );
};

SearchBox.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
