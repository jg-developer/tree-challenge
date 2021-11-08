import { render } from '@testing-library/react';
import Home from '.';

describe('Home Page Component', () => {
  test('Home Page renders correctly', () => {
    const { getByTestId } = render(<Home />);

    expect(getByTestId('home')).toBeInTheDocument();
  });
});
