import { render } from '@testing-library/react';
import ScrollToTop from '.';

describe('ScrollToTop Component', () => {
  test('ScrollToTop renders correctly', () => {
    const { getByTestId } = render(<ScrollToTop />);

    expect(getByTestId('scroll-to-top')).toBeInTheDocument();
  });
});
