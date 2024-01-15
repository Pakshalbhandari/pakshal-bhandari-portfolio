import ExperienceCard from "./ExperienceCard";
import experienceList from "../data/experiences.json"

const Experience = () => {
    return (
        <div>
            {
                experienceList.map((experience, i) => {
                    return (
                        <ExperienceCard
                            key={i}
                            title={experience.title}
                            timePeriod={experience.timePeriod}
                            company={experience.company}
                            description={experience.description}
                        />
                    )
                })
            }
        </div>
    );
};

export default Experience;