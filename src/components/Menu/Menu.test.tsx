import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Menu from '.';

describe('Menu Component', () => {
  test('Menu renders correctly', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Menu />
      </BrowserRouter>,
    );

    expect(getByTestId('menu')).toBeInTheDocument();
  });
});
