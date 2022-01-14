import {useState} from 'react'
import styled from 'styled-components';
import {motion, AnimatePresence} from "framer-motion"

//AnimatePresence : 컴포넌트가 사라질 때 애니메이션 동작을 지시

const Box = styled(motion.div)` // Framer-motion과 styled컴포넌트를 사용하는 방법
  width: 200px;
  height: 200px;
  background-color: rgba(255,255,255,0.2);
  border-radius: 40px;
  /* display: grid;
  grid-template-columns: repeat(2, 1fr); */
  box-shadow: 0 2px 3px rgba(0,0,0,0.1), 0 10px 20px rgba(0,0,0,0.6);
  position: absolute;
  top:10px;
`

const BoxVariants = {
    //AnimatePresence variants는 조금다르다
    initial : {
        opacitiy:0,
        scale:0,
    },
    visiable : {
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


function AnimatePresenceEx() {

    const [showing, setShowing] = useState(false);
    const toggleShowing = () => setShowing((prev) => !prev)
  
    return (
        //AnimatePresence의 한가지 규칙은 visible 상태여야 한다.
        //children으로 조건문이 있어야 한다
        <>
            <AnimatePresence>
                {showing ? <Box variants={BoxVariants} initial="initial" animate="visiable" exit="exit"/> : null}
            </AnimatePresence>
            {/* {showing ?  <AnimatePresence><Box/></AnimatePresence> : null} 
                --> 이렇게 만들면 안된다. 보여야함 
                왜냐하면 </AnimatePresence>는 안쪽에 사라지는 것을 감지하고 그것을 animate시켜준다
            */}
            <button onClick={toggleShowing}>Click??</button>
        </>

    )
}

export default AnimatePresenceEx
