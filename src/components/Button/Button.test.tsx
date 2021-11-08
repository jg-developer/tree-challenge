import { render } from '@testing-library/react';
import Button from '.';

describe('Button Component', () => {
  test('Button renders correctly', () => {
    const { getByText } = render(<Button>ok</Button>);

    expect(getByText('ok')).toBeInTheDocument();
  });
});
