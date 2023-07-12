import {useState, useEffect, useRef} from 'react'
import styled from 'styled-components';
import narutoImg from '../src/images/naruto.png'
import React from "react"
import { Quotes } from './components/quotes/Quotes';
import { getQuote } from './components/services/quoteServices/quotesServices'; 
import JutsuSound from '../src/sounds/jutso.mp3'


const audio = new Audio(JutsuSound);

const App = (()=>{
   
    const isMounted = useRef(true)

    const [quoteState, setQuoteState] = useState({quote: 'Loading...', speaker:'Loading...'}) 

    const onUpdate = async() =>{
      const recebe = await getQuote()

      if(isMounted){
        audio.play();
        setQuoteState(recebe)
        console.log('teste')
      }
      
  };

    useEffect(()=>{
      onUpdate();
      
      return ()=>{
        isMounted.current = false
        
      }
        
    },[]);
                 
    return (
      <Content>
        <Quotes quote={quoteState.quote} speaker={quoteState.speaker} onUpdate={onUpdate}/>
        <NarutoImg src={narutoImg} alt="Imagem Naruto com a kunai"/>
      </Content>
        
      )
});

export default App


const Content = styled.div`
  height:100vh;
  padding: 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NarutoImg = styled.img`
  max-width: 50vw;
  align-self: flex-end;

`;