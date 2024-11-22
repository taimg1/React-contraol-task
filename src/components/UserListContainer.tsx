import { FC } from "react";
import { User } from "../types/user";
import { UserCard } from "./UserCard";

interface UserListContainerProps {
  users: User[];
  deleteUser: (id: number) => void;
}

export const UserListContainer: FC<UserListContainerProps> = ({
  users,
  deleteUser,
}) => {
  return (
    <div className="container-user">
      {users.map((user) => (
        <UserCard key={user.id} user={user} deleteUser={deleteUser} />
      ))}
    </div>
  );
};
