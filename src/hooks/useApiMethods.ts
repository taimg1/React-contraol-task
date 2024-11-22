import axios from "axios";
import { User } from "../types/user";
import { useState } from "react";

function useApiMethods() {
  const [users, setUsers] = useState<User[]>([]);

  const getUsers = async () => {
    try {
      const response = await axios.get<{ users: User[]; }>(
        "https://dummyjson.com/users"
      );
      setUsers(response.data.users);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUser = async (id: number) => {
    try {
      await axios.delete(`https://dummyjson.com/users/${id}`);
      setUsers((prev) => prev.filter((user) => user.id !== id));
    } catch (error) {
      console.error(error);
    }
  };



  return { users, getUsers, deleteUser };
}
export default useApiMethods;
