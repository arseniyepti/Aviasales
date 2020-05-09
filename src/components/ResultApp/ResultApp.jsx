import React from 'react';
import { uniqueId } from 'lodash';
import Buttons from '../Buttons/Buttons';
import Ticket from '../Ticket/Ticket';
import Checkboxes from '../Checkboxes/Checkboxes';
import axiosInstance from '../../helpers/axiosInstance';
import { Form, Title, FormWrap, Wrapper } from '../../styled/ticketFilterStyled';
import {
  setControlledCheckbox,
  setControlledCheckboxAlltransfers,
  filterTransfers,
} from '../../helpers/helpers';

export default class ResultApp extends React.Component {
  state = {
    activeBtn: 'cheapest',
    tickets: [],
    checkboxValues: [
      {
        transfers: 'Все',
        checkboxId: 'AllTransfers',
        filterId: 'All',
        checked: false,
      },
      {
        transfers: 'Без пересадок',
        checkboxId: 'WithoutTransfers',
        filterId: 0,
        checked: false,
      },
      {
        transfers: '1 пересадка',
        checkboxId: 'oneTransfer',
        filterId: 1,
        checked: false,
      },
      {
        transfers: '2 пересадки',
        checkboxId: 'twoTransfers',
        filterId: 2,
        checked: false,
      },
      {
        transfers: '3 пересадки',
        checkboxId: 'threeTransfers',
        filterId: 3,
        checked: false,
      },
    ],
  };

  async componentDidMount() {
    const {
      data: { searchId },
    } = await axiosInstance.get('/search');
    this.getTickets(searchId);
  }

  getId = ({ target }) => {
    const { id, checked } = target;
    this.setState(
      ({ checkboxValues }) => ({
        checkboxValues: setControlledCheckbox(checkboxValues, checked, id),
      }),
      () => {
        this.setState(({ checkboxValues }) => ({
          checkboxValues: setControlledCheckboxAlltransfers(checkboxValues, checked),
        }));
      }
    );
  };

  getTickets = async (searchId) => {
    const { tickets } = this.state;
    try {
      const { data } = await axiosInstance.get(`/tickets?searchId=${searchId}`);
      this.setState({
        tickets: tickets.concat(data.tickets),
      });
      if (!data.stop) {
        this.getTickets(searchId);
      }
    } catch (error) {
      this.getTickets(searchId);
    }
  };

  handleChangeActiveBtn = ({ target: { id } }) => {
    this.setState({
      activeBtn: id,
    });
  };

  renderTickets = () => {
    const { tickets, activeBtn, checkboxValues } = this.state;
    const array = filterTransfers(tickets, activeBtn, checkboxValues);
    return array.slice(0, 5).map(({ segments, carrier, price }) => {
      return <Ticket key={uniqueId()} carrier={carrier} price={price} segments={segments} />;
    });
  };

  render() {
    const { activeBtn, checkboxValues } = this.state;
    return (
      <FormWrap>
        <Form>
          <Title>Количество пересадок</Title>
          <Checkboxes getId={this.getId} checkboxValues={checkboxValues} />
        </Form>
        <Wrapper>
          <Buttons activeBtn={activeBtn} handleChangeActiveBtn={this.handleChangeActiveBtn} />
          {this.renderTickets()}
        </Wrapper>
      </FormWrap>
    );
  }
}
