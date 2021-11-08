import React from 'react';

import { PlaceholderContainer } from './styles';

interface PlaceholderProps {
  width: string;
  height: string;
  items: number;
  style?: React.CSSProperties;
}

const Placeholder: React.FC<PlaceholderProps> = ({
  width,
  height,
  items,
  style,
}) => {
  return (
    <>
      {[...Array(items)].map(i => (
        <div
          data-testid="placeholder"
          key={`placeholder-${i}-${width}-${height}`}
          style={{ ...style, width, height, overflow: 'hidden' }}
        >
          <PlaceholderContainer />
        </div>
      ))}
    </>
  );
};

export default Placeholder;
