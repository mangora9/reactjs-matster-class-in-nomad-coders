import React from 'react';
import {Draggable} from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div<{ isDragging: boolean }>`
  background-color: ${(props) => props.theme.boardColor};
  padding: 10px;
  background-color: ${(props) => props.isDragging ? '#74b9ff' : props.theme.cardColor};
  margin-bottom: 5px;
  box-shadow: ${props => props.isDragging ? '0px 2px 5px rgba(0, 0, 0, 0.05)' : 'none'};
`;

interface IDraggableCardProps {
  toDo: string;
  index: number;
}

const DraggableCard = ({toDo, index}: IDraggableCardProps) => {
  return (
    <Draggable draggableId={toDo} index={index} key={toDo}>
      {
        (magic, snapshot) =>
          <Card
            isDragging={snapshot.isDragging}
            ref={magic.innerRef}
            {...magic.draggableProps}
            {...magic.dragHandleProps}
          >
            {toDo}
          </Card>
      }
    </Draggable>
  );
};

export default React.memo(DraggableCard);
