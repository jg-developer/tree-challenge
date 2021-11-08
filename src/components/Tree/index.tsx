import React from 'react';
import TreeNode from './TreeNode';

import { TreeContainer, NullContainer } from './styles';

export interface TreeProps {
  data: TreeDataProps;
}

export interface TreeDataProps {
  [key: number | string]: ItemTreeProps;
}
export interface ItemTreeProps {
  id: string;
  name: string;
  level: number;
  children: TreeDataProps;
}

const Tree: React.FC<TreeProps> = ({ data }) => {
  const dataValues = Object.values(data);

  return dataValues.length > 0 ? (
    <TreeContainer data-testid="tree">
      {dataValues.map(value => (
        <TreeNode key={`node-${value.id}`} data={value} />
      ))}
    </TreeContainer>
  ) : (
    <NullContainer data-testid="tree">Nenhuma opção disponível</NullContainer>
  );
};

export default Tree;
