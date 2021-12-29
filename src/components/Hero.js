import React from "react";
import {PrismicRichText} from "@prismicio/react";
import styled from "styled-components";

const HeroSection = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url('${props => props.backgroundImage}') no-repeat center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  height: ${props => props.theme.height};

  text-align: center;

  div {
    max-width: 960px;
    margin: auto 0;
   /* background: rgba(0, 0, 0, 0.25);*/
    font-size: 1.2em;
    padding: 2rem;
  }
`;

const defaultTheme = {
    height: "calc(100vh - 66px)",
};

const Hero = ({ title, content, backgroundImage, theme }) => {
    return (
        <HeroSection
            backgroundImage={backgroundImage}
            theme={!!theme ? theme : defaultTheme}>
            <div>
                <PrismicRichText field={title} />
                <p>{content}</p>
            </div>
        </HeroSection>
    );
};

export default Hero;