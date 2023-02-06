import { Routes, Route } from 'react-router-dom'
import './styles/styles.css'
import Home from './pages/home/Home'
import Characters from './pages/characters/Characters'
import Footer from './components/footer/Footer'
import MagicKnights from './pages/magicKnights/MagicKnights'
import Curiosities from './pages/curiosities/Curiosities'
// import NotFound from './pages/notFound/notfound'
import Header from './components/header/Header'

const App = () => {
	return (
		<>
			<Header />
			<main className="mt-12 duration-200 sm:mt-16 lg:mt-16 bg-gray-50 dark:bg-dark-main transtion dark:text-white">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/characters" element={<Characters />} />
					<Route path="/magic-knights" element={<MagicKnights />} />
					<Route path="/curiosities" element={<Curiosities />} />
					{/* <Route path="*" element={<NotFound />} /> */}
				</Routes>
			</main>
			<Footer />
		</>
	)
}

export default App
