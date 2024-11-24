import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AdminForm from '../components/Form/Admin/admin-form';
import AdminTable from '../components/Form/Admin/admin-table';
import { initialRoles } from "../components/constants";

const Roles = () => {
    const [roles, setRoles] = useState(initialRoles);
    const [newRole, setNewRole] = useState({ name: '', permissions: [] });
    const [editingRole, setEditingRole] = useState(null);

    useEffect(() => {
        if (editingRole) {
            setNewRole({ id: editingRole.id, name: editingRole.name, permissions: editingRole.permissions });
        }
    }, [editingRole]);

    const handleAddOrUpdateRole = (role) => {
        if (editingRole) {
            setRoles((prevRoles) =>
                prevRoles.map((r) =>
                    r.id === editingRole.id ? { ...r, ...role, permissions: role.permissions } : r
                )
            );
            setEditingRole(null);
        } else {
            const id = roles.length + 1;
            setRoles((prevRoles) => [
                ...prevRoles,
                { id, ...role, permissions: role.permissions },
            ]);
        }
        setNewRole({ name: '', permissions: [] });
    };

    const handleEditRole = (id) => {
        const roleToEdit = roles.find((role) => role.id === id);
        if (roleToEdit) {
            setEditingRole(roleToEdit);
        }
    };

    const handleDeleteRole = (id) => {
        setRoles((prevRoles) => prevRoles.filter((role) => role.id !== id));
    };

    return (
        <Box>
            <Typography variant="h4" gutterBottom sx={{
                textAlign: "center"
            }}>
                Manage Roles
            </Typography>
            <AdminForm
                newRole={newRole}
                setNewRole={setNewRole}
                handleAddRole={handleAddOrUpdateRole}
            />
            <AdminTable
                roles={roles}
                handleDeleteRole={handleDeleteRole}
                handleEditRole={handleEditRole}
            />
        </Box>
    );
};

export default Roles;
