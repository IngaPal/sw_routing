import React from 'react'
import { Link } from 'react-router-dom'
import { characters } from '../utils/constants'

const CharacterNav: React.FC = () => {
return (
    <nav>
        <ul className="flex flex-wrap justify-center gap-4 my-4">
        {Object.entries(characters).map(([id, character]) => (
            <li key={id}>
            <Link 
                to={`/about_me/${id}`}
                className="text-blue-500 hover:text-blue-700 underline"
            >
                {character.name}
            </Link>
            </li>
        ))}
        </ul>
    </nav>
)
}

export default CharacterNav