import styled from 'styled-components';
import { Button } from '../button';
import React from 'react';

export const Quotes = (props) => {
    const{quote,speaker,onUpdate} = props
    return (
        <Wrapper>
        <Quote>"{quote}"</Quote>
        <Speaker>- {speaker}</Speaker>
        <Button onClick={onUpdate}>Quote No Jutsu</Button>
        </Wrapper>
  );
};


const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Quote = styled.p`
  font-size: 2em;
  text-shadow: rgba(0, 0, 0, 0.2) 1px 1px 1px;
  flex: 1;
  margin: 0;
`;

const Speaker = styled(Quote)`
  text-align: right;
  width: 100%;
  margin-bottom: 50px;
`;