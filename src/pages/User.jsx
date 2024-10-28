import React, { useState } from "react";
import useUserStore from "../store/userStore";

const User = () => {
  const { users, addUser, editUser, removeUser, removeAllUsers } =
    useUserStore();
  const [user, setUser] = useState({ id: "", name: "" });
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleAddUser = () => {
    if (isEditing) {
      editUser(user.id, { name: user.name });
      setIsEditing(false);
    } else {
      const newUser = { id: Date.now().toString(), name: user.name };
      addUser(newUser);
    }
    setUser({ id: "", name: "" });
  };

  const handleEditUser = (userToEdit) => {
    setUser(userToEdit);
    setIsEditing(true);
  };

  return (
    <div className="my-5">
      <div>
        <div className="relative w-full max-w-xl">
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleInputChange}
            className="peer transition-all px-5 mb-5 py-3 w-full text-lg text-gray-600 bg-white rounded-md border border-gray-800 outline-none select-all"
          />
          <label className="z-2 text-gray-500 pointer-events-none absolute left-5 inset-y-0 h-fit flex items-center select-none transition-all text-sm peer-focus:text-sm peer-placeholder-shown:text-lg px-1 peer-focus:px-1 peer-placeholder-shown:px-0 bg-white peer-focus:bg-white peer-placeholder-shown:bg-transparent m-0 peer-focus:m-0 peer-placeholder-shown:m-auto -translate-y-1/2 peer-focus:-translate-y-1/2 peer-placeholder-shown:translate-y-0">
            Enter User Name
          </label>
        </div>

        <button
          className={`text-white hover:bg-purple-600 transition-all bg-purple-500 px-[20px] py-[10px] rounded-lg font-semibold mr-5 ${
            !user.name && "opacity-50 cursor-not-allowed"
          }`}
          onClick={handleAddUser}
          disabled={!user.name}
        >
          {isEditing ? "Update User" : "Add User"}
        </button>
        <button
          className="text-white hover:bg-purple-600 transition-all bg-purple-500 px-[20px] py-[10px] rounded-lg font-semibold"
          onClick={removeAllUsers}
        >
          Remove All Users
        </button>
      </div>

      <table className="w-full mt-5">
        <thead className="border-b border-purple-400">
          <tr className="mb-4">
            <th>User Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b border-purple-400 py-3 ">
              <td className="text-center">{user.name}</td>
              <td className="text-center">
                <button
                  className="text-white hover:bg-purple-600 transition-all bg-purple-500 px-[20px] py-[10px] rounded-lg font-semibold mx-5"
                  onClick={() => handleEditUser(user)}
                >
                  Edit
                </button>
                <button
                  className="text-white hover:bg-purple-600 transition-all bg-purple-500 px-[20px] py-[10px] rounded-lg font-semibold"
                  onClick={() => removeUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
