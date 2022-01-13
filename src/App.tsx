import React, { useRef } from 'react';
import styled from "styled-components"
import {GlobalStyle} from "./styles/global-styles"
import { motion } from "framer-motion"

// const myVars = { //motion 설정을 분리해서 오브젝트로 옮김
//   start : {scale:0},
//   end : {scale:1, rotateZ:360,  transition:{delay:0.5, type:"spring",}}
// }

const BoxVariants = { 
  // start : {
  //   opacity:0,
  //   scale:0.5
  // },
  // end : {
  //   scale:1,
  //   opacity:1,
  //   transition: {
  //     type:"spring",
  //     delay:0.5,
  //     duration:0.5,
  //     bounce:0.5,
  //     delayChildren:1,
  //     staggerChildren:0.5
  //   }
  // }
  hover : {scale:1.5, rotateZ:90},
  click : {borderRadius:"100px", scale:1},
  drag : {backgroundColor:"rgba(46, 204, 113,1.0)", transition: {duration : 10}}
}

const CircleVars = {
  start : {
    opacity:0,
    y:10

  },
  end: {
    opacity:1,
    y:0,
  },
}


function App() {
  const biggerBoxRef = useRef<HTMLDivElement>(null)
  return (
    <>
      <GlobalStyle/>
      <Wrapper>
        <BiggerBox ref={biggerBoxRef}>
        <Box 
          drag 
          dragSnapToOrigin 
          dragElastic={0}
          dragConstraints={biggerBoxRef} 
          variants={BoxVariants} 
          whileHover={"hover"} 
          whileDrag={"drag"} 
          whileTap={"click"}/> 
          {/* 부모요소에 variants가 있을 때 Motion은 default값을 initial과 animate의 이름을 자식에게 복사해서 붙여넣는다 */}
          {/* <Circle initial="start" animate="end"/> */}
          {/* 그래서 intial="start"와 animate="end"를 또 적어서 전달해줄 필요는 없다 */}
          {/* <Circle variants={CircleVars}/>
          <Circle variants={CircleVars}/>
          <Circle variants={CircleVars}/>
          <Circle variants={CircleVars}/> */}
        </BiggerBox>
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
  background-color: rgba(255,255,255,0.2);
  border-radius: 15px;
  /* display: grid;
  grid-template-columns: repeat(2, 1fr); */
  box-shadow: 0 2px 3px rgba(0,0,0,0.1), 0 10px 20px rgba(0,0,0,0.6);
`

const Circle = styled(motion.div) `
  background-color: white;
  place-self: center;
  box-shadow: 0 2px 3px rgba(0,0,0,0.1), 0 10px 20px rgba(0,0,0,0.6);
  height: 70px;
  width: 70px;
  border-radius: 50%;
`
const BiggerBox = styled.div`
  width: 600px;
  height: 500px;
  background-color: rgba(255,255,255,0.2);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

export default App;
