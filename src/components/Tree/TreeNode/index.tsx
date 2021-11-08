import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../store';
import { setSelecteds } from '../../../store/treeComponent.store';
import TreeItem from './TreeItem';
import { ItemTreeProps } from '..';
import { getAllChildIds } from '../../../utils/getAllChildIds';

export interface TreeNodeProps {
  data: ItemTreeProps;
  parent?: string;
  parentChildsId?: string[];
}

const TreeNode: React.FC<TreeNodeProps> = ({
  data,
  parent,
  parentChildsId,
}) => {
  const childrenValues = Object.values(data.children);
  const dispatch = useAppDispatch();
  const idsChilds = getAllChildIds(data.children);
  const [isIndeterminate, setIsIndeterminate] = useState(false);
  const { selecteds }: { selecteds: string[] } = useSelector(
    (state: RootState) => ({
      selecteds: state.treeComponent.selecteds,
    }),
  );

  const handleChangeCheckbox = useCallback(
    (event: React.FormEvent<HTMLInputElement>): void => {
      const id = event.currentTarget.value;
      let newSelecteds = selecteds;
      if (childrenValues.length > 0) {
        if (event.currentTarget.checked === true) {
          newSelecteds = newSelecteds.concat(
            idsChilds.filter(item => newSelecteds.indexOf(item) < 0),
          );
        } else {
          newSelecteds = newSelecteds.filter(
            selected => idsChilds.indexOf(selected) === -1,
          );
        }
      }

      newSelecteds =
        event.currentTarget.checked === true
          ? [...newSelecteds.filter(selected => selected !== id), id]
          : newSelecteds.filter(selected => selected !== id);

      if (parent && parentChildsId) {
        const childIdsSelecteds = newSelecteds.filter(
          selected => parentChildsId.indexOf(selected) !== -1,
        );

        if (childIdsSelecteds.length === parentChildsId.length) {
          newSelecteds = [...newSelecteds.filter(s => s !== parent), parent];
        } else if (childIdsSelecteds.length > 0) {
          newSelecteds = newSelecteds.filter(s => s !== parent);
        } else {
          newSelecteds = newSelecteds.filter(s => s !== parent);
        }
      }

      dispatch(setSelecteds(newSelecteds));
    },
    [
      selecteds,
      data,
      idsChilds,
      parent,
      parentChildsId,
      dispatch,
      childrenValues,
    ],
  );

  useEffect(() => {
    const childIdsSelecteds = selecteds.filter(
      selected => idsChilds.findIndex(child => child === selected) !== -1,
    );
    if (childIdsSelecteds.length === idsChilds.length) {
      setIsIndeterminate(false);
    } else if (childIdsSelecteds.length > 0) {
      setIsIndeterminate(true);
    } else {
      setIsIndeterminate(false);
    }
  }, [selecteds]);

  return (
    <TreeItem
      key={`item-${data.id}`}
      id={data.id}
      name={data.name}
      level={data.level}
      handleCheckboxChange={handleChangeCheckbox}
      isIndeterminate={isIndeterminate}
    >
      {childrenValues.length > 0 &&
        childrenValues.map(children => (
          <TreeNode
            data={children}
            parent={data.id}
            parentChildsId={getAllChildIds(data.children)}
            key={`node-${children.id}`}
          />
        ))}
    </TreeItem>
  );
};

export default TreeNode;
