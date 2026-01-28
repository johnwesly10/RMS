import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { ArrowLeft, MapPin, Calendar, CheckCircle2, Award, Users, CreditCard } from "lucide-react";

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
 
  console.log("URL id:", id);
  useEffect(() => {
    axios.get(`http://localhost:1000/project/${id}`)
      .then((res) => setProject(res.data))
      .catch((err) => console.log("Project not found", err));
  }, [id]);

  if (!project) return <div className="p-20 text-center">Loading Project Details...</div>;
console.log(project);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* HEADER / NAVIGATION */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="flex items-center text-slate-600 hover:text-[#2563EB] transition-colors">
            <ArrowLeft size={20} className="mr-2" /> Back to Projects
          </button>
          <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase ${project.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
            {project.status}
          </span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* 📸 MEDIA SECTION */}
        <div className="rounded-3xl overflow-hidden shadow-2xl mb-12">
          <img src={project.imageUrl} alt={project.title} className="w-full h-[500px] object-cover" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* LEFT: PROJECT STORY */}
          <div className="lg:col-span-2 space-y-10">
            <section>
              <h1 className="text-4xl font-black text-slate-900 mb-4">{project.title}</h1>
              <div className="flex flex-wrap gap-4 text-slate-500 text-sm mb-8">
                <span className="flex items-center gap-1"><MapPin size={16}/> {project.location}</span>
                <span className="flex items-center gap-1"><Calendar size={16}/> Completed: {project.completionDate || "2026"}</span>
                <span className="bg-slate-200 px-2 py-0.5 rounded text-slate-700 font-bold">{project.category}</span>
              </div>
              
              <h2 className="text-2xl font-bold text-slate-800 mb-4">📖 Project Story</h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4">
                <p className="font-semibold text-slate-800 italic border-l-4 border-[#2563EB] pl-4">
                  The Problem: {project.problemSolved || "Addressing critical infrastructure needs in the maritime sector."}
                </p>
                <p>{project.fullStory}</p>
              </div>
            </section>

            {/* 🧾 TRANSPARENCY SECTION */}
            <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Transparency & Proof</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-lg text-center border border-dashed border-slate-300">
                  <p className="text-xs text-slate-400 uppercase font-bold">Verification</p>
                  <p className="text-sm font-medium text-slate-700">ISO Certified Operations</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg text-center border border-dashed border-slate-300">
                  <p className="text-xs text-slate-400 uppercase font-bold">Partner</p>
                  <p className="text-sm font-medium text-slate-700">Rehoboth Marine Services</p>
                </div>
              </div>
            </section>
          </div>

          {/* RIGHT: IMPACT DASHBOARD */}
          <div className="space-y-6">
            <div className="bg-[#002B5B] text-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Award className="text-blue-400" /> Impact Created
              </h3>
              
              <div className="space-y-8">
                <ImpactMetric icon={<Users className="text-blue-300"/>} label="People Benefited" value={project.impactPeople || "1,200+"} />
                <ImpactMetric icon={<CheckCircle2 className="text-green-400"/>} label="Assets Created" value={project.assetsCreated || "Professional Grade"} />
                <ImpactMetric icon={<CreditCard className="text-orange-300"/>} label="Resource Utilization" value="100% Transparent" />
              </div>

              <div className="mt-10 pt-6 border-t border-white/10 text-center">
                <p className="text-xs text-slate-400 mb-2 underline">Privacy Protected</p>
                <p className="text-[10px] text-slate-500 italic">No personal donor or administrative data is stored on public view.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper Component for the Impact Sidebar
function ImpactMetric({ icon, label, value }) {
  return (
    <div className="flex items-start gap-4">
      <div className="bg-white/10 p-2 rounded-lg">{icon}</div>
      <div>
        <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">{label}</p>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  );
}

export default ProjectDetail;