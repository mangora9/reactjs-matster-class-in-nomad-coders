import React from 'react';
import {Draggable} from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div`
  background-color: ${(props) => props.theme.boardColor};
  padding: 10px;
  background-color: ${(props) => props.theme.cardColor};
  margin-bottom: 5px;
`;

interface IDraggableCardProps {
  toDo: string;
  index: number;
}

const DraggableCard = ({toDo, index}: IDraggableCardProps) => {
  console.log(`${toDo} -> toDo has been rendered`);
  return (
    <Draggable draggableId={toDo} index={index} key={toDo}>
      {
        (magic) =>
          <Card
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
