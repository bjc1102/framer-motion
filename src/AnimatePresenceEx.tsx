import {useState} from 'react'
import styled from 'styled-components';
import {motion, AnimatePresence} from "framer-motion"

//AnimatePresence : 컴포넌트가 사라질 때 애니메이션 동작을 지시

export const Box = styled(motion.div)` // Framer-motion과 styled컴포넌트를 사용하는 방법
  width: 200px;
  height: 200px;
  background-color: rgba(255,255,255,0.2);
  border-radius: 40px;
  position: absolute;
  top:100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`

const BoxVariants = {
    //AnimatePresence variants는 조금다르다
    initial : {
        opacitiy:0,
        scale:0,
    },
    animate : {
        opacity:1,
        scale:1,
        rotateZ:360,
    },
    exit : {
        opacity:0,
        scale:0,
        y:100,
    }
}

const BoxSlide = { // 이 Box는 slide를 만들기 위한 Box
    entry : (back:boolean) => {
        return {
            x: back ? -500 : 500,
            opacity:0,
            scale:0
        }
    },
    center : {
        x:0,
        opacity:1,
        scale:1,
        transition: {
            duration:0.3
        }
    },
    exit : (back:boolean) => ({
        x: back ? 500 : -500,
        opacity:0,
        scale:0,
        transition: {
            duration:0.3
        }
    })
}


function AnimatePresenceEx() {

    const [showing, setShowing] = useState(false);
    const toggleShowing = () => setShowing((prev) => !prev)
    const [visible, setVisible] = useState(1);
    const [back, setBack] = useState(false);
    const nextPlease = () => {
        setBack(false)
        setVisible(prev=> prev === 10 ? 1: prev+1)
    };
    const prevPlease = () => {
        setBack(true)
        setVisible(prev=> prev === 1 ? 10 : prev-1)
    }


  
    return (
        //AnimatePresence의 한가지 규칙은 visible 상태여야 한다.
        //children으로 조건문이 있어야 한다
        <>
            <AnimatePresence exitBeforeEnter custom={back}>
                <Box custom={back} variants={BoxSlide} initial="entry" animate="center" exit={"exit"} key={visible}>{visible}</Box>
            </AnimatePresence>
            {/* {showing ?  <AnimatePresence><Box/></AnimatePresence> : null} 
                --> 이렇게 만들면 안된다. 보여야함 
                왜냐하면 </AnimatePresence>는 안쪽에 사라지는 것을 감지하고 그것을 animate시켜준다
            */}
            <button onClick={nextPlease}>next</button>
            <button onClick={prevPlease}>prev</button>
        </>

    )
}

export default AnimatePresenceEx
