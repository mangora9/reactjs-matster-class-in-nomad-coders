import React from 'react';
import {Droppable} from "react-beautiful-dnd";
import DraggableCard from "./DraggableCard";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 30px 10px 20px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 200px;
`;

interface IBoardProps {
  toDos: string[];
  boardId: string;
}

const Board = ({toDos, boardId}: IBoardProps) => {
  return (

    <Droppable droppableId={boardId}>
      {(magic) =>
        <Wrapper ref={magic.innerRef} {...magic.droppableProps}>
          {
            toDos.map((toDo, index) => <DraggableCard key={toDo} index={index} toDo={toDo}/>
            )}
          {magic.placeholder}
        </Wrapper>
      }
    </Droppable>
  );
};

export default Board;