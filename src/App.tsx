import React, { useEffect, useRef } from 'react';
import styled from "styled-components"
import {GlobalStyle} from "./styles/global-styles"
import { motion, useMotionValue, useTransform, useViewportScroll } from "framer-motion"




const Svg = styled.svg`
  width: 300px;
  height: 100px;
  path {
    stroke:white;
    stroke-Width:5;
  }
`

const svg = {
  start: {
     pathLength:0, fill: "rgba(255,255,255,0)"
  },
  end : {
    pathLength:1,
    fill: "rgba(255,255,255,1)",
    transition:{
      default: {duration:5},
      fill:{duration:2, delay:3}
    }
  }
}

function App() {

  // useEffect(()=> {
  //   x.onChange(() => console.log(xDragScale))
  // },[])
  // Framer-motion은 기본적으로 값이 변할 때 rerender되지 않는다

  const {scrollYProgress} = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1,5])

  // useEffect(()=> {
  //   scrollY.onChange(() => {
  //     console.log(scrollY.get(), scrollYProgress.get())
  //     //Y : 픽셀, Progress : 퍼센트반환
  //   });
  // }, [])

  return (
    <>
      <GlobalStyle/>
      <Wrapper>
      <Svg
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512">
          <motion.path
              variants={svg}
              initial="start"
              animate="end"
              fill="transparent"
              d="M224 373.12c-25.24-31.67-40.08-59.43-45-83.18-22.55-88 112.61-88 90.06 0-5.45 24.25-20.29 52-45 83.18zm138.15 73.23c-42.06 18.31-83.67-10.88-119.3-50.47 103.9-130.07 46.11-200-18.85-200-54.92 0-85.16 46.51-73.28 100.5 6.93 29.19 25.23 62.39 54.43 99.5-32.53 36.05-60.55 52.69-85.15 54.92-50 7.43-89.11-41.06-71.3-91.09 15.1-39.16 111.72-231.18 115.87-241.56 15.75-30.07 25.56-57.4 59.38-57.4 32.34 0 43.4 25.94 60.37 59.87 36 70.62 89.35 177.48 114.84 239.09 13.17 33.07-1.37 71.29-37.01 86.64zm47-136.12C280.27 35.93 273.13 32 224 32c-45.52 0-64.87 31.67-84.66 72.79C33.18 317.1 22.89 347.19 22 349.81-3.22 419.14 48.74 480 111.63 480c21.71 0 60.61-6.06 112.37-62.4 58.68 63.78 101.26 62.4 112.37 62.4 62.89.05 114.85-60.86 89.61-130.19.02-3.89-16.82-38.9-16.82-39.58z">
              </motion.path>
      </Svg>
      </Wrapper>
    </>
  );
}

const Wrapper  = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  background-color: rgb(68, 68, 68);
  display: flex;
  justify-content: center;
  align-items: center;
`

const Box = styled(motion.div)` // Framer-motion과 styled컴포넌트를 사용하는 방법
  width: 200px;
  height: 200px;
  background-color: rgba(255,255,255,0.2);
  border-radius: 40px;
  /* display: grid;
  grid-template-columns: repeat(2, 1fr); */
  box-shadow: 0 2px 3px rgba(0,0,0,0.1), 0 10px 20px rgba(0,0,0,0.6);
`

const Circle = styled(motion.div)`
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







    // const myVars = { //motion 설정을 분리해서 오브젝트로 옮김
    //   start : {scale:0},
    //   end : {scale:1, rotateZ:360,  transition:{delay:0.5, type:"spring",}}
    // }

    //*******Variants쓰는 법
    // const BoxVariants = { 
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
      // hover : {scale:1.5, rotateZ:90},
      // click : {borderRadius:"100px", scale:1},
      // drag : {backgroundColor:"rgba(46, 204, 113,1.0)", transition: {duration : 10}}
      // rgba로 지정해야 색깔에 animation이 적용될 수 잇다 
      // }
      // const CircleVars = {
      //   start : {
      //     opacity:0,
      //     y:10
      
      //   },
      //   end: {
      //     opacity:1,
      //     y:0,
      //   },
      // }
      







    // **** 드래그 **** const biggerBoxRef = useRef<HTMLDivElement>(null)
    {/* <BiggerBox ref={biggerBoxRef}>
            <Box
              drag
              dragSnapToOrigin
              dragElastic={0}
              dragConstraints={biggerBoxRef}
              variants={BoxVariants}
              whileHover={"hover"}
              whileDrag={"drag"}
              whileTap={"click"}/>  */
    } {/* 부모요소에 variants가 있을 때 Motion은 default값을 initial과 animate의 이름을 자식에게 복사해서 붙여넣는다 */
    } {/* <Circle initial="start" animate="end"/> */
    } {/* 그래서 intial="start"와 animate="end"를 또 적어서 전달해줄 필요는 없다 */
    } {/* <Circle variants={CircleVars}/>
              <Circle variants={CircleVars}/>
              <Circle variants={CircleVars}/>
              <Circle variants={CircleVars}/> */
    } {/* </BiggerBox> */
    }






    // useMotionvalue ************** const xDrag = useMotionValue(0); 이 x는 x값을 받아오기


    // 위한 MotionValue이다 드래그 할 때마다 rotate됨 const rotateZ = useTransform(xDrag, [-800,
    // 800], [-360, 360]); 드래그할 때마다 색상 바뀜 const backgroundColor =
    // useTransform(xDrag, [-800, 800], ["rgb(0, 0, 0)", "rgb(255, 255, 255)"])
    // style={{background:backgroundColor}}

    //(한가지 값)을 받아와서 (우리가 확인해줬으면 하는 입력값 범위에 따라서) (그에 맞는 범위의 출력값)을 얻을 수 있게 해줌
    //입력값과 출력값의 갯수는 같아야한다 

    {/* <button onClick={()=> x.get()===200 ? x.set(0) : x.set(200)}>Click me</button> */
    } {/* <Box style={{ x:xDrag, rotateZ, scale}}  drag="x" dragSnapToOrigin/> */
    } {/* x:xDrag라고 써도 되지만 const와 전달하는 props명이 같다면 하나로 퉁칠 수 있다
            const x = useMotionValue(0)
            <Box style={{ x, rotateZ}}  drag="x" dragSnapToOrigin/>
            x:xDrag => x  훨씬 간결하게 가능*/
    }