import { useSelector } from 'react-redux';
import { selectFilter } from 'services/redux/selectors';
import ReactLogo from '../../images/searchIcon.svg';
import css from './Filter.module.css';

function SearchForm({ onChange }) {
  const value = useSelector(selectFilter);

  return (
    <form className={css.searchForm}>
      <img src={ReactLogo} className={css.filterSearchIcon} alt="Search Icon" />
      <label className={css.searchQueryLabel} htmlFor="">
        <input
          onChange={onChange}
          className={css.searchQueryInput}
          type="text"
          value={value}
          placeholder="Filter by name..."
        />
      </label>
    </form>
  );
}

export default SearchForm;
