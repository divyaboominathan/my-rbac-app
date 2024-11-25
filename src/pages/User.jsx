import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import UserForm from "../components/Form/User/user-form";
import UserTable from "../components/Form/User/user-table";
import { initialUsers } from "../components/constants";

const Users = () => {
    const [users, setUsers] = useState(initialUsers);
    const [newUser, setNewUser] = useState({ name: '', role: '', status: 'Active' });
    const [editingUser, setEditingUser] = useState(null);

    useEffect(() => {
        if (editingUser) {
            setNewUser({ id: editingUser.id, name: editingUser.name, role: editingUser.role, status: editingUser.status });
        }
    }, [editingUser]);

    const handleAddOrUpdateUser = (user) => {
        if (editingUser) {
            setUsers((prevRoles) =>
                prevRoles.map((u) =>
                    u.id === editingUser.id ? { ...u, ...user, role: user.role, status: user.status } : u
                )
            );
            setEditingUser(null);
        } else {
            const id = users.length + 1;
            setUsers((prevRoles) => [
                ...prevRoles,
                { id, ...user, role: user.role, status: user.status },
            ]);
        }
        setNewUser({ name: '', role: [], status: 'Active' });
    };

    const handleEditUser = (id) => {
        const userToEdit = users.find((user) => user.id === id);
        if (userToEdit) {
            setEditingUser(userToEdit);
        }
    };

    const handleDeleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };

    return (
        <Box>
            <Typography variant="h4" gutterBottom sx={{
                textAlign: "center"
            }}>
                Manage Users
            </Typography>
            <UserForm newUser={newUser} setNewUser={setNewUser} handleAddUser={handleAddOrUpdateUser} />
            <UserTable users={users} handleDeleteUser={handleDeleteUser} handleEditUser={handleEditUser} />
        </Box>
    );
};

export default Users;