import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import SortIcon from "@mui/icons-material/Sort";

export const initialUsers = [
  { id: 1, name: "John Doe", role: "Admin", status: "Active" },
  { id: 2, name: "Jane Doe", role: "User", status: "Inactive" },
  { id: 3, name: "Alice Smith", role: "User", status: "Active" },
  { id: 4, name: "Bob Johnson", role: "User", status: "Inactive" },
  { id: 5, name: "Charlie Brown", role: "Admin", status: "Active" },
  { id: 6, name: "David White", role: "User", status: "Active" },
  { id: 7, name: "Eve Davis", role: "Admin", status: "Inactive" },
  { id: 8, name: "Frank Miller", role: "User", status: "Active" },
  { id: 9, name: "Grace Lee", role: "User", status: "Inactive" },
  { id: 10, name: "Henry Wilson", role: "Admin", status: "Active" },
  { id: 11, name: "Isabelle Moore", role: "User", status: "Active" },
  { id: 12, name: "Jack Taylor", role: "User", status: "Inactive" },
  { id: 13, name: "Kathy Harris", role: "Admin", status: "Active" },
  { id: 14, name: "Liam Clark", role: "User", status: "Inactive" },
  { id: 15, name: "Mona Lewis", role: "Admin", status: "Active" },
  { id: 16, name: "Nathan Walker", role: "User", status: "Active" },
  { id: 17, name: "Olivia Scott", role: "User", status: "Inactive" },
  { id: 18, name: "Paul Young", role: "Admin", status: "Active" },
  { id: 19, name: "Quinn Adams", role: "User", status: "Active" },
  { id: 20, name: "Rachel King", role: "User", status: "Inactive" },
];

export const initialRoles = [
  { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
  { id: 2, name: "User", permissions: ["Read"] },
];

export  const getSortIcon = (key,sortConfig) => {
  if (sortConfig.key !== key) return <SortIcon fontSize="small" />;
  return sortConfig.direction === "asc" ? (
    <ArrowUpwardIcon fontSize="small" />
  ) : (
    <ArrowDownwardIcon fontSize="small" />
  );
};
