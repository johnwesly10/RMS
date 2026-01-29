import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Users, LayoutDashboard, FileText, Plus, Trash2, Edit, Lock, Unlock } from "lucide-react";

function AdminDashboard() {
  const [view, setView] = useState("dashboard");
  const [admins, setAdmins] = useState([]);
  const [postingUsers, setPostingUsers] = useState([]);
  const [projects, setProjects] = useState([]);

  // Admin States
  const [newAdmin, setNewAdmin] = useState({ email: "", password: "", phone: "", documentUrl: "" });
  const [editingAdminId, setEditingAdminId] = useState(null);
  const [editAdminData, setEditAdminData] = useState({ email: "", password: "", phone: "", documentUrl: "" });

  // Posting User States
  const [newPostingUser, setNewPostingUser] = useState({ username: "", password: "", phone: "", documentUrl: "", blocked: false });
  const [editingPostingUserId, setEditingPostingUserId] = useState(null);
  const [editPostingUserData, setEditPostingUserData] = useState({ username: "", password: "", phone: "", documentUrl: "", blocked: false });

  // Fetch data (Strict Mode safe)
  useEffect(() => {
    const controller = new AbortController();

    const fetchDataAsync = async () => {
      try {
        const [adminRes, postingUserRes, projectRes] = await Promise.all([
          axios.get("http://localhost:1000/Admin", { signal: controller.signal }),
          axios.get("http://localhost:1000/PostingUsers", { signal: controller.signal }),
          axios.get("http://localhost:1000/project", { signal: controller.signal }),
        ]);
        setAdmins(adminRes.data);
        setPostingUsers(postingUserRes.data);
        setProjects(projectRes.data);
      } catch (err) {
        if (err.name !== "CanceledError") console.error(err);
      }
    };

    fetchDataAsync();
    return () => controller.abort();
  }, []);

  // --- Admin Actions ---
  const handleAddAdmin = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:1000/Admin", newAdmin);
      toast.success("Admin added");
      setNewAdmin({ email: "", password: "", phone: "", documentUrl: "" });
      fetchData();
    } catch {
      toast.error("Failed to add admin");
    }
  };
  const startEditAdmin = (a) => { setEditingAdminId(a.id); setEditAdminData(a); };
  const saveEditAdmin = async () => { await axios.put(`http://localhost:1000/Admin/${editingAdminId}`, editAdminData); toast.success("Admin updated"); setEditingAdminId(null); fetchData(); };
  const deleteAdmin = async (id) => { if (window.confirm("Delete this admin?")) { await axios.delete(`http://localhost:1000/Admin/${id}`); toast.info("Removed"); fetchData(); } };

  // --- Posting User Actions ---
  const handleAddPostingUser = async (e) => { e.preventDefault(); try { await axios.post("http://localhost:1000/PostingUsers", newPostingUser); toast.success("User added"); setNewPostingUser({ username: "", password: "", phone: "", documentUrl: "", blocked: false }); fetchData(); } catch { toast.error("Failed"); } };
  const startEditPostingUser = (u) => { setEditingPostingUserId(u.id); setEditPostingUserData(u); };
  const saveEditPostingUser = async () => { await axios.put(`http://localhost:1000/PostingUsers/${editingPostingUserId}`, editPostingUserData); toast.success("User updated"); setEditingPostingUserId(null); fetchData(); };
  const deletePostingUser = async (id) => { if (window.confirm("Delete this user?")) { await axios.delete(`http://localhost:1000/PostingUsers/${id}`); toast.info("Removed"); fetchData(); } };
  const toggleBlockUser = async (user) => { await axios.put(`http://localhost:1000/PostingUsers/${user.id}`, { ...user, blocked: !user.blocked }); toast.info(user.blocked ? "Unblocked" : "Blocked"); fetchData(); };

  // File Upload
  const handleFileUpload = (e, setItem, field) => {
    const file = e.target.files[0]; if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setItem(prev => ({ ...prev, [field]: reader.result }));
    reader.readAsDataURL(file);
  };

  // Fetch data helper (can be reused)
  const fetchData = async () => {
    try {
      const [adminRes, postingUserRes, projectRes] = await Promise.all([
        axios.get("http://localhost:1000/Admin"),
        axios.get("http://localhost:1000/PostingUsers"),
        axios.get("http://localhost:1000/project"),
      ]);
      setAdmins(adminRes.data);
      setPostingUsers(postingUserRes.data);
      setProjects(projectRes.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans transition-colors">
      {/* SIDEBAR */}
      <aside className="w-64 bg-gradient-to-b from-[#002B5B] to-[#001f3b] text-white shadow-xl">
        <div className="p-6 text-2xl font-bold tracking-tight border-b border-white/20">
          Rehoboth <span className="text-blue-400">Marine</span>
        </div>
        <nav className="mt-6 space-y-1">
          <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" active={view==="dashboard"} onClick={()=>setView("dashboard")} />
          <NavItem icon={<Users size={20} />} label="Admin Management" active={view==="admins"} onClick={()=>setView("admins")} />
          <NavItem icon={<Users size={20} />} label="Posting User Management" active={view==="postingUsers"} onClick={()=>setView("postingUsers")} />
          <NavItem icon={<FileText size={20} />} label="Project Management" active={view==="projects"} onClick={()=>setView("projects")} />
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8 space-y-8">
        {/* DASHBOARD */}
        {view==="dashboard" && (
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Operational Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard label="Total Admins" value={admins.length} color="border-blue-500"/>
              <StatCard label="Total Posting Users" value={postingUsers.length} color="border-purple-500"/>
              <StatCard label="Active Posting Users" value={postingUsers.filter(u=>!u.blocked).length} color="border-green-500"/>
              <StatCard label="Total Projects" value={projects.length} color="border-yellow-500"/>
            </div>
          </div>
        )}

        {/* ADMIN MANAGEMENT */}
        {view==="admins" && <ManagementSection title="Admin Management" list={admins} newItem={newAdmin} setNewItem={setNewAdmin} editingId={editingAdminId} editData={editAdminData} setEditData={setEditAdminData} onAdd={handleAddAdmin} onEdit={startEditAdmin} onSave={saveEditAdmin} onDelete={deleteAdmin} fields={["email","password","phone"]} showDocument={true}/>}

        {/* POSTING USER MANAGEMENT */}
        {view==="postingUsers" && <ManagementSection title="Posting User Management" list={postingUsers} newItem={newPostingUser} setNewItem={setNewPostingUser} editingId={editingPostingUserId} editData={editPostingUserData} setEditData={setEditPostingUserData} onAdd={handleAddPostingUser} onEdit={startEditPostingUser} onSave={saveEditPostingUser} onDelete={deletePostingUser} toggleBlock={toggleBlockUser} fields={["username","password","phone"]} showBlock={true} showDocument={true}/>}

        {/* PROJECT MANAGEMENT */}
        {view==="projects" && (
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map(p=>(
                <div key={p.id} className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300 border border-gray-200 overflow-hidden">
                  <img src={p.imageUrl} className="w-full h-48 object-cover"/>
                  <div className="p-4">
                    <h3 className="font-bold text-xl text-gray-800">{p.title}</h3>
                    <p className="text-gray-500 text-sm truncate">{p.shortDescription}</p>
                    <p className="text-gray-400 text-xs mt-1">{p.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

// --- NAV ITEM ---
function NavItem({icon,label,active,onClick}){
  return (
    <button onClick={onClick} className={`w-full flex items-center p-4 rounded-lg transition-all duration-200 ${active?"bg-[#2563EB] text-white":"text-gray-300 hover:bg-white/10 hover:text-white"}`}>
      <span className="mr-3">{icon}</span> {label}
    </button>
  )
}

// --- STAT CARD ---
function StatCard({label,value,color}){
  return (
    <div className={`bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-shadow duration-300 border-l-8 ${color}`}>
      <p className="text-gray-500 text-sm font-semibold uppercase">{label}</p>
      <p className="text-4xl font-bold text-gray-800 mt-2">{value}</p>
    </div>
  )
}

// --- MANAGEMENT SECTION ---
function ManagementSection({title,list,newItem,setNewItem,editingId,editData,setEditData,onAdd,onEdit,onSave,onDelete,toggleBlock,fields,showBlock=false,showDocument=false}){
  const handleFileUpload=(e,setItem,field)=>{const file=e.target.files[0];if(!file)return;const reader=new FileReader();reader.onloadend=()=>setItem(prev=>({...prev,[field]:reader.result}));reader.readAsDataURL(file);}
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      {/* ADD FORM */}
      <form onSubmit={onAdd} className="bg-white p-6 rounded-xl shadow flex flex-col md:flex-row gap-4 items-center">
        {fields.map(f=>(<input key={f} type={f==="password"?"password":"text"} placeholder={f.charAt(0).toUpperCase()+f.slice(1)} className="border p-2 rounded-lg flex-1 focus:ring-2 focus:ring-blue-500 outline-none transition duration-200" value={newItem[f]} onChange={e=>setNewItem({...newItem,[f]:e.target.value})} required/>))}
        {showDocument && <input type="file" accept="image/*,.pdf" onChange={e=>handleFileUpload(e,setNewItem,"documentUrl")} className="border p-2 rounded-lg cursor-pointer"/>}
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 shadow hover:shadow-lg transition transform active:scale-95"><Plus size={16}/> Add</button>
      </form>

      {/* TABLE */}
      <div className="bg-white rounded-xl shadow border overflow-x-auto">
        <table className="w-full text-left min-w-[700px]">
          <thead className="bg-gray-100 font-semibold text-gray-600">
            <tr>
              {fields.map(f=><th key={f} className="p-3">{f.charAt(0).toUpperCase()+f.slice(1)}</th>)}
              {showDocument && <th className="p-3">Document</th>}
              {showBlock && <th className="p-3">Status</th>}
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {list.map(item=>(
              <tr key={item.id} className="border-t hover:bg-gray-50 transition duration-200">
                {fields.map(f=><td key={f} className="p-3">{editingId===item.id?<input className="border p-1 rounded-lg w-full" value={editData[f]} onChange={e=>setEditData({...editData,[f]:e.target.value})}/>:item[f]}</td>)}
                {showDocument && <td className="p-3">{item.documentUrl?<a href={item.documentUrl} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">View</a>:"No document"}</td>}
                {showBlock && <td className="p-3">{item.blocked?"Blocked":"Active"}</td>}
                <td className="p-3 flex justify-center gap-2">
                  {editingId===item.id?(
                    <>
                      <button onClick={onSave} className="text-green-500 hover:text-green-700">Save</button>
                      <button onClick={()=>setEditData({})} className="text-gray-500 hover:text-gray-700">Cancel</button>
                    </>
                  ):(
                    <>
                      <button onClick={()=>onEdit(item)} className="text-blue-500 hover:text-blue-700 flex items-center gap-1"><Edit size={14}/> Edit</button>
                      <button onClick={()=>onDelete(item.id)} className="text-red-500 hover:text-red-700 flex items-center gap-1"><Trash2 size={14}/> Delete</button>
                      {showBlock && <button onClick={()=>toggleBlock(item)} className={`flex items-center gap-1 ${item.blocked?"text-green-600":"text-orange-500"}`}>{item.blocked?<Unlock size={14}/> : <Lock size={14}/>} {item.blocked?"Unblock":"Block"}</button>}
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminDashboard;
