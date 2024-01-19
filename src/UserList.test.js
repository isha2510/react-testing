import { render, screen, within } from "@testing-library/react"
import UserList from "./UserList"

test('render one row per user', () => {
    const users = [
        { name: 'test', email: 'test@test.com' },
        { name: 'test1', email: 'test1@test.com' }
    ];
    render(<UserList users={users} />);

    //eslint-disable-next-line
    //const rows = container.querySelectorAll('tbody tr');

    const rows = within(screen.getByTestId('users')).getAllByRole('row');

    expect(rows).toHaveLength(2);

});

test('render the email and name of each user', () => {
    const users = [
        { name: 'test', email: 'test@test.com' },
        { name: 'test1', email: 'test1@test.com' }
    ];
    render(<UserList users={users} />);

    //Below line will generate playground link, it helps to find the query for specific element
    // screen.logTestingPlaygroundURL();

    for (let user of users) {
        const name = screen.getByRole('cell', { name: user.name });
        const email = screen.getByRole('cell', { name: user.email });
        expect(name).toBeInTheDocument();
        expect(email).toBeInTheDocument();

    }
})