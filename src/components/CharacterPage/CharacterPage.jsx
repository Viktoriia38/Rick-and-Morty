import { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { descriptionCharacterFetch } from 'services/api';
import ReactLogo from '../../images/arrow.svg';
import css from './CharacterPage.module.css';

function ItemPage() {
  const [characterById, setcharacterById] = useState({});
  const { characterId } = useParams();
  const location = useLocation();

  useEffect(() => {
    async function takeCharacter() {
      try {
        const response = await descriptionCharacterFetch(characterId);
        setcharacterById({ ...response });
      } catch (error) {
        throw new Error(error.message);
      }
    }
    takeCharacter();
  }, [characterId]);

  return (
    <div className={css.characterPage}>
      {Boolean(characterById) && (
        <div>
          <Link className={css.characterLink} to={location.state?.from ?? '/'}>
            <div className={css.characterPageLayout}>
              <img
                src={ReactLogo}
                className={css.characterPageLogo}
                alt="Arrow link go back"
              />
            </div>
            GO BACK
          </Link>
          <div className={css.characterUnit}>
            <img
              className={css.characterUnitImage}
              src={characterById.image}
              alt="Character view"
            />
            <h2 className={css.characterUnitTitle}>{characterById.name}</h2>
            <p className={css.characterUnitPreTitle}>Informations</p>
            <ul className={css.characterUnitList}>
              <li className={css.characterUnitItem}>
                <h3 className={css.characterUnitItemTitle}>Gender</h3>
                <p className={css.characterUnitItemDescription}>
                  {characterById.gender}
                </p>
              </li>
              <li className={css.characterUnitItem}>
                <h3 className={css.characterUnitItemTitle}>Status</h3>
                <p className={css.characterUnitItemDescription}>
                  {characterById.status}
                </p>
              </li>
              <li className={css.characterUnitItem}>
                <h3 className={css.characterUnitItemTitle}>Specie</h3>
                <p className={css.characterUnitItemDescription}>
                  {characterById.species}
                </p>
              </li>
              <li className={css.characterUnitItem}>
                <h3 className={css.characterUnitItemTitle}>Origin</h3>
                {
                  <p className={css.characterUnitItemDescription}>
                    {characterById.origin
                      ? characterById.origin.name
                      : 'Unknown'}
                  </p>
                }
              </li>
              <li className={css.characterUnitItem}>
                <h3 className={css.characterUnitItemTitle}>Type</h3>
                <p className={css.characterUnitItemDescription}>
                  {characterById.type || 'Unknown'}
                </p>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
export default ItemPage;
