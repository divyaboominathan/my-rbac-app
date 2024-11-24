import React from "react";
import DataTable from "../../Table/data-table";

const UserTable = ({ users, handleDeleteUser, handleEditUser }) => {
  const columns = [
    { field: "name", headerName: "Name" },
    { field: "role", headerName: "Role" },
    { field: "status", headerName: "Status" },
  ];

  return (
    <DataTable
      data={users}
      columns={columns}
      handleDelete={handleDeleteUser}
      handleEdit={handleEditUser}
    />
  );
};

export default UserTable;

