import { render, screen } from "@testing-library/react"
import UserForm from "./UserForm"
import userEvent from "@testing-library/user-event";


const mock = jest.fn();


test('It shows two input and a button', () => {
    //render the component to test
    render(<UserForm />);
    //manipulate teh component or find an element in it
    const inputs = screen.getAllByRole('textbox');
    const button = screen.getByRole('button');

    //Assertion
    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();

});

test('it calls onUserAdd when the form is submitted', async () => {
    render(<UserForm onUserAdd={mock} />);
    const nameInput = screen.getByRole('textbox', {
        name: /name/i
    });
    const emailInput = screen.getByRole('textbox', {
        name: /email/i
    });

    await userEvent.click(nameInput);
    await userEvent.keyboard('test');

    await userEvent.click(emailInput);
    await userEvent.keyboard('test@test.com');

    const button = screen.getByRole('button');
    await userEvent.click(button);

    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith({ name: 'test', email: 'test@test.com' });

});

test('empties the input when form is submitted', async () => {
    render(<UserForm onUserAdd={() => { }} />);
    const nameInput = screen.getByRole('textbox', { name: /name/i });
    const emailInput = screen.getByRole('textbox', { name: /email/i });

    await userEvent.click(nameInput);
    await userEvent.keyboard('test');

    await userEvent.click(emailInput);
    await userEvent.keyboard('test@test.com');

    const button=screen.getByRole('button');
    await userEvent.click(button);

    expect(nameInput).toHaveValue('');
    expect(emailInput).toHaveValue('');
});

