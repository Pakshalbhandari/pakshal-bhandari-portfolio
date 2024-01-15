import { useState } from 'react';
import recommendations from '../data/recommendations.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Recommendations() {

    const [currentRecommendation, setCurrentRecommendation] = useState(0)

    function modifyCurrentRecommendation(change) {
        let newCurrentRecommendation = currentRecommendation + change
        newCurrentRecommendation = Math.max(0, newCurrentRecommendation)
        newCurrentRecommendation = Math.min(newCurrentRecommendation, recommendations.length - 1)
        setCurrentRecommendation(newCurrentRecommendation)
    }

    return (
        <div className='h-full'>
            <div className='flex space-x-5 w-full justify-between h-5/6 px-10'>
                <button
                    className='bg-black text-white border-white border-2 p-2 rounded-full disabled:bg-black disabled:border-gray-500 disabled:text-gray-500 h-16 w-16 my-auto hover:text-black hover:bg-white'
                    onClick={() => { modifyCurrentRecommendation(-1) }}
                    disabled={currentRecommendation === 0}
                >
                    <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
                </button>
                <div className='bg-white p-7 rounded-lg w-3/4 h-full overflow-scroll'>
                    <div className='flex justify-between'>
                        <div className='mb-4'>
                            <div>
                                <p className='font-black text-lg'>{recommendations[currentRecommendation].author}</p>
                                <p className='text-sm'>{recommendations[currentRecommendation].position}</p>
                                <p className='font-thin text-sm'>{recommendations[currentRecommendation].relation}</p>
                            </div>
                        </div>
                        <a className="text-4xl text-indigo-950" href="https://www.linkedin.com/in/pakshal-bhandari/details/recommendations/?detailScreenTabIndex=0" target="_blank" rel="noreferrer" ><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a>
                    </div>
                    <p className='text-sm'>{recommendations[currentRecommendation].text}</p>
                </div>
                <button
                    className='bg-black text-white border-white border-2 p-2 rounded-full disabled:bg-black disabled:border-gray-500 disabled:text-gray-500 h-16 w-16 my-auto hover:text-black hover:bg-white'
                    onClick={() => { modifyCurrentRecommendation(1) }}
                    disabled={currentRecommendation === recommendations.length - 1}
                >
                    <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                </button>
            </div>
            <div className='flex justify-center space-x-2 h-1/6'>
                {
                    [...Array(recommendations.length)].map((e, i) => {
                        return (
                            <button 
                                className="bg-gray-500 text-gray-500 h-5 w-5 rounded-full disabled:bg-white my-auto"
                                key={i}
                                disabled={currentRecommendation === i}
                                onClick={() => {setCurrentRecommendation(i)}}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Recommendations;