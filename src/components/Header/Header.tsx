import { NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import './Header.scss';

export const Header = () => {
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const isPhonesPage = location.pathname === '/phones';
  const isTabletsPage = location.pathname === '/tablets';
  const isAccessoriesPage = location.pathname === '/accessories';

  return (
    <header className="header">
      <nav className="header__nav nav">
        <div className="nav__menu">
          <NavLink to="/" className="nav__logo">
            <span className="logo" />
          </NavLink>
          <NavLink
            to="home"
            className={classNames('nav__link', {
              'is-active-link': isHomePage,
            })}
          >
            Home
          </NavLink>
          <NavLink
            to="phones"
            className={classNames('nav__link', {
              'is-active-link': isPhonesPage,
            })}
          >
            Phones
          </NavLink>
          <NavLink
            to="tablets"
            className={classNames('nav__link', {
              'is-active-link': isTabletsPage,
            })}
          >
            Tablets
          </NavLink>
          <NavLink
            to="accessories"
            className={classNames('nav__link', {
              'is-active-link': isAccessoriesPage,
            })}
          >
            Accessories
          </NavLink>
        </div>
        <div className="nav__menu">
          {isPhonesPage && (
            <form className="nav__form">
              <input
                type="text"
                className="search"
                placeholder="Search in phones..."
              />
            </form>
          )}
          {isTabletsPage && (
            <form className="nav__form">
              <input
                type="text"
                className="search"
                placeholder="Search in tablets..."
              />
            </form>
          )}
          {isAccessoriesPage && (
            <form className="nav__form">
              <input
                type="text"
                className="search"
                placeholder="Search in accessories..."
              />
            </form>
          )}
          <NavLink to="favourites" className="icon__favourites">
            <span className="icon icon-favourites" />
          </NavLink>
          <NavLink to="cart" className="icon__cart">
            <span className="icon icon-cart" />
          </NavLink>
        </div>
      </nav>
    </header>
  );
};
