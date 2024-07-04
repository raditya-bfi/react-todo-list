import { screen } from '@testing-library/react';

import App from '~/App';
import { render } from '~/utils/testUtils';

const mockUseRoutes = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useRoutes: () => mockUseRoutes,
}));

test('renders react component', async () => {
  render(<App />);
  const divElement = await screen.findByText('Welcome to React Vite Material Boilerplate');
  expect(divElement).toBeInTheDocument();
});
