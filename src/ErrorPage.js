import React from 'react'
import styled from 'styled-components'
import { Button } from './styles/Button';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
  return (
   <Wrapper>
      <div className='container'>
        <div>
          <h2>404</h2>
          <h2>You Lost</h2>
          <NavLink to="/">
          <Button>Go Back</Button>
          </NavLink>
          
        </div>
      </div>
   </Wrapper>
  )
}
const Wrapper=styled.section`

`;
export default ErrorPage