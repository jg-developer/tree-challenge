import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button';

import { Container, Content } from './styles';

const Home: React.FC = () => {
  const history = useHistory();
  return (
    <Container data-testid="home">
      <Content>
        <h1>Desafio de Frontend</h1>
        <h3>Requisitos</h3>
        <ul>
          <li>
            Para cada item, o usuário deve poder marcar o checkbox dessa linha.
          </li>
          <li>
            Para cada item que tenha filhos (ou seja, um item pai), quando o
            usuário marcar ou desmarcar o checkbox, o estado deve ser cascateado
            a todos os seus descendentes.
          </li>
          <li>
            Para cada item que tenha filhos (ou seja, um item pai), quando o
            usuário marcar apenas algum(ns) filho(s), o estado do checkbox pai
            deve ser alterado para <code>indeterminate</code>
          </li>
          <li>
            Para cada item que seja um item pai, o usuário deve ser capaz de
            mostrar ou esconder os itens internos.
          </li>
        </ul>
        <h3>Tecnologias utilizadas</h3>
        <ul>
          <li>React</li>
          <li>Typescript</li>
          <li>Styled components</li>
          <li>Redux Toolkit</li>
          <li>React testing library</li>
        </ul>
      </Content>
      <Button
        style={{ marginTop: 20, fontWeight: 600, fontSize: '1rem' }}
        onClick={() => history.push('/resolucao')}
      >
        ver resolução
      </Button>
    </Container>
  );
};

export default Home;
