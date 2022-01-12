import React from 'react';
import styled from "styled-components"
import {GlobalStyle} from "./styles/global-styles"
import {motion } from "framer-motion"

function App() {
  return (
    <>
      <GlobalStyle/>
      <Wrapper>
        <Box
          transition={{delay:0.5, type:"spring", }} 
          initial={{scale:0}}  
          animate={{scale:1, rotateZ:360}}/>
      </Wrapper>
    </>
  );
}

const Wrapper  = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Box = styled(motion.div)` // Framer-motion과 styled컴포넌트를 사용하는 방법
  width: 200px;
  height: 200px;
  background-color: red;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0,0,0,0.1), 0 10px 20px rgba(0,0,0,0.6);
`

export default App;
