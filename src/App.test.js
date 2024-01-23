import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('can receive a new user and show it on a list', async () => {
  render(<App />);
  const nameInput = screen.getByRole('textbox', { name: /name/i });
  const emailInput = screen.getByRole('textbox', { name: /email/i });
  const button = screen.getByRole('button');

  await userEvent.click(nameInput);
  await userEvent.keyboard('test');
  await userEvent.click(emailInput);
  await userEvent.keyboard('test@test.com');
  await userEvent.click(button);

  //  screen.debug();

  const name = screen.getByRole('cell', { name: 'test' });
  const email = screen.getByRole('cell', { name: 'test@test.com' });

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});