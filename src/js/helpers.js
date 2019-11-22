// # Helpers
//
// A handy set of helpers for use in miscellaneous projects.
// You can import all of them or just the ones you need.

// ## grabElement()
// 
// A shortcut to `document.querySelector()` but allows you to
// send in an already "grabbed" element (which will then be
// returned verbatim).
// 
// ### Example
//
// ```javascript
// import { grabElement as $ } from './vendor/helpers'
//
// const logo = $('.logo')
// const bigLogo = '.container > .biggie'
//
// showMe(logo)
// showMe(bigLogo)
//
// function showMe(element) {
//   $(element).classList.add('showing')
// }
// ```

function grabElement(source, context = document) {
	if (typeof source === 'string') {
		return context.querySelector(source)
	} else {
		return source
	}
}

//
// ## grabAll()
//
// Same as `grabElement()` but using `querySelectorAll()` instead.
//
// ### Example
//
// ```javascript
// import { grabAll as $$ } from './vendor/helpers'
//
// const cards = $$('main > .card')
// ```

function grabAll(source, context = document) {
	if (typeof source === 'string') {
		return context.querySelectorAll(source)
	} else {
		return source
	}
}

// Export all functions by name so they can be imported individually

export { grabElement, grabAll }

