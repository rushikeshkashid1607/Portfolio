import { useState } from "react"
import { motion } from "framer-motion"
import { projects } from "../data/resumeData"
import ProjectDetails from "./ProjectDetails"

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-5xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-10"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer bg-gray-900 border border-gray-800 p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold">
                {project.title}
              </h3>

              <p className="text-gray-400 mt-3">
                {project.shortDescription}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1 bg-black border border-gray-700 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* DETAILS MODAL */}
        <ProjectDetails
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  )
}

export default Project
