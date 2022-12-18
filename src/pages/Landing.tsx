import "./Landing.sass"
import { useState, memo, MemoExoticComponent } from "react"
import ParallaxImageSplit from "../components/ParallaxImageSplit"
import landingImage from "../images/landing.png"
import boba from "../images/boba.jpeg"
import { Button } from "@mui/material"
import FadeInSection from "../components/FadeInSection"

type LandingElement = {
	(): JSX.Element,
	Splash: MemoExoticComponent<() => JSX.Element>
}

interface ParallaxImageTextSectionProps {
	even?: boolean,
	image: React.ReactElement,
	title: string,
	content: string,
	id?: number
}

function ParallaxImageTextSection(props: ParallaxImageTextSectionProps) {
	const components = [
		(
			<div className='first-description' key={0}>
				<div>
					<h1>
						{props.title}
					</h1>
					<section className="text-content">
						{props.content}
					</section>
				</div>
			</div>
		),
		(
			<div className='text-section-image' key={1}>
				<>
					{props.image}
				</>
			</div>
		)
	]

	// let dim = useContext(AppDimensionContext)
	let fin: React.ReactElement[] = [...components]

	// if the device is not mobile, select every "even" element
	// and reverse the order (to fit with the grid columns).
	const mobile = false // dim.width < styles.switchToMobileView

	if (props?.even === false && !mobile) {
		fin[0] = components[1]
		fin[1] = components[0]
	}

	return (
		<div className="parallax-image-text-section" {...!props?.even && { "data-even": true }}>
			{fin}
		</div>
	)
}

/**
 * Root for landing page.
 * @returns JSX
 */
const Landing: LandingElement = () => {
	return (
		<div className="Landing">
			<div className="w-100">
				<section className="parallax-items">
					<ParallaxImageTextSection content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." image={
						<ParallaxImageSplit fileName={boba} alt="Boba" leading="L" />
					} title="What is Lorem Ipsum?" even={true} />
					<ParallaxImageTextSection content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in section 1.10.32." image={
						<ParallaxImageSplit fileName={boba} alt="Boba" leading="R" />
					} title="Where does it come from?" even={false} />
				</section>

				<FadeInSection>
					<section className="reviews">
						<div className="reviews-title">a neighborhood classic.</div>
						{/* <FadeInSection delay={500}> */}
						<div className="reviews-subtitle">proudly serving our community since 2004</div>
						{/* https://text2image.com/en/ */}
						{/* </FadeInSection> */}
					</section>
				</FadeInSection>
			</div>
		</div>
	)
}

/**
 * Button Link to skip to main content (NOT ARIA COMPLIANT),
 * will flash rainbow colors on click.
 * @returns JSX
 */
const RainbowButton = memo(() => {
	const [traveling, setTraveling] = useState(false)

	const onClick = () => {
		setTraveling(true)

		setTimeout(() => {
			setTraveling(false)
		}, 1000)
	}

	return (
		<a id="chip" className={traveling ? "rainbow" : ""} href="#main" onClick={onClick}>
			<div id="chip-arrow"></div>
		</a>
	)
})

/**
 * Splash text inserted before the top header
 * on the landing page.
 * @returns JSX
 */
Landing.Splash = memo(() => {
	return (
		<>
			<div className="splash-wrapper">
				<div className="splash-image">
					<img alt="" src={landingImage} />
				</div>
				<div className="welcome-title">
					<div>
						<div id="title">The Spot</div>
						<div id="subtitles" className="text-content">
							<span>café &bull; lounge &bull; pastries</span>
							<span>est. 2004</span>
						</div>
						<nav className="landing-nav">
							<Button sx={{ marginRight: '1rem' }} variant="outlined">Menu</Button>
							<Button variant="outlined">Location</Button>
							<Button sx={{ marginLeft: '1rem' }} variant="outlined">Our Story</Button>
						</nav>
					</div>
				</div>
			</div>

			<div className="center-h">
				<RainbowButton />
			</div>
		</>
	)
})

export { Landing }