import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AnimateHeight from 'react-animate-height';

import { ItemTreeProps } from '../..';
import { RootState } from '../../../../store';

import Checkbox from '../../../Checkbox';

import {
  Container,
  ItemContainer,
  ToggleBtn,
  TreeNodeContainer,
} from './styles';

import ChevronRightIcon from '../../../../assets/chevron-right.svg';

interface TreeItemProps extends Omit<ItemTreeProps, 'children'> {
  isIndeterminate: boolean;
  handleCheckboxChange: (event: React.FormEvent<HTMLInputElement>) => void;
}
const TreeItem: React.FC<TreeItemProps> = ({
  id,
  name,
  level,
  handleCheckboxChange,
  isIndeterminate,
  children,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const { selecteds }: { selecteds: string[] } = useSelector(
    (state: RootState) => ({
      selecteds: state.treeComponent.selecteds,
    }),
  );

  const toggleChildrens = useCallback(() => {
    setIsVisible(!isVisible);
  }, [isVisible]);

  useEffect(() => {
    const isSelected = selecteds.indexOf(id);
    setIsChecked(isSelected !== -1);
  }, [selecteds]);

  return (
    <Container>
      <ItemContainer level={level}>
        {children && (
          <ToggleBtn
            isActive={isVisible}
            type="button"
            onClick={() => toggleChildrens()}
          >
            <img src={ChevronRightIcon} alt="icon" />
          </ToggleBtn>
        )}

        <div style={{ flex: 1 }}>
          <Checkbox
            onChange={handleCheckboxChange}
            checked={isChecked}
            isIndeterminate={isIndeterminate}
            value={id}
            label={name}
            id={`checkbox-${id}`}
            customStyle={{ paddingLeft: children ? 0 : 40, paddingRight: 10 }}
          />
        </div>
      </ItemContainer>
      {children && (
        <AnimateHeight duration={400} height={isVisible ? 'auto' : 0}>
          <TreeNodeContainer>{children}</TreeNodeContainer>
        </AnimateHeight>
      )}
    </Container>
  );
};

export default TreeItem;
