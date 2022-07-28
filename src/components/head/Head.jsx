import React from 'react';
import styled from 'styled-components';

const Head = () => {
  return (
    <Container>
      <div>홈</div>
      <div>react</div>
    </Container>
  );
};

const Container = styled.div`
  align-items: center;
  border: 1px solid #ddd;
  display: flex;
  height: 50px;
  justify-content: space-between;
  padding: 0 20px;
`;
export default Head;
