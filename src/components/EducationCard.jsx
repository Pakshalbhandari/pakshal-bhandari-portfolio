function EducationCard ({ institution, gpa, degree, location, timeperiod, total_gpa, logo }) {
    return (
        <div className="bg-white p-5 w-80 rounded-lg">
            <img className="h-24 mx-auto my-10 rounded-lg" src={require(`../assets/${logo}`)} alt="Institution Logo" />
            <div className="mb-5">
                <p className="font-black text-xl">{institution}</p>
                <p className="font-thin text-sm">{location}</p>
                <p className="font-light text-sm">{timeperiod}</p>
            </div>
            <div>
                <p className="font-bold">{degree}</p>
                <p>GPA: {gpa}/{total_gpa}</p>
            </div>
        </div>
    );
}


export default EducationCard;