import { useState } from "react"
import { motion } from "framer-motion"
import { skills } from "../data/resumeData"
import SkillQuizModal from "./SkillQuizModal"

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null)

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-5xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-10"
        >
          Skills
        </motion.h2>

        <p className="text-center mb-6">Try your skills with interactive quizzes!</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              onClick={() => setSelectedSkill(skill.name)}
              className="cursor-pointer bg-gray-900 text-center py-4 rounded-lg border border-gray-800"
            >
              {skill.name}
            </motion.div>
          ))}
        </div>

        {/* QUIZ MODAL */}
        <SkillQuizModal
          skill={selectedSkill}
          onClose={() => setSelectedSkill(null)}
        />
      </div>
    </section>
  )
}

export default Skills
