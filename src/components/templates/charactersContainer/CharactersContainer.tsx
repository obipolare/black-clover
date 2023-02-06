import './styles.css'
import { CardCharacter } from '../../organisms/cardCharacter/CardCharacter'
import * as React from 'react'

type Props = {
	characters: {
		data: any[]
		loading: boolean
	}
}

const CharactersContainer = React.memo(({ characters }: Props) => {
	const { data, loading } = characters
	console.log(data, loading)
	return (
		<section className="grid w-11/12 grid-cols-1 gap-4 py-12 mx-auto mt-10 sm:grid-cols-2 xl:grid-cols-3">
			{/* // <section className="mt-12 pinterest-container"> */}
			{loading ? (
				<figure className="flex items-center justify-center w-full h-screen col-span-3">
					<img className="w-24" src="/assets/loading.svg" />
				</figure>
			) : (
				data.map(({ id, name, img, birthdate, description }) => {
					return (
						<CardCharacter
							id={id}
							key={id}
							name={name}
							img={img}
							birthdate={birthdate}
							description={description}
						/>
					)
				})
			)}
		</section>
	)
})

export default CharactersContainer
