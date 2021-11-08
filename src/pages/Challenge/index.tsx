/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import ArrowLeftIcon from '../../assets/arrow-left.svg';
import RefreshIcon from '../../assets/refresh.svg';
import ErrorImage from '../../assets/error.svg';

import { Container, Content, ErrorInfo } from './styles';
import Tree, { TreeDataProps } from '../../components/Tree';
import Placeholder from '../../components/Placeholder';
import Button from '../../components/Button';

interface responseDataProps {
  data: TreeDataProps | null;
}

const Challenge: React.FC = () => {
  const [data, setData] = useState<TreeDataProps | null>(null);
  const [errorRequest, setErrorRequest] = useState(false);

  const getData = async () => {
    setData(null);
    setErrorRequest(false);
    try {
      const baseUrl = `${window.location.protocol}//${window.location.host}`;
      const { data: responseData }: responseDataProps = await axios.get(
        `${baseUrl}/data/data.json`,
      );
      if (responseData) {
        setData(responseData);
      }
    } catch (err) {
      setErrorRequest(true);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container data-testid="challenge">
      <h1>Árvore</h1>
      {data === null && errorRequest ? (
        <ErrorInfo>
          <img src={ErrorImage} alt="error" />
          <span>Ops</span>
          <span>não foi possível conectar</span>
          <Button type="button" onClick={() => getData()}>
            <img src={RefreshIcon} alt="icon" style={{ marginRight: 4 }} />
            tentar novamente
          </Button>
          <small>ou</small>
          <Link to="start">
            <img src={ArrowLeftIcon} alt="icon" /> voltar
          </Link>
        </ErrorInfo>
      ) : (
        <Content>
          {data === null && !errorRequest && (
            <Placeholder
              width="100%"
              height="600px"
              style={{ borderRadius: 6 }}
              items={1}
            />
          )}
          {data !== null && !errorRequest && <Tree data={data} />}
        </Content>
      )}
    </Container>
  );
};

export default Challenge;
