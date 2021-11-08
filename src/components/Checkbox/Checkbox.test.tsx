import { render } from '@testing-library/react';
import Checkbox from '.';

describe('Checkbox Component', () => {
  test('Checkbox renders correctly', () => {
    const { getByText } = render(
      <Checkbox label="name" isIndeterminate={false} />,
    );

    expect(getByText('name')).toBeInTheDocument();
  });
});
