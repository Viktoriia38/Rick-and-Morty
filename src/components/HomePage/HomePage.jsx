import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Filter from 'components/Filter/Filter';
import CharacterItems from 'components/CharacterItems/CharacterItems';
import { selectFilter } from 'services/redux/selectors';
import { getCharactersRequest } from 'services/redux/CharacterOperations';
import { filterCharacters } from 'services/redux/CharactersSlice';
import ReactLogo from '../../images/icon.svg';
import css from './HomePage.module.css';

function HomePage() {
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharactersRequest());
  }, [dispatch]);

  const handleFilter = e => {
    const { value } = e.target;
    dispatch(filterCharacters(value));
  };

  return (
    <div className={css.homePage}>
      <div className={css.homePageLayout}>
        <img src={ReactLogo} className={css.homePageLogo} alt="Homepage Logo" />
      </div>
      <Filter onChange={handleFilter} value={filter} />
      <CharacterItems />
    </div>
  );
}
export default HomePage;
