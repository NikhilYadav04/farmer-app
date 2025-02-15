import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import styled from 'styled-components';

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10rem auto;
  gap: 6.2rem;
`;

export default function AppLayout() {
  return (
    <>
      <Navbar />
      <StyledMain>
        <Outlet />
      </StyledMain>
    </>
  );
}
