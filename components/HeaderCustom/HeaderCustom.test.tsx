import { render, screen } from '@testing-library/react';
import { HeaderCustom } from './HeaderCustom';

describe('Header component', () => {
  it('has correct Next.js theming section link', () => {
    render(<HeaderCustom links={[]} />);
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/guides/next/'
    );
  });
});
