"use client";

import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link"; // Keep the import for Link

// Toolbar container with the orange gradient
const ToolbarWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 2rem;
  background: linear-gradient(90deg, #ff9800 0%, #ff9800 100%); /* Orange background */
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1200;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 1100px) {
    display: none;
  }
`;

// --- FIX #1: Style the Link component directly ---
const NavLink = styled(Link)`
  color: #ff9800;
  background-color: #000000;
  text-decoration: none;
  font-family: "Montserrat", Arial, sans-serif;
  font-weight: 600;
  font-size: 1.2rem;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  border: 1px solid transparent;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;

  &:hover,
  &:visited,
  &:active {
    text-decoration: none;
    background: linear-gradient(90deg, #333 0%, #444 100%);
    color: #ff9800;
    border: 1px solid #ff9800;
    transform: translateY(-2px);
  }
`;

const BurgerIcon = styled.div<{ $isOpen: boolean }>`
  display: none;
  flex-direction: column;
  gap: 6px;
  cursor: pointer;
  padding: 10px;
  z-index: 1201;

  @media (max-width: 1100px) {
    display: flex;
  }

  div {
    width: 30px;
    height: 6px;
    background-color: #000000;
    border-radius: 3px;
    transition: all 0.3s ease-in-out;
  }

  div:nth-child(1) {
    transform: ${({ $isOpen }) => ($isOpen ? "rotate(45deg) translate(8px, 8px)" : "rotate(0)")};
  }
  div:nth-child(2) {
    opacity: ${({ $isOpen }) => ($isOpen ? "0" : "1")};
  }
  div:nth-child(3) {
    transform: ${({ $isOpen }) => ($isOpen ? "rotate(-45deg) translate(8px, -8px)" : "rotate(0)")};
  }
`;

const Menu = styled.div<{ $isMenuOpen: boolean }>`
  display: ${({ $isMenuOpen }) => ($isMenuOpen ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(255, 152, 0, 0.95);
  backdrop-filter: blur(12px);
  z-index: 1100;
  animation: fadeIn 0.3s ease-in-out;
  overflow-y: auto;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @media (min-width: 1101px) {
    display: none;
  }
`;

const MenuItemsWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem 0;
`;

// --- FIX #2: Style the Link component for mobile menu items too ---
const MenuItem = styled(Link)`
  font-family: "Montserrat", Arial, sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: #ffffff;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  padding: 0.75rem 1.5rem;
  letter-spacing: 2px;
  text-decoration: none;
  border-radius: 6px;
  border: 1px solid transparent;
  background-color: #000000;

  &:hover,
  &:visited,
  &:active {
    text-decoration: none;
    color: #ff9800;
    transform: scale(1.1);
    background: linear-gradient(90deg, #333 0%, #444 100%);
    border: 1px solid #ff9800;
  }

  @media (max-width: 768px) { font-size: 1.5rem; }
  @media (max-width: 480px) { font-size: 1.2rem; padding: 0.5rem 1rem; }
`;

const Logo = styled.h1`
  color: #ff9800;
  background-color: #000000;
  padding: 0.5rem 1rem;
  margin: 0;
  font-family: "Montserrat", Arial, sans-serif;
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: linear-gradient(90deg, #333 0%, #444 100%);
    color: #ff9800;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) { font-size: 1.5rem; }
  @media (max-width: 480px) { font-size: 1.2rem; }
`;

export default function Toolbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleBurgerClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleTabClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <ToolbarWrapper>
        <Link href="/" passHref>
          <Logo>Studio 51</Logo>
        </Link>
        <NavLinks>
          {/* --- FIX #3: Simplified JSX --- */}
          {/* No more wrapping Link or passHref. The component IS the link. */}
          <NavLink href="#about">Om Oss</NavLink>
          <NavLink href="#events">Arrangementer</NavLink>
          <NavLink href="#contact">Kontakt</NavLink>
        </NavLinks>
        <BurgerIcon onClick={handleBurgerClick} $isOpen={isMenuOpen}>
          <div />
          <div />
          <div />
        </BurgerIcon>
      </ToolbarWrapper>

      <Menu $isMenuOpen={isMenuOpen}>
        <MenuItemsWrapper>
          {/* --- FIX #4: Simplified JSX for mobile menu --- */}
          <MenuItem href="#about" onClick={handleTabClick}>
            Om Oss
          </MenuItem>
          <MenuItem href="#events" onClick={handleTabClick}>
            Arrangementer
          </MenuItem>
          <MenuItem href="#contact" onClick={handleTabClick}>
            Kontakt
          </MenuItem>
        </MenuItemsWrapper>
      </Menu>
    </>
  );
}
