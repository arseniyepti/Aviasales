import React from 'react';
import { uniqueId } from 'lodash';
import Buttons from '../Buttons/Buttons';
import instance from '../helpers/axiosInstance';
import {
  Form,
  Title,
  Checkbox,
  Label,
  Wrap,
  FormWrap,
  Wrapper,
} from '../../styled/ticketFilterStyled';
import TicketResult from '../TicketResult/TicketResult';

export default class TicketFilter extends React.Component {
  state = {
    activeLeftBtn: true,
    activeRightBtn: false,
    tickets: [],
    checkboxId: [],
  };

  async componentDidMount() {
    const {
      data: { searchId },
    } = await instance.get('/search');
    this.getTickets(searchId);
  }

  getTickets = async (searchId) => {
    const { tickets } = this.state;
    try {
      const { data } = await instance.get(`/tickets?searchId=${searchId}`);
      this.setState({
        tickets: tickets.concat(data.tickets),
      });
      if (!data.stop) {
        this.getTickets(searchId);
      }
    } catch (event) {
      if (event) {
        this.getTickets(searchId);
      }
    }
  };

  handleChangeActiveBtn = () => {
    this.setState(({ activeLeftBtn, activeRightBtn }) => ({
      activeLeftBtn: !activeLeftBtn,
      activeRightBtn: !activeRightBtn,
    }));
  };

  getId = ({ target }) => {
    const { checkboxId } = this.state;
    const targetId = parseFloat(target.id);
    this.setState({
      checkboxId: target.checked
        ? [...checkboxId, targetId]
        : checkboxId.filter((id) => id !== targetId),
    });
  };

  renderTickets = (array) => {
    return array.map(({ segments, carrier, price }, i) => {
      if (i < 5) {
        return (
          <TicketResult key={uniqueId()} carrier={carrier} price={price} segments={segments} />
        );
      }
      return null;
    });
  };

  filterTransfers = () => {
    const { tickets, activeLeftBtn, checkboxId } = this.state;
    const fastCheapTickets = tickets.sort((one, two) => {
      if (activeLeftBtn) {
        return one.price - two.price;
      }
      return (
        one.segments[0].duration +
        one.segments[1].duration -
        (two.segments[0].duration + two.segments[1].duration)
      );
    });
    const filteredTickets = fastCheapTickets.filter(({ segments }) => {
      return (
        checkboxId.includes(segments[0].stops.length) ||
        checkboxId.includes(segments[1].stops.length)
      );
    });
    const array =
      checkboxId.length !== 0 && !checkboxId.includes(4) ? filteredTickets : fastCheapTickets;
    return this.renderTickets(array);
  };

  render() {
    const { activeLeftBtn, activeRightBtn } = this.state;
    return (
      <FormWrap>
        <Form>
          <Title>Количество пересадок</Title>
          <Wrap>
            <Checkbox onChange={this.getId} type="checkbox" id="4" />
            <Label htmlFor="4">Все</Label>
          </Wrap>
          <Wrap>
            <Checkbox onChange={this.getId} type="checkbox" id="0" />
            <Label htmlFor="0">Без пересадок</Label>
          </Wrap>
          <Wrap>
            <Checkbox onChange={this.getId} type="checkbox" id="1" />
            <Label htmlFor="1">1 пересадка</Label>
          </Wrap>
          <Wrap>
            <Checkbox onChange={this.getId} type="checkbox" id="2" />
            <Label htmlFor="2">2 пересадки</Label>
          </Wrap>
          <Wrap>
            <Checkbox onChange={this.getId} type="checkbox" id="3" />
            <Label htmlFor="3">3 пересадки</Label>
          </Wrap>
        </Form>
        <Wrapper>
          <Buttons
            activeLeftBtn={activeLeftBtn}
            activeRightBtn={activeRightBtn}
            handleChangeActiveBtn={this.handleChangeActiveBtn}
          />
          {this.filterTransfers()}
        </Wrapper>
      </FormWrap>
    );
  }
}
