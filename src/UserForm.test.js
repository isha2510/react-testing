import { render, screen } from "@testing-library/react"
import UserForm from "./UserForm"
import userEvent from "@testing-library/user-event";

const argList=[];
const callback=(...args)=>{
    argList.push(args);
}

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
    render(<UserForm onUserAdd={callback} />);
    const [nameInput, emailInput] = screen.getAllByRole('textbox');

    await userEvent.click(nameInput);
    await userEvent.keyboard('test');

    await userEvent.click(emailInput);
    await userEvent.keyboard('test@test.com');

    const button = screen.getByRole('button');
    await userEvent.click(button);

    expect(argList).toHaveLength(1);
    expect(argList[0][0]).toEqual({name:'test',email:'test@test.com'})

});
