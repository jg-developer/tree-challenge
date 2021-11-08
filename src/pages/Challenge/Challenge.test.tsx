import { render } from '@testing-library/react';
import Challenge from '.';

describe('Challenge Page Component', () => {
  test('Challenge Page renders correctly', () => {
    const { getByTestId } = render(<Challenge />);

    expect(getByTestId('challenge')).toBeInTheDocument();
  });
});
