import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const Box = styled(motion.div)`
  // Framer-motion과 styled컴포넌트를 사용하는 방법
  height: 200px;
  background-color: whitesmoke;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* display: grid;
  grid-template-columns: repeat(2, 1fr); */
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.6);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50vw;
  gap: 10px;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface IClickedProps {
  clicked: boolean;
  //   setClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

function Card() {
  const [id, setId] = useState<null | string>(null);
  console.log(id);

  return (
    <>
      <Grid>
        {["1", "2", "3", "4"].map((n) => (
          <Box onClick={() => setId(n)} key={n} layoutId={n} />
        ))}
      </Grid>
      <AnimatePresence>
        {id ? (
          <Overlay
            onClick={() => setId(null)}
            initial={{ backgroundColor: " rgba(0,0,0,0) " }}
            animate={{ backgroundColor: " rgba(0,0,0, 0.5) " }}
            exit={{ backgroundColor: " rgba(0,0,0,0) " }}
          >
            <Box layoutId={id} style={{ width: 400, height: 200 }} />
          </Overlay>
        ) : null}
      </AnimatePresence>
    </>
  );
}

export default Card;
