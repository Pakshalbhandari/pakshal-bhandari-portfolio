import skillsList from '../data/skills.json'

function Skills () {

    return (
        <ul className='space-x-3 justify-center items-center text-lg m-auto p-8 flex flex-wrap w-4/6 gap-x-4 gap-y-8'>
            {
                skillsList.map((skill, i) => {
                    return (
                        <div className='px-5 py-2 w-30 border-2 bg-white text-black rounded-full justify-center flex space-x-2' key={i}>
                            <div className='flex-shrink-0'>
                                <img src={require(`../assets/icons/${skill.icon}`)} alt={skill.name} className={`h-8 ${skill['icon-style']}`}></img>
                            </div>
                            {skill.name && <p className='font-bold'>{skill.name}</p>}
                        </div>
                    )
                })
            }
        </ul>
    );
}

export default Skills