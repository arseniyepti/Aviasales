import React from 'react';
import { uniqueId } from 'lodash';
import { Checkbox, Label, Wrap } from '../../styled/ticketFilterStyled';

const Checkboxes = ({ checkboxValues, getId }) => {
  return checkboxValues.map(({ transfers, checkboxId, checked }) => {
    return (
      <Wrap key={uniqueId()}>
        <Checkbox checked={checked} onChange={getId} type="checkbox" id={checkboxId} />
        <Label htmlFor={checkboxId}>{transfers}</Label>
      </Wrap>
    );
  });
};

export default Checkboxes;
