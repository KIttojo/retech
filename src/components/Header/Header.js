import React from "react";
import { Nav, Logo, Cart, NavLink, Bars, BarsDark, NavMenu, NavBtn, RightPart } from "./HeaderElements";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import logoWhite from "../../Assets/logoWhite.png";
import logoDark from "../../Assets/logoDark.png";
import cartIcon from "../../Assets/cart.png";

const Header = ({ toggle }) => {
  const {pathname} = useLocation();

  return (
    <div className="Container">
      <Nav>
        <Logo to="/">
          <img
            src={pathname === '/' ? logoWhite : logoDark}
            alt="logo"
          />
        </Logo>
        {pathname === '/' && 
          <NavMenu>
            <NavLink className="menu-item" to="projects" smooth={true}>
              Как мы работаем
            </NavLink>
            <NavLink className="menu-item" to="about" smooth={true}>
              О нас
            </NavLink>
            <NavLink className="menu-item" to="contact" smooth={true}>
              Сдать технику
            </NavLink>
          </NavMenu>
        }
        <NavBtn>
          {pathname === '/' ? 
            <Link to="/shop">
              <div className="btn PrimaryBtn">В магазин</div>
            </Link> :
            <RightPart>
              <Cart to='/'><img src={cartIcon} alt="cart"/></Cart>
              <Link to="/">
                <div className="btn PrimaryBtn">На главную</div>
              </Link>
            </RightPart>
          }
        </NavBtn>
        {pathname === '/' ? <Bars onClick={toggle} /> : <BarsDark onClick={toggle} />}
        
      </Nav>
    </div>
  );
};

export default Header;
