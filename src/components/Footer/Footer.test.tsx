import { render } from '@testing-library/react';
import Footer from '.';

describe('Footer Component', () => {
  test('Footer renders correctly', () => {
    const { getByTestId } = render(<Footer />);

    expect(getByTestId('footer')).toBeInTheDocument();
  });
});
