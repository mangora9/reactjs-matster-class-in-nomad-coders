import styled from "styled-components";
import {motion, useMotionValue, useTransform} from "framer-motion";
import {useEffect} from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  const x = useMotionValue(0);
  const transformX = useTransform(x, [-800, 0, 800], [0.1, 1, 2]);
  // useEffect(() => {
  // }, [x]);

  console.log(`-> x`, x);
  return (
    <Wrapper>
      <button onClick={() => x.set(200)}>click me</button>
      <Box
        style={{x, scale: transformX}}
        drag="x"
        dragSnapToOrigin
      />
    </Wrapper>
  );
}

export default App;