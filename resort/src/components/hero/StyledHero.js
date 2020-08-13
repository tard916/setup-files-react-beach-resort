import styled from 'styled-components';
import defaultImg from '../../images/room-1.jpeg';

const SimpledHero = styled.header`
  min-height: 66vh;
  background: url(${props => props.img? props.img : defaultImg}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default SimpledHero;
