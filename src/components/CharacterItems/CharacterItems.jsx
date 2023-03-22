import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { selectFilterCharacters } from 'services/redux/selectors';
import css from '../CharacterItems/CharacterItems.module.css';

export default function CharacterItems() {
  const characters = useSelector(selectFilterCharacters);
  const location = useLocation();

  return (
    <ul className={css.list}>
      {characters &&
        characters.slice(0, 8).map(item => (
          <li key={item.id}>
            <Link
              className={css.item}
              state={{ from: location }}
              to={`/${item.id}`}
              id={item.created}
            >
              <div className={css.itemMask}>
                <img className={css.itemImage} src={item.image} alt="" />
              </div>
              <div className={css.itemDescription}>
                <h2 className={css.itemName}>{item.name.slice(0, 17)}</h2>
                <p className={css.itemSpecie}>{item.species}</p>
              </div>
            </Link>
          </li>
        ))}
    </ul>
  );
}
