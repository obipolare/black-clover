import { useState, useEffect } from 'react'
import CharactersContainer from '../../components/templates/charactersContainer/CharactersContainer'

const Characters = () => {
	const [characters, setCharacters] = useState({
		data: [],
		loading: true,
	})

	const url = `https://my-json-server.typicode.com/obipolare/json-db/db`
	const charactersData = async (url: string) => {
		const res = await fetch(url)
		const { characters } = await res.json()
		setCharacters({
			data: characters,
			loading: false,
		})
	}
	useEffect(() => {
		charactersData(url)
	}, [url])
	return <CharactersContainer characters={characters} />
}
export default Characters
