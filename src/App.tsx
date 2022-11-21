import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.sass'
import { Landing, NotFound } from './pages'

function App() {
	const location = useLocation()

	return (
		<div className="App">
			<div className="blurbs-wrapper">
				<div className="top-blurbs w-100">
					<div className="appreciation">Thank you for your patronage during the lockdown! &#x1F637;</div>
				</div>

				{
					location.pathname === '/' && (
						<Landing.Splash />
					)
				}
			</div>

			<header style={{ marginTop: location.pathname === '/' ? '3rem' : '0' }} id="main" className="main-header">
				<span style={{ fontSize: "200%" }}>Home</span>
			</header>

			<div>
				<main className="main-content">
					<Routes location={location} key={location.pathname}>
						<Route path="/" element={<Landing />}></Route>
						<Route path="*" element={<NotFound />}></Route>
					</Routes>
				</main>
			</div>
		</div>
	)
}

export default App