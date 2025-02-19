import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  deleteUser, fetchUsers } from "../store/userSlicer";
import { useNavigate } from "react-router-dom";
import SearchInput from "../components/ui/input/SearchInput";
import { Plus} from "lucide-react";
import MenuButton from "../components/ui/button/MenuButton";
import ConfirmDialog from "../components/ui/dialog/ConfirmDialog";
import Alert  from "../components/ui/dialog/Alert";
import { showAlert } from "../store/alertSlicer";

const UserList = () => {
    const dispatch = useDispatch();
    const { users, search } = useSelector((state) => state.users);
    const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
    const [selectedUser, setSelectedUser] = useState({});
    
    
    useEffect(() => {
      dispatch(fetchUsers());
    }, [dispatch]);
  
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
    );

    const handleDelete = (data) => {
      setOpenConfirmDialog(!openConfirmDialog);
      setSelectedUser(data);
      console.log(data);
      
      // window.confirm("Yakin ingin menghapus?") && dispatch(deleteUser(data))
      
    }
    
    const handleOpenDialog = () => {
        setOpenConfirmDialog(!openConfirmDialog);
    }
    
    const handleConfirmDelete = () => {
        dispatch(deleteUser(selectedUser.id));
        setSelectedUser({});
        handleOpenDialog();
        
    }
  
    return (
      <div className="p-4">
        <Alert />
        <div className="mb-8">
          <h1 className="text-2xl font-semibold">User Management</h1>
          <p className="text-zinc-500">Manage all user here</p>
        </div>
        <div className="flex gap-2 items-center justify-between">
          <SearchInput />
          <button onClick={() => dispatch(showAlert({ message: "Warning!", type: "warning" }))} className="bg-gray-900 text-white text-sm py-2 px-3 rounded-lg flex items-center gap-2 hover:bg-gray-700"> <Plus size={16}/> New User</button>
        </div>
        <table className="table-auto w-full mt-4 border-collapse border border-gray-200 rounded-lg">
          <thead className="rounded-lg">
            <tr className="bg-gray-100 rounded-lg">
              <th className="p-3 text-sm text-zinc-500 font-semibold rounded-lg">ID</th>
              <th className="p-3 text-sm text-zinc-500 font-semibold text-left rounded-lg">Name</th>
              <th className="p-3 text-sm text-zinc-500 font-semibold text-left rounded-lg">Email</th>
              <th className="p-3 text-sm text-zinc-500 font-semibold text-left rounded-lg">Company</th>
              <th className="p-3 text-sm text-zinc-500 font-semibold text-left rounded-lg">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={user.id} className="border-b border-gray-200 p-4 hover:bg-gray-50">
                <td className="p-2 text-center">{index + 1}</td>
                <td className="p-2">{user.name}</td>
                <td className="p-2">{user.email}</td>
                <td className="p-2">{user.company.name}</td>
                <td className="p-2">
                  <MenuButton onDelete={() => handleDelete(user)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <ConfirmDialog isOpen={openConfirmDialog} onClose={() => handleOpenDialog()} onConfirm={() => handleConfirmDelete()} title="Are you sure?" message="You will remove this data." />
      </div>
    );
  };

  export default UserList;