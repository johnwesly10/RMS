import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Plus, Trash2, Globe, LayoutGrid } from "lucide-react";

function ProjectUpload() {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({
    title: "",
    category: "Marine Engineering",
    location: "",
    shortDescription: "",
    fullStory: "",
    problemSolved: "",
    impactPeople: "",
    status: "Ongoing",
    imageUrl: "",
    isPublished: true,
    isFeatured: false
  });

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:1000/project");
      setProjects(res.data);
    } catch (err) {
      console.error("Projects endpoint not found", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:1000/project", newProject);
      toast.success("Project Uploaded Successfully!");
      setNewProject({
        title: "", category: "Marine Engineering", location: "",
        shortDescription: "", fullStory: "", problemSolved: "", impactPeople: "",
        status: "Ongoing", imageUrl: "", isPublished: true, isFeatured: false
      });
      fetchData();
    } catch (err) {
      toast.error("Upload failed");
      console.error(err);
    }
  };

  const deleteProject = async (id) => {
    if (window.confirm("Delete this project?")) {
      try {
        await axios.delete(`http://localhost:1000/project/${id}`);
        toast.success("Project deleted successfully");
        fetchData();
      } catch (err) {
        toast.error("Failed to delete project");
        console.error(err);
      }
    }
  };

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-[#002B5B] mb-8 flex items-center gap-2">
          <LayoutGrid /> Project Management
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT: UPLOAD FORM */}
          <form onSubmit={handleSubmit} className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
            <h2 className="text-xl font-semibold border-b pb-2">Project Details</h2>
            
            {/* TITLE + CATEGORY */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Project Title</label>
                <input
                  type="text"
                  value={newProject.title}
                  onChange={(e) => setNewProject({...newProject, title: e.target.value})}
                  className="w-full mt-1 border p-2 rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Category</label>
                <select
                  value={newProject.category}
                  onChange={(e) => setNewProject({...newProject, category: e.target.value})}
                  className="w-full mt-1 border p-2 rounded-lg"
                >
                  <option>Marine Engineering</option>
                  <option>Community Support</option>
                  <option>Education</option>
                  <option>Health</option>
                </select>
              </div>
            </div>

            {/* LOCATION + IMAGE */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Location</label>
                <input
                  type="text"
                  value={newProject.location}
                  onChange={(e) => setNewProject({...newProject, location: e.target.value})}
                  className="w-full mt-1 border p-2 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Cover Image URL</label>
                <input
                  type="text"
                  value={newProject.imageUrl}
                  onChange={(e) => setNewProject({...newProject, imageUrl: e.target.value})}
                  placeholder="https://..."
                  className="w-full mt-1 border p-2 rounded-lg"
                  required
                />
              </div>
            </div>

            {/* Short Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Short Description</label>
              <textarea
                rows="2"
                value={newProject.shortDescription}
                onChange={(e) => setNewProject({...newProject, shortDescription: e.target.value})}
                className="w-full mt-1 border p-2 rounded-lg"
                required
              />
            </div>

            {/* Full Story */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Story</label>
              <textarea
                rows="4"
                value={newProject.fullStory}
                onChange={(e) => setNewProject({...newProject, fullStory: e.target.value})}
                className="w-full mt-1 border p-2 rounded-lg"
                placeholder="What problem existed and what was done?"
                required
              />
            </div>

            {/* Checkboxes */}
            <div className="flex gap-8 bg-slate-50 p-4 rounded-xl">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={newProject.isPublished}
                  onChange={(e) => setNewProject({...newProject, isPublished: e.target.checked})}
                />
                <span className="text-sm font-medium">Publish Live</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={newProject.isFeatured}
                  onChange={(e) => setNewProject({...newProject, isFeatured: e.target.checked})}
                />
                <span className="text-sm font-medium">Feature on Home</span>
              </label>
            </div>

            <button type="submit" className="w-full bg-[#2563EB] text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
              <Plus size={20}/> Create Project
            </button>
          </form>

          {/* RIGHT: PROJECT LIST */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold flex items-center gap-2"><Globe size={18} className="text-green-500"/> Live Projects ({projects.length})</h2>
            <div className="space-y-4 max-h-[800px] overflow-y-auto pr-2">
              {projects.map(proj => (
                <div key={proj.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                  <img
                    src={proj.imageUrl}
                    alt={proj.title}
                    className="h-32 w-full object-cover"
                    onError={(e) => e.target.src="https://via.placeholder.com/300x150?text=No+Image"}
                  />
                  <div className="p-4 flex justify-between items-start">
                    <h3 className="font-bold text-slate-800 leading-tight">{proj.title}</h3>
                    <button onClick={() => deleteProject(proj.id)} className="text-red-400 hover:text-red-600">
                      <Trash2 size={16}/>
                    </button>
                  </div>
                  <span className={`text-[10px] uppercase font-bold px-2 py-1 rounded mt-2 inline-block ${proj.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                    {proj.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectUpload;
