import React from "react";
import {DragDropContext, Droppable, DropResult} from 'react-beautiful-dnd';
import styled from "styled-components";
import {useRecoilState} from "recoil";
import {toDoState} from "./atoms";
import DraggableCard from "./Components/DraggableCard";

const Wrapper = styled.div`
  display: flex;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
`;
const Board = styled.div`
  padding: 30px 10px 20px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 200px;
`;


function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = ({draggableId, destination, source}: DropResult) => {
    if (!destination) {
      return;
    }

    setToDos((oldToDos => {
      const copyToDos = [...oldToDos];
      // 1. Delete item on source.index
      copyToDos.splice(source.index, 1);

      // 2. Put back the item on the destination.index
      console.log(`-> destination.index`, destination.index);
      copyToDos.splice(destination?.index, 0, draggableId);
      return copyToDos;
    }));
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          <Droppable droppableId="one">
            {(magic) =>
              <Board ref={magic.innerRef} {...magic.droppableProps}>
                {
                  toDos.map((toDo, index) => <DraggableCard key={toDo} index={index} toDo={toDo}/>
                  )}
                {magic.placeholder}
              </Board>
            }
          </Droppable>
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;


