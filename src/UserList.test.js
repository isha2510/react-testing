import { render, screen, within } from "@testing-library/react"
import UserList from "./UserList"

test('render one row per user', () => {
    const users = [
        { name: 'test', email: 'test@test.com' },
        { name: 'test1', email: 'test1@test.com' }
    ];
    render(<UserList users={users} />);

    const rows=within(screen.getByTestId('users')).getAllByRole('row');

    expect(rows).toHaveLength(2);

});

test('render the email and name of each user', () => {
    render(<UserList />)
})