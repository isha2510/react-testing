const UserList = ({ users }) => {
    console.log(users);
    const rederedusers = users ? users.map((user) => {
        return (
            <tr key={user.name}>
                <td>{user.name}</td>
                <td>{user.email}</td>
            </tr>)
    }) : '';

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {rederedusers}
            </tbody>
        </table>
    );
}

export default UserList;