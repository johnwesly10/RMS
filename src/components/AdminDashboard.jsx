import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Users, LayoutDashboard, FileText, Plus, Trash2, Edit } from "lucide-react";

function AdminDashboard() {
  const [view, setView] = useState("dashboard");
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  // --- Form States ---
  const [newUser, setNewUser] = useState({ email: "", password: "" });
  const [newPost, setNewPost] = useState({ title: "", description: "", imageUrl: "" });

  // --- Edit States ---
  const [editingUserId, setEditingUserId] = useState(null);
  const [editUserData, setEditUserData] = useState({ email: "", password: "" });

  const [editingPostId, setEditingPostId] = useState(null);
  const [editPostData, setEditPostData] = useState({ title: "", description: "", imageUrl: "" });

  // --- Fetch Data ---
  const fetchData = async () => {
    try {
      const userRes = await axios.get("http://localhost:1000/Admin");
      const postRes = await axios.get("http://localhost:1000/Posts");
      setUsers(userRes.data);
      setPosts(postRes.data);
    } catch (err) {
      console.error("Error fetching data", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // --- USER ACTIONS ---
  const handleAddUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:1000/Admin", newUser);
      toast.success("User added successfully");
      setNewUser({ email: "", password: "" });
      fetchData();
    } catch (err) {
      toast.error("Failed to add user");
      console.log(err);
    }
  };

  const deleteUser = async (id) => {
    if (window.confirm("Delete this admin?")) {
      await axios.delete(`http://localhost:1000/Admin/${id}`);
      fetchData();
      toast.info("User removed");
    }
  };

  const startEditUser = (user) => {
    setEditingUserId(user.id);
    setEditUserData({ email: user.email, password: user.password });
  };

  const saveEditUser = async () => {
    try {
      await axios.put(`http://localhost:1000/Admin/${editingUserId}`, editUserData);
      toast.success("User updated successfully");
      setEditingUserId(null);
      fetchData();
    } catch (err) {
      toast.error("Failed to update user");
      console.log(err);
    }
  };

  // --- POST ACTIONS ---
  const handleAddPost = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:1000/Posts", newPost);
      toast.success("Service post added!");
      setNewPost({ title: "", description: "", imageUrl: "" });
      fetchData();
    } catch (err) {
      toast.error("Failed to create post");
      console.log(err);
    }
  };

  const deletePost = async (id) => {
    if (window.confirm("Remove this service post?")) {
      await axios.delete(`http://localhost:1000/Posts/${id}`);
      fetchData();
    }
  };

  const startEditPost = (post) => {
    setEditingPostId(post.id);
    setEditPostData({ title: post.title, description: post.description, imageUrl: post.imageUrl });
  };

  const saveEditPost = async () => {
    try {
      await axios.put(`http://localhost:1000/Posts/${editingPostId}`, editPostData);
      toast.success("Service post updated!");
      setEditingPostId(null);
      fetchData();
    } catch (err) {
      toast.error("Failed to update post");
      console.log(err);
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      {/* SIDEBAR */}
      <aside className="w-64 bg-[#002B5B] text-white shadow-xl">
        <div className="p-6 text-xl font-bold tracking-tight border-b border-white/10">
          Rehoboth <span className="text-blue-400">Marine</span>
        </div>
        <nav className="mt-6">
          <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" active={view === "dashboard"} onClick={() => setView("dashboard")} />
          <NavItem icon={<Users size={20} />} label="User Management" active={view === "users"} onClick={() => setView("users")} />
          <NavItem icon={<FileText size={20} />} label="Post Management" active={view === "posts"} onClick={() => setView("posts")} />
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8">
        {/* DASHBOARD */}
        {view === "dashboard" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-800">Operational Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <StatCard label="Total Admins" value={users.length} color="border-blue-500" />
              <StatCard label="Live Services" value={posts.length} color="border-green-500" />
            </div>
          </div>
        )}

        {/* USER MANAGEMENT */}
        {view === "users" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-800">User Management</h2>
            <form onSubmit={handleAddUser} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex gap-4">
              <input
                className="flex-1 border p-2 rounded-lg"
                type="email"
                placeholder="Admin Email"
                required
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              />
              <input
                className="flex-1 border p-2 rounded-lg"
                type="password"
                placeholder="Password"
                required
                value={newUser.password}
                onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
              />
              <button className="bg-[#2563EB] text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                <Plus size={16} /> Add Admin
              </button>
            </form>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mt-4">
              <table className="w-full text-left">
                <thead className="bg-slate-50 font-semibold text-slate-600">
                  <tr>
                    <th className="p-4">Email</th>
                    <th className="p-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((u) => (
                    <tr key={u.id} className="border-t">
                      <td className="p-4">
                        {editingUserId === u.id ? (
                          <input
                            className="border p-1 rounded-lg"
                            value={editUserData.email}
                            onChange={(e) => setEditUserData({ ...editUserData, email: e.target.value })}
                          />
                        ) : (
                          u.email
                        )}
                      </td>
                      <td className="p-4 text-center flex justify-center gap-2">
                        {editingUserId === u.id ? (
                          <>
                            <button onClick={saveEditUser} className="text-green-500 hover:text-green-700">
                              Save
                            </button>
                            <button onClick={() => setEditingUserId(null)} className="text-gray-500 hover:text-gray-700">
                              Cancel
                            </button>
                          </>
                        ) : (
                          <>
                            <button onClick={() => startEditUser(u)} className="text-blue-500 hover:text-blue-700 flex items-center gap-1">
                              <Edit size={14} /> Edit
                            </button>
                            <button onClick={() => deleteUser(u.id)} className="text-red-500 hover:text-red-700 flex items-center gap-1">
                              <Trash2 size={14} /> Delete
                            </button>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* POST MANAGEMENT */}
        {view === "posts" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-800">Service Post Management</h2>
            <form onSubmit={handleAddPost} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  className="border p-2 rounded-lg"
                  placeholder="Service Title"
                  value={newPost.title}
                  onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                  required
                />
                <input
                  className="border p-2 rounded-lg"
                  placeholder="Image URL"
                  value={newPost.imageUrl}
                  onChange={(e) => setNewPost({ ...newPost, imageUrl: e.target.value })}
                  required
                />
              </div>
              <textarea
                className="w-full border p-2 rounded-lg"
                placeholder="Service Description"
                rows="2"
                value={newPost.description}
                onChange={(e) => setNewPost({ ...newPost, description: e.target.value })}
                required
              />
              <button className="bg-[#2563EB] text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700">
                <Plus size={16} /> Add Service
              </button>
            </form>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {posts.map((p) => (
                <div key={p.id} className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex justify-between items-center">
                  <div className="flex-1">
                    {editingPostId === p.id ? (
                      <>
                        <input
                          className="border p-1 rounded-lg w-full mb-1"
                          value={editPostData.title}
                          onChange={(e) => setEditPostData({ ...editPostData, title: e.target.value })}
                        />
                        <input
                          className="border p-1 rounded-lg w-full mb-1"
                          value={editPostData.imageUrl}
                          onChange={(e) => setEditPostData({ ...editPostData, imageUrl: e.target.value })}
                        />
                        <textarea
                          className="border p-1 rounded-lg w-full"
                          value={editPostData.description}
                          onChange={(e) => setEditPostData({ ...editPostData, description: e.target.value })}
                        />
                      </>
                    ) : (
                      <>
                        <h4 className="font-bold text-slate-800">{p.title}</h4>
                        <p className="text-xs text-slate-500 truncate w-64">{p.description}</p>
                      </>
                    )}
                  </div>
                  <div className="flex gap-2 ml-4">
                    {editingPostId === p.id ? (
                      <>
                        <button onClick={saveEditPost} className="text-green-500 hover:text-green-700">
                          Save
                        </button>
                        <button onClick={() => setEditingPostId(null)} className="text-gray-500 hover:text-gray-700">
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button onClick={() => startEditPost(p)} className="text-blue-500 hover:text-blue-700 flex items-center gap-1">
                          <Edit size={16} /> Edit
                        </button>
                        <button onClick={() => deletePost(p.id)} className="text-red-500 hover:text-red-700 flex items-center gap-1">
                          <Trash2 size={16} /> Delete
                        </button>
                      </>
                    )}
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

// --- Helper Components ---
function NavItem({ icon, label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center p-4 transition-all ${active ? "bg-[#2563EB] text-white" : "text-slate-300 hover:bg-white/5 hover:text-white"}`}
    >
      <span className="mr-3">{icon}</span> {label}
    </button>
  );
}

function StatCard({ label, value, color }) {
  return (
    <div className={`bg-white p-6 rounded-2xl shadow-sm border-l-8 ${color}`}>
      <p className="text-slate-500 text-sm font-semibold uppercase">{label}</p>
      <p className="text-4xl font-bold text-slate-800 mt-1">{value}</p>
    </div>
  );
}

export default AdminDashboard;
