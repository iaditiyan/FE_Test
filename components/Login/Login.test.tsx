import { render, screen } from '@testing-library/react';
import { Login } from './Login';

describe('Login component', () => {
  it('has correct Next.js theming section link', () => {
    render(<Login />);
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/guides/next/'
    );
  });
});
