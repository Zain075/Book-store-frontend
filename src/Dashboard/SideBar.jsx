import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiInbox, HiOutlineCloudUpload, HiTable, } from 'react-icons/hi';
import { useContext } from 'react';
import { AuthContext } from '../contects/AuthProvider.jsx';

const SideBar = () => {
  const { user } = useContext(AuthContext)
  return (
    <Sidebar aria-label="Sidebar with content separator example">
      <Sidebar.Logo href="/admin/dashboard" img={user?.photoURL} className="w-16 h-16" >
        <p>{user?.displayName || "Demo User"}</p>
      </Sidebar.Logo><Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
            Manage Book
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
            Upload Book
          </Sidebar.Item>
          <Sidebar.Item href="/login" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="/signup" icon={HiTable}>
            Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}

export default SideBar