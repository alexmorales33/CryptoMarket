import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBitcoinSign } from '@fortawesome/free-solid-svg-icons' 


const Contain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid
`;

const FontAwesomeIconB = styled(FontAwesomeIcon)`
  font-size: 2rem;
  margin: 0.7rem;
`;

const Header = () => {
  return(
    <Contain>
      <FontAwesomeIconB icon={faBitcoinSign} />
    </Contain>
  )
}

export default Header;
 