function ExperienceCard({ title, timePeriod, company, description }) {
    return (
        <div className="p-5 m-5 rounded-lg bg-white max-w-full">
            <div className="flex justify-between align-middle">
                <p className="text-black font-bold text-xl">{title}</p>
                <p className="text-gray-500 text-sm">{timePeriod}</p>
            </div>
            <p className="text-xs text-gray-500">{company}</p>
            <div className="mt-5">
                {
                    description.map((point, i) => {
                        return (
                            <p className="text-sm mt-1" key={i}>- {point}</p>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default ExperienceCard;