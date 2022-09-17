import { useState, useRef } from 'react'

export default function Banner() {
	const [bannerVisibility, setBannerVisibility] =
		useState(true)
	const bannerRef = useRef(null)

	const handleBanner = () => {
		setBannerVisibility(!bannerVisibility)
		if (bannerVisibility) {
			bannerRef.current.style.height = '0px'
		} else {
			bannerRef.current.style.height = 'auto'
		}
	}

	return (
		<div className='container'>
			<div className='banner'>
				<div className='header'>
					<div>
						<img
							src='/logo.svg'
							alt='Jetboost'
							className='logo'
						/>
						<h2>
							Ready to use Jetboost without limitations?
						</h2>
						<button
							className='toggle-btn'
							onClick={handleBanner}
						>
							{bannerVisibility ? 'Collapse' : 'Read more'}
						</button>
					</div>
					<div>
						<button className='toggle-btn'>
							{/* Current Plan: */}
						</button>
						<a href='#' className='plan-btn'>
							<div className='plan-badge'>
								Free Unlimited Trial
							</div>
							<span>Upgrade Here</span>
						</a>
					</div>
				</div>
				<div className='body' ref={bannerRef}>
					<div>
						<p>
							You are using the{' '}
							<strong>Free Unlimited Trial</strong> which
							gives you access to all Jetboost products to
							build with and trial for free with unlimited
							time of use on all Webflow domains that exist
							in your Webflow account. You can upgrade today
							if you’d like to experience all the percs of
							Jetboost without limitations such as:
						</p>
						<ul>
							<li>Limit Item One</li>
							<li>Another Limit Item Two</li>
							<li>We will add a third item</li>
							<li>And one more for good measure</li>
						</ul>
						<button className='button'>
							Upgrade Today
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
