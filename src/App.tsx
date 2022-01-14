import React, { useEffect, useRef, useState } from 'react';
import styled from "styled-components"
import {GlobalStyle} from "./styles/global-styles"
import { motion, useMotionValue, useTransform, useViewportScroll } from "framer-motion"
import SVG from './SVG';
import AnimatePresenceEx from './AnimatePresenceEx';


function App() {

  const [showing, setShowing] = useState(false);
  const toggleShowing = () => setShowing((prev) => !prev)

  return (
    <>
      <GlobalStyle/>
      <Wrapper>
        <AnimatePresenceEx/>
      </Wrapper>
    </>
  );
}

const Wrapper  = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  background-color: rgb(68, 68, 68);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
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



  


    // ********* useMotionvalue *********
    // ********* useTransform *********

    // const xDrag = useMotionValue(0); 이 x는 x값을 받아오기
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


    // ******** Scroll Effect
      
    // useEffect(()=> {
    //   x.onChange(() => console.log(xDragScale))
    // },[])
    // Framer-motion은 기본적으로 값이 변할 때 rerender되지 않는다

    // const {scrollYProgress} = useViewportScroll();
    // const scale = useTransform(scrollYProgress, [0, 1], [1,5])

    // useEffect(()=> {
    //   scrollY.onChange(() => {
    //     console.log(scrollY.get(), scrollYProgress.get())
    //     //Y : 픽셀, Progress : 퍼센트반환
    //   });
    // }, [])