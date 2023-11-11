import React, { useLayoutEffect, useState } from "react";
import { NavbarData } from "./NavbarData";
import styled from "styled-components";
import { HashLink } from "../links";
import MobNavbar from "./MobNavbar";
import { useQuery } from "@styles/breakpoints";

export const NavbarStyles = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: var(--lbg);
  padding: 10px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10000;
  & > a {
    position: relative;
    color: white;
    font-size: 2rem;
    font-weight: 500;
  }
  & > nav {
    display: flex;
    gap: 10px;
    & > a {
      position: relative;
      letter-spacing: 0.2em;
      font-weight: 700;
      padding: 12px 20px;
    }
    #indicator {
      position: absolute;
      width: 70px;
      height: 52px;
      background-color: #000;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      transition: 0.5s;
    }
    #indicator::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: -30px;
      width: 30px;
      height: 20px;
      background-color: transparent;
      border-bottom-right-radius: 20px;
      box-shadow: 5px 5px 0 5px #000;
    }
    #indicator::after {
      content: "";
      position: absolute;
      bottom: 0;
      right: -30px;
      width: 30px;
      height: 20px;
      background-color: transparent;
      border-bottom-left-radius: 20px;
      box-shadow: -5px 5px 0 5px #000;
    }
  }
`;

const Navbar: React.FC = () => {
  const { isDesktop } = useQuery();
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: "0px",
    width: "0px",
  });
  useLayoutEffect(() => {
    const activeLink = document.querySelector(
      "nav a:first-of-type"
    ) as HTMLElement | null;
    if (activeLink) {
      setIndicatorStyle({
        left: `${activeLink.offsetLeft}px`,
        width: `${activeLink.offsetWidth}px`,
      });
    } else {
      console.error("The first link was not found");
    }
  }, []);

  const handleLinkBg = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget;
    setIndicatorStyle({
      left: `${target.offsetLeft}px`,
      width: `${target.offsetWidth}px`,
    });
  };
  return !isDesktop ? (
    <NavbarStyles>
      <HashLink to='/'>Logo</HashLink>
      <nav>
        <div id='indicator' style={indicatorStyle} />
        {NavbarData.map(({ to, text }) => (
          <HashLink onClick={handleLinkBg} key={text} to={to}>
            {text}
          </HashLink>
        ))}
      </nav>
    </NavbarStyles>
  ) : (
    <MobNavbar />
  );
};

export default Navbar;
