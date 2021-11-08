import { render } from '@testing-library/react';
import Tree from '.';

describe('Tree Component', () => {
  test('Tree renders correctly', () => {
    const { getByTestId } = render(<Tree data={{}} />);

    expect(getByTestId('tree')).toBeInTheDocument();
  });
});
