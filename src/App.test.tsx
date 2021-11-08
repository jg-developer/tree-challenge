import { render } from '@testing-library/react';

import App from './App';

describe('App Component', () => {
  test('App renders correctly', () => {
    const { getByTestId } = render(<App />);

    expect(getByTestId('menu')).toBeInTheDocument();
    expect(getByTestId('home')).toBeInTheDocument();
    expect(getByTestId('footer')).toBeInTheDocument();
  });
});
