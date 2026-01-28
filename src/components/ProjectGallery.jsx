import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ProjectGallery() {
  const [project, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:1000/project") // Make sure your json-server has "project" endpoint
      .then((res) => {
        setProjects(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch projects:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-20 text-center">Loading Projects...</div>;
  if (!project.length) return <div className="p-20 text-center">No projects found.</div>;

  return (
    <div className="max-w-6xl mx-auto p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {project.map((project) => (
        <div
          key={project.id}
          className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-200"
        >
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="font-bold text-lg">{project.title}</h3>
            <p className="text-sm text-gray-600">{project.shortDescription}</p>
            <Link
              to={`/gallery/${project.id}`}
              className="text-blue-600 mt-2 inline-block font-semibold hover:underline"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
