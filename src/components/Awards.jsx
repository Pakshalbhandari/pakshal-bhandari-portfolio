import redAward from "../assets/icons/red-award.svg"
import blueAward from "../assets/icons/blue-award.svg"
import greenAward from "../assets/icons/green-award.svg"

function Awards () {
    return (
        <div className="w-full space-y-10 m-auto">
            <div className="flex w-full ">
                <div className="w-40 mx-auto hover:bg-red-950 rounded-3xl p-2">
                    <img className="h-32 mx-auto" src={redAward} alt="red-award" />
                    <p className="text-center font-extrabold text-white" >Above and Beyond</p>
                    <p className="text-center text-gray-500" >February 2023</p>
                </div>
            </div>
            <div className="flex w-full ">
                <div className="w-40 mx-auto hover:bg-red-950 rounded-3xl p-2">
                    <img className="h-32 mx-auto" src={redAward} alt="red-award" />
                    <p className="text-center font-extrabold text-white" >Above and Beyond</p>
                    <p className="text-center text-gray-500" >July 2022</p>
                </div>
            </div>
            <div className="flex w-full">
                <div className="w-40 mx-auto hover:bg-indigo-950 rounded-3xl p-2">
                    <img className="h-28 mx-auto" src={blueAward} alt="blue-award" />
                    <p className="text-center font-extrabold text-white" >Spot Award</p>
                    <p className="text-center text-gray-500" >February 2022</p>
                </div>
                <div className="w-40 mx-auto hover:bg-green-950 rounded-3xl p-2">
                    <img className="h-28 mx-auto" src={greenAward} alt="green-award" />
                    <p className="text-center font-extrabold text-white">Team Excellence Award</p>
                    <p className="text-center text-gray-500">July 2021</p>
                </div>
            </div>
        </div>
    )
}

export default Awards;