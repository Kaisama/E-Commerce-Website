import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { Button } from '../styles/Button';

const HeroSection = ({myData}) => {
    const {name}=myData;

  return (
    <Wrapper>
        <div className='container'>
            <div className='grid grid-two-column'>
                <div className='hero-section-data'>
                    <p className='intro-data'>Welcome to</p>
                    <h1>{name}</h1>
                    <p>
                        lorem10sadfg wsdfg ADSVFG waedfg sadfg aesdfg
                    </p>
                    <NavLink to='/products'>
                        <Button>Shop Now</Button>
                    </NavLink>
                </div>
                    <div className='hero-section-image'>
                        <figure>
                            <img src='images/hero.jpg' alt='hero-section-image' className='img-style'/>
                        </figure>
                    </div>
            </div>
        </div>
    </Wrapper>
  )
}
const Wrapper=styled.section`
.container {
    max-width: 120rem;
    margin: 0 auto;
  }
  
  .grid {
    display: grid;
    gap: 9rem;
  }
  
  .grid-two-column {
    grid-template-columns: repeat(2, 1fr);
  
  }
  .intro-data {
    margin-bottom: 0;
    text-transform: uppercase;
    color: #5138ee;
  }

padding: 12rem 0;

img {
  min-width: 10rem;
  height: 10rem;
}

.hero-section-data {
  p {
    margin: 2rem 0;
  }

  h1 {
    text-transform: capitalize;
    font-weight: bold;
  }

  .intro-data {
    margin-bottom: 0;
  }
}

.hero-section-image {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
figure {
  position: relative;

  &::after {
    content: "";
    width: 60%;
    height: 80%;
    background-color: rgba(81, 56, 238, 0.4);
    position: absolute;
    left: 50%;
    top: -5rem;
    z-index: -1;
  }
}
.img-style {
  width: 100%;
  height: auto;
}



`;

export default HeroSection