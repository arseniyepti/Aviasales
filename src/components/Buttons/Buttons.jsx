import React, { Component } from 'react';
import { uniqueId } from 'lodash';
import PropTypes from 'prop-types';
import { Button, WrapButton } from '../../styled/ticketFilterStyled';

class Buttons extends Component {
  state = {
    buttons: [
      {
        value: 'Самый дешевый',
        id: 'cheapest',
      },
      {
        value: 'Самый быстрый',
        id: 'fastest',
      },
    ],
  };

  renderButtons = () => {
    const { handleChangeActiveBtn, activeBtn } = this.props;
    const { buttons } = this.state;
    return buttons.map(({ value, id }) => {
      return (
        <Button
          key={uniqueId()}
          id={id}
          activeBtn={activeBtn === id ? activeBtn : null}
          onClick={handleChangeActiveBtn}
        >
          {value}
        </Button>
      );
    });
  };

  render() {
    return <WrapButton>{this.renderButtons()}</WrapButton>;
  }
}

Buttons.propTypes = {
  activeBtn: PropTypes.string.isRequired,
  handleChangeActiveBtn: PropTypes.func.isRequired,
};
export default Buttons;
