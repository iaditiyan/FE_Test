import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer component', () => {
  it('has correct Next.js theming section link', () => {
    render(<Footer />);
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/guides/next/'
    );
  });
});
