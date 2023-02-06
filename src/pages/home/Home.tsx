import { useState } from 'react'
import Banner from '../../components/banner/Banner'
import './styles.css'
import ReactSimplyCarousel from 'react-simply-carousel'

const Home = () => {
	const [slider, setSlider] = useState([
		{
			id: 'video-1',
			src: 'aaZq6SXXNt4',
		},
		{
			id: 'video-2',
			src: '4evV8Fr5A8U',
		},
		{
			id: 'video-3',
			src: 'X_fkh5VeOvI',
		},
		{
			id: 'video-4',
			src: 'dsK8SsfqdHE',
		},
	])

	const [activeSlideIndex, setActiveSlideIndex] = useState(0)
	return (
		<>
			<Banner />
			<section className="slider">
				<ReactSimplyCarousel
					activeSlideIndex={activeSlideIndex}
					onRequestChange={setActiveSlideIndex}
					itemsToShow={1}
					itemsToScroll={1}
					forwardBtnProps={{
						//here you can also pass className, or any other button element attributes
						style: {
							alignSelf: 'center',
							background: 'black',
							border: 'none',
							borderRadius: '50%',
							color: 'white',
							cursor: 'pointer',
							fontSize: '20px',
							height: 30,
							lineHeight: 1,
							textAlign: 'center',
							width: 30,
							marginTop: 5,
						},
						children: <span>{`>`}</span>,
					}}
					backwardBtnProps={{
						//here you can also pass className, or any other button element attributes
						style: {
							alignSelf: 'center',
							background: 'black',
							border: 'none',
							borderRadius: '50%',
							color: 'white',
							cursor: 'pointer',
							fontSize: '20px',
							height: 30,
							lineHeight: 1,
							textAlign: 'center',
							width: 30,
							marginBottom: 5,
						},
						children: <span>{`<`}</span>,
					}}
					responsiveProps={[
						{
							itemsToShow: 2,
							itemsToScroll: 2,
							minWidth: 768,
						},
					]}
					speed={400}
					easing="linear">
					{slider.map(({ id, src }) => {
						return (
							<div id={id} style={{ width: 1000, height: 480, background: '#ff80ed' }}>
								<iframe
									width="1000"
									height="480"
									// className="aspect-video"
									src={`https://www.youtube.com/embed/${src}`}
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								/>
							</div>
						)
					})}
				</ReactSimplyCarousel>
			</section>
		</>
	)
}

export default Home
