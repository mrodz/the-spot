import React from 'react'
import './index.css'

export default function FadeInSection(props: any) {
	const [isVisible, setVisible] = React.useState(false)
	const domRef = React.useRef()

	React.useEffect(() => {
		const onFirstRender = domRef.current as unknown as Element
		const observer = new IntersectionObserver(entries => {
			for (const entry of entries) {
				setTimeout(() => setVisible(entry.isIntersecting), props?.delay ?? 0)
			}
		})
		observer.observe(domRef.current as unknown as Element)
		return () => observer.unobserve(onFirstRender)
	}, [])

	return (
		<div
			className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
			ref={domRef as any}
		>
			{props.children}
		</div>
	)
}