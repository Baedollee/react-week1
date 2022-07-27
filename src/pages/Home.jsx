import React from 'react';
import styled from 'styled-components';
import Form from '../components/form/Form';
import List from '../components/list/List';
import { useState } from 'react';

const Home = () => {
  const [TodoList, setTodoList] = useState([
    { title: '타이틀', contents: '콘텐츠', done: false },
    { title: '타이틀', contents: '콘텐츠', done: true },
  ]);
  const [Inputform, setInputform] = useState({
    title: '',
    contents: '',
    done: false,
  });

  return (
    <div>
      <Container>
        <div>홈</div>
        <div>react</div>
      </Container>
      <Form
        TodoList={TodoList}
        Inputform={Inputform}
        setTodoList={setTodoList}
        setInputform={setInputform}
      />

      <InputTitle>working</InputTitle>
      <List TodoList={TodoList} setTodoList={setTodoList} />
    </div>
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

const InputTitle = styled.h2`
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`;

export default Home;
