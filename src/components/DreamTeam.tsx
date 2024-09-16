import { friends } from '../utils/constants'
import Friend from './Friend'

const DreamTeam = () => {
    const dreamTeamFriends = friends.slice(1, 10)

    return (
        <section className="ml-1 float-right w-1/2 border border-base-color rounded-b-3xl">
            <h2 className="text-center text-3xl py-2">Dream Team</h2>
            <div className="grid grid-cols-3 gap-0.5">
                {dreamTeamFriends.map((friend, index) => (
                    <Friend key={index} pos={index + 1} picture={friend}/>
                ))}
            </div>
        </section>
    )
}

export default DreamTeam