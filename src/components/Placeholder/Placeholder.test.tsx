import { render } from '@testing-library/react';
import Placeholder from '.';

describe('Placeholder Component', () => {
  test('Placeholder renders correctly', () => {
    const { getByTestId } = render(
      <Placeholder width="10px" height="10px" items={1} />,
    );

    expect(getByTestId('placeholder')).toBeInTheDocument();
  });
});
