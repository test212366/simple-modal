function createModalWindow(options) {
	const modal = document.createElement('div')
	modal.classList.add('modal')
	modal.insertAdjacentHTML('afterbegin', `

	<div class="modal__overlay" data-close="close"></div>
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title">${options.title}</h5>
				<button type="button" class="close">
					<span data-close="close">&times;</span>
				</button>
			</div>
			<div class="modal-body">
				<p>${options.desc}</p>
			</div>
		</div>
	`)
	document.body.appendChild(modal)
	return modal
}
createModalWindow({
	title: 'nikitos',
	desc: 'momomomo'
})
const modalWindow = document.querySelector('.modal')

function openModalWindow() {
	modalWindow.classList.add('open')
}
function closeModalWindow() {
	modalWindow.classList.remove('open')
}
document.body.addEventListener('click', e => {
	if (e.target.dataset.close == 'close') closeModalWindow()
	if (e.target.dataset.open == 'open') openModalWindow()
})