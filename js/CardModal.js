
// Select the modal element by its ID 'pictureModal'
const vacationPhotoModal = document.getElementById('pictureModal');

// Add an event listener for the 'show.bs.modal' event on the modal
vacationPhotoModal.addEventListener('show.bs.modal', function (event) {
    // Get the element that triggered the modal (the card that was clicked)
    const button = event.relatedTarget;
    // Retrieve the data attributes from the triggering element (card)
    const title = button.getAttribute('data-title');
    const img = button.getAttribute('data-img');
    const desc = button.getAttribute('data-desc');

    // Select the elements within the modal that will be updated
    const modalTitle = vacationPhotoModal.querySelector('.modal-title');
    const modalImage = vacationPhotoModal.querySelector('#modalImage');
    const modalDescription = vacationPhotoModal.querySelector('#modalDescription');

     // Update the modal's content with the retrieved data
    modalTitle.textContent = title; // Set the modal title
    modalImage.src = img; // Set the modal image source
    modalDescription.textContent = desc; // Set the modal description
});