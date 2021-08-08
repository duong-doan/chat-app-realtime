import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import { makeGetMessageById } from '../../modules/home/store/selector';

const MessageStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 16px;

  img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
    border-radius: 50%;
  }

  p {
    font-size: 16px;
    padding-left: 20px;
    color: #333;
  }

  h5 {
    margin: 0 10px 0 0;
    font-weight: bold;
  }
`;

const useStyles = makeStyles({
  customWrapMess: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
});

export default function Message({ idItem }) {
  const message = makeGetMessageById(idItem);
  const { photoURL, name, text } = message;
  const classes = useStyles();

  return (
    <MessageStyled>
      <div className={classes.customWrapMess}>
        <img src={photoURL} alt='' />
        <h5>{name}</h5>
        <span>14:25</span>
      </div>
      <p>{text}</p>
    </MessageStyled>
  );
}

Message.propTypes = {
  idItem: PropTypes.string.isRequired,
};

Message.defaultProps = {};
