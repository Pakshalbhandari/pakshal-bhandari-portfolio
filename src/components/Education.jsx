import education_data from "../data/education.json"
import EducationCard from "./EducationCard"

function Education() {
    return (
        <div className="m-auto flex space-x-20">
        {
            education_data.map((degree, i) => {
                return (
                    <EducationCard
                        institution={degree.institution}
                        degree={degree.degree}
                        gpa={degree.gpa}
                        total_gpa={degree.total_gpa}
                        location={degree.location}
                        timeperiod={degree.timeperiod}
                        logo={degree.logo}
                    />
                )
            })
        }
        </div >
    )
}

export default Education;