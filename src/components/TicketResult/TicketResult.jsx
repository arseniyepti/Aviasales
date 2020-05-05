import React from 'react';
import PropTypes from 'prop-types';
import {
  CompanyLogo,
  InfoChangeMod,
  ColumnWrap,
  Info,
  Price,
  InfoChange,
  Ticket,
} from '../../styled/ticketResultStyled';
import { getFlyTime, convertMinutes, formatTransfers } from '../helpers/helpers';

const TicketResult = ({ carrier, price, segments }) => {
  return (
    <Ticket>
      <ColumnWrap>
        <Price>{price}</Price>
        <Info>{`${segments[0].origin} - ${segments[0].destination}`}</Info>
        <InfoChange>{getFlyTime('origin', segments)}</InfoChange>
        <Info>{`${segments[1].origin} - ${segments[1].destination}`}</Info>
        <InfoChange>{getFlyTime(null, segments)}</InfoChange>
      </ColumnWrap>
      <ColumnWrap>
        <Info>В пути</Info>
        <InfoChangeMod>{convertMinutes('origin', segments)}</InfoChangeMod>
        <Info> В пути</Info>
        <InfoChangeMod>{convertMinutes(null, segments)}</InfoChangeMod>
      </ColumnWrap>
      <ColumnWrap>
        <CompanyLogo
          src={`http://pics.avs.io/99/36/${carrier}.png`}
          alt="лого авиа компании"
          carrier={carrier}
        />
        <Info>{formatTransfers('origin', segments)}</Info>
        <InfoChange>{segments[0].stops.join(', ')}</InfoChange>
        <Info>{formatTransfers(null, segments)}</Info>
        <InfoChange>{segments[1].stops.join(', ')}</InfoChange>
      </ColumnWrap>
    </Ticket>
  );
};

TicketResult.propTypes = {
  carrier: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  segments: PropTypes.instanceOf(Array).isRequired,
};

export default TicketResult;
