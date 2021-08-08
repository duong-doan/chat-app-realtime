import React from 'react';
import styled from 'styled-components';
import { makeGetDataRoomSelected } from '../../modules/home/store/selector';
import Message from '../Message';

const ListMessagesStyled = styled.div`
  max-height: 700px;
  overflow-y: scroll;
  padding-left: 20px;

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }
`;

export default function ListMessages() {
  const dataRoom = makeGetDataRoomSelected();
  const { ids } = dataRoom;
  console.log('component', dataRoom);

  return (
    <ListMessagesStyled>
      {ids && ids.map((idItem) => <Message key={idItem} idItem={idItem} />)}
    </ListMessagesStyled>
  );
}
