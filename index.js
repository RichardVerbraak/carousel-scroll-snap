// Source on scroll snap https://www.reddit.com/r/webdev/comments/v1rjlk/how_do_nike_and_apple_make_such_smooth_and_touch/

const dots = document.querySelector('.dots')

dots.addEventListener('click', (e) => {
	const target = e.target

	if (!target.matches('.dot')) {
		return
	}

	const index = Array.from(dots.children).indexOf(target)
	const selector = `.item:nth-child(${index + 1})`
	const item = document.querySelector(selector)

	item.scrollIntoView({
		behavior: 'smooth',
		inline: 'start',
	})
})
