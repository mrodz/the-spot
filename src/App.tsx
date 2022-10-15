import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.sass'
import { Landing, NotFound } from './pages'

function App() {
	const location = useLocation()

	return (
		<div className="App">
			<div style={{ display: 'unset' }}>
				<div className="top-blurbs w-100">
					<div className="appreciation">Thank you for your patronage during the lockdown!</div>
				</div>
				<header className="main-header">
					<span style={{ fontSize: "1000%" }}>Home</span>

				</header>
			</div>
			<div className="main-content">
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={<Landing />}></Route>
					<Route path="*" element={<NotFound />}></Route>
				</Routes>
			</div>
		</div>
	)
}

export default App