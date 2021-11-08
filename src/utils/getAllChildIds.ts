import { TreeDataProps } from '../components/Tree';

export const getAllChildIds = (children: TreeDataProps): string[] => {
  let ids: string[] = [];

  Object.values(children).forEach(c => {
    ids.push(c.id);
    if (Object.keys(c.children).length > 0) {
      const idsChild = getAllChildIds(c.children);
      ids = [...ids, ...idsChild];
    }
  });
  return ids;
};
