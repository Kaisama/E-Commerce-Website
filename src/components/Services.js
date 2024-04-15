import React from 'react'
import styled from 'styled-components';
import { TbTruckDelivery } from 'react-icons/tb'
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from 'react-icons/gi'
import { RiSecurePaymentLine } from 'react-icons/ri'


const Services = () => {
  return (
    <Wrapper>
        <div className='container'>
            <div className='grid grid-three-column'>
                <div className='services-1'>
                    <TbTruckDelivery className="icon"/>
                    <h3>Super fast and save DElivery</h3>
                </div>
            
                 <div className='services-2'>
                    <div className='services-colum-2'>
                    <MdSecurity className="icon"/>
                    <h3>Super fast and save DElivery</h3>
                    </div>
                    <div className='services-colum-2'>
                    <GiReceiveMoney className="icon"/>
                    <h3>Super fast and save DElivery</h3>
                    </div>
                </div>
                <div className='services-3'>
                <RiSecurePaymentLine className="icon"/>
                <h3>Super fast and save DElivery</h3>
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

  
padding: 9rem 0;

.grid {
  gap: 4.8rem;
}
.grid-three-column {
    grid-template-columns: repeat(3, 1fr);
  }

.services-1,
.services-2,
.services-3 {
  width: auto;
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  background: ${({ theme }) => theme.colors.bg};
  text-align: center;
  border-radius: 2rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
}

.services-2 {
  gap: 4rem;
  background-color: transparent;
  box-shadow: none;

  .services-colum-2 {
    background: ${({ theme }) => theme.colors.bg};
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

    div {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }
  }
}

h3 {
  margin-top: 1.4rem;
  font-size: 2rem;
}

.icon {
  /* font-size: rem; */
  width: 8rem;
  height: 8rem;
  padding: 2rem;
  border-radius: 50%;
  background-color: #fff;
  color: #5138ee;
}

`;

export default Services