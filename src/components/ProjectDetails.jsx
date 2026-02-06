import { motion } from "framer-motion"

const ProjectDetails = ({ project, onClose }) => {
  if (!project) return null

  return (
    <section className="fixed inset-0 bg-black/90 z-50 overflow-y-auto">
      <div className="max-w-4xl mx-auto px-6 py-10">

        <button
          onClick={onClose}
          className="mb-6 text-blue-400 hover:underline"
        >
          ← Back to Projects
        </button>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-4"
        >
          {project.title}
        </motion.h2>

        <p className="text-gray-400 mb-6">{project.overview}</p>

        {/* FEATURES */}
        <h3 className="text-xl font-semibold mb-2">Features</h3>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          {project.features.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        {/* TECH STACK */}
        <h3 className="text-xl font-semibold mb-2">Tech Stack</h3>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm bg-gray-800 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* SCREENSHOTS */}
        <h3 className="text-xl font-semibold mb-2">Screenshots</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {project.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Project Screenshot"
              className="rounded-lg border border-gray-700"
            />
          ))}
        </div>

        {/* LINKS */}
        <div className="mt-8 flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              className="px-6 py-2 bg-blue-500 rounded-lg hover:bg-blue-600"
            >
              GitHub Repo
            </a>
          )}
        </div>
      </div>
    </section>
  )
}

export default ProjectDetails
