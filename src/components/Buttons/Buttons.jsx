import React from 'react';
import PropTypes from 'prop-types';
import { ButtonLeft, ButtonRight, WrapButton } from '../../styled/ticketFilterStyled';

const Buttons = ({ activeLeftBtn, activeRightBtn, handleChangeActiveBtn }) => {
  return (
    <WrapButton>
      <ButtonLeft activeLeftBtn={activeLeftBtn} onClick={handleChangeActiveBtn}>
        Самый дешевый
      </ButtonLeft>
      <ButtonRight activeRightBtn={activeRightBtn} onClick={handleChangeActiveBtn}>
        Самый быстрый
      </ButtonRight>
    </WrapButton>
  );
};

Buttons.propTypes = {
  activeLeftBtn: PropTypes.bool.isRequired,
  activeRightBtn: PropTypes.bool.isRequired,
  handleChangeActiveBtn: PropTypes.func.isRequired,
};

export default Buttons;
