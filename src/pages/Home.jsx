import React from 'react';
import styled from 'styled-components';
import Form from '../components/form/Form';
import Todo from '../components/todo/Todo';
import Done from '../components/done/Done';
import Head from '../components/head/Head';
import { useState } from 'react';

const Home = () => {
  const [todoList, setTodoList] = useState([
    { id: 0, title: '타이틀', contents: '콘텐츠', done: false },
    { id: 1, title: '타이틀', contents: '콘텐츠', done: true },
  ]);
  const [inputForm, setInputForm] = useState({
    title: '',
    contents: '',
    done: false,
  });

  return (
    <div>
      <Head />
      <Form
        todoList={todoList}
        inputForm={inputForm}
        setTodoList={setTodoList}
        setInputForm={setInputForm}
      />

      <InputTitle>working</InputTitle>
    </div>
  );
};

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
