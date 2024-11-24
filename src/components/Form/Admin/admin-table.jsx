import React from "react";
import DataTable from "../../Table/data-table";

const RoleTable = ({ roles, handleDeleteRole, handleEditRole }) => {
  const columns = [
    { field: "name", headerName: "Role Name" },
    { field: "permissions", headerName: "Permissions" },
  ];

  return (
    <DataTable
      data={roles}
      columns={columns}
      handleDelete={handleDeleteRole}
      handleEdit={handleEditRole}
    />
  );
};

export default RoleTable;

