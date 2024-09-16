import { useEffect, useState } from 'react'
import { base_url, characters } from '../utils/constants'
import { HeroInfo, Character } from '../utils/types'
import { useParams } from 'react-router-dom'
import CharacterNav from './CharacterNav'

const CACHE_DURATION = 30 * 24 * 60 * 60 * 1000 

const AboutMe = () => {
  const [hero, setHero] = useState<HeroInfo>()
  const { heroId = 'luke' } = useParams<{ heroId?: string }>()

  useEffect(() => {
    const fetchHeroData = async (id: string) => {
      let heroData: HeroInfo | null = null

      const storedHero = localStorage.getItem(id)
      if (storedHero) {
        const { data, timestamp } = JSON.parse(storedHero)
        if (Date.now() - timestamp < CACHE_DURATION) {
          heroData = data
        }
      }

      if (!heroData) {
        const characterInfo: Character = characters[id as keyof typeof characters] || characters.luke

        try {
          const response = await fetch(characterInfo.url)
          const data = await response.json()
          heroData = {
            name: data.name,
            gender: data.gender,
            birth_year: data.birth_year,
            height: data.height,
            mass: data.mass,
            hair_color: data.hair_color,
            skin_color: data.skin_color,
            eye_color: data.eye_color
          }

          localStorage.setItem(id, JSON.stringify({
            data: heroData,
            timestamp: Date.now()
          }))
        } catch (error) {
          console.error('Error fetching hero data:', error)
          heroData = JSON.parse(localStorage.getItem('luke') || '{}').data
        }
      }

      return heroData
    }

    const loadHeroData = async () => {
      const data = await fetchHeroData(heroId)
      setHero(data)

      Object.keys(characters).forEach(async (id) => {
        if (id !== heroId) {
          await fetchHeroData(id)
        }
      })
    }

    loadHeroData()
  }, [heroId])

  if (!hero) {
    return <div>Loading...</div>
  }

  return (
    <>
      <CharacterNav />
      <div className='text-3xl leading-loose text-justify tracking-widest ml-8'>
        {Object.entries(hero).map(([key, value]) => (
          <p key={key}>
            <span className='text-[1.5em] capitalize'>{key.replace('_', ' ')}:</span> {value}
          </p>
        ))}
      </div>
    </>
  )
}

export default AboutMe