import styled from 'styled-components';

export const TicketStyled = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-top: 20px;
  width: 500px;
  height: 195px;
  padding: 10px 20px 20px 20px;
  background-color: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
`;

export const ColumnWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  width: 160px;
`;

export const Price = styled.span`
  display: block;
  \theight: 50px;
  \tfont-size: 24px;
  \tcolor: #2196f3;
`;

export const Info = styled.span`
  display: inline-block;
  height: 20px;
  margin-top: 10px;
  font-size: 12px;
  text-transform: uppercase;
  color: #a0b0b9;
`;
export const InfoChange = styled(Info)`
  margin-top: 0px;
  font-size: 14px;
  color: #4a4a4a;
`;

export const InfoChangeMod = styled(InfoChange)`
  text-transform: lowercase;
`;

export const CompanyLogo = styled.img`
  margin-bottom: auto;
  height: 50px;
`;
