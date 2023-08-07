import { useState } from 'react';
import PropTypes from 'prop-types';
import './Searchbar.css';
import Notiflix from 'notiflix';

export default function Searchbar({ onSubmit }) {
  const [searchQuery, setsearchQuery] = useState('');

  const handleSearchQuery = e => {
    const search = e.currentTarget.value.toLowerCase();
    setsearchQuery(search);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      Notiflix.Notify.warning('Please, enter search query!');
      return;
    }
    onSubmit(searchQuery);
    setsearchQuery('');
  };

  return (
    <header className="searchbar">
      <form className="form" onSubmit={handleSubmit}>
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>

        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          value={searchQuery}
          placeholder="Search images and photos"
          onChange={handleSearchQuery}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
