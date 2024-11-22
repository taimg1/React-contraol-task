import useApiMethods from "../hooks/useApiMethods";
import { Button } from "react-bootstrap";
import { UserListContainer } from "./UserListContainer";
import { SearchBox } from "./SearchBox";
import { User } from "../types/user";
import { useState } from "react";
import "../styles//UserContainer.css";

export const UserContainer = () => {
  const { users, getUsers, deleteUser } = useApiMethods();
  const [filter, setFilter] = useState("");
  const filterUsers = (value: string) => {
    setFilter(value);
  };
  const filteredUsers = users.filter((user: User) => {
    return user.firstName.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div className="container-user">
      <div className="d-flex justify-content-center">
        <Button onClick={getUsers}>Get Users</Button>
      </div>

      <SearchBox searchValue={filter} onChange={filterUsers} />
      <UserListContainer users={filteredUsers} deleteUser={deleteUser} />
    </div>
  );
};
