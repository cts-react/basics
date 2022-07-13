import { render, screen } from '@testing-library/react';
import App from './App';

xtest('renders learn react link', () => { //xtest means exclude the test
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
