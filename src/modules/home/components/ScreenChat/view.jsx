import React, { useEffect } from 'react';
import styled from 'styled-components';
import InputMessage from '../../../../components/InputMessage';
import ListMessages from '../../../../components/ListMessages';
import PropTypes from 'prop-types';
import { makeGetActiveRoomId } from '../../store/selector';
import { useDispatch } from 'react-redux';
import { listMessagerequest } from '../../store/actions';

const ScreenChatStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 18px 28px 18px 0;
`;
export default function ScreenChat() {
  const dispatch = useDispatch();
  const activeRoomId = makeGetActiveRoomId();

  useEffect(() => {
    if (!activeRoomId) return;
    dispatch(listMessagerequest(activeRoomId));
  }, [activeRoomId]);

  return (
    <ScreenChatStyled className='col-8'>
      <div className='screen-chat__wrap'>
        {/* <NavScreenChat roomSelect={roomSelect} /> */}
        <div className='wrap-content'>
          <ListMessages />
          <InputMessage />
        </div>
      </div>
    </ScreenChatStyled>
  );
}

ScreenChat.propTypes = {
  roomProfile: PropTypes.object,
  props: PropTypes.object,
  match: PropTypes.object,
};

ScreenChat.defaultProps = {};
