import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <h1>Привет!</h1>
            <h5>Мы работаем с 2018 года в 15 городах России</h5>
            <p>
              Благодаря нам вы можете не только избавляться от ненужной старой техники, но также и приобретать б/у технику по низким ценам.
            </p>
          </HeroLeft>
          <HeroRight>
            <Image
              src="https://cdn-icons-png.flaticon.com/512/7139/7139363.png"
              alt="man-svgrepo"
            />
          </HeroRight>
        </HeroWrapper>
        <ScrollDown to="projects">
          <ScrollLink>
            Вниз
            <img
              src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/scroll-down.svg"
              alt="scroll-down"
            />
          </ScrollLink>
        </ScrollDown>
      </HeroContainer>
    </main>
  );
}

export default Hero;
