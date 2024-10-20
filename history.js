// Function to handle the search functionality
function search() {
    const searchTerm = document.querySelector('.search-bar').value.toLowerCase();
    const predictionBoxes = document.querySelectorAll('.prediction-box');

    predictionBoxes.forEach(box => {
        const productName = box.querySelector('.product-info h3').innerText.toLowerCase();
        box.style.display = productName.includes(searchTerm) ? 'flex' : 'none';
    });
}

// Add event listeners to each prediction box
document.querySelectorAll('.prediction-box').forEach(box => {
    box.addEventListener('click', function() {
        const id = this.dataset.id; // Get product ID
        const images = JSON.parse(this.dataset.images); // Get images
        const productName = this.dataset.name; // Get product name
        const status = this.dataset.status; // Get status
        const total = this.dataset.total; // Get total items

        // Call openPopup with extracted values
        openPopup(id, images, productName, status, total);
    });
});

// Function to open the popup
function openPopup(id, images, productName, status, total) {
    document.getElementById('popup-id').innerText = id;
    const imageSection = document.getElementById('popup-images');
    imageSection.innerHTML = '';

    images.forEach(src => {
        const imgDiv = document.createElement('div');
        imgDiv.classList.add('image-box');
        const imgElement = document.createElement('img');
        imgElement.src = src;
        imgDiv.appendChild(imgElement);
        imageSection.appendChild(imgDiv);
    });

    const summaryTable = document.getElementById('popup-summary').getElementsByTagName('tbody')[0];
    summaryTable.innerHTML = `
        <tr>
            <td>${productName}</td>
            <td>${status}</td>
            <td>${total}</td>
        </tr>
    `;

    // Display the popup and overlay
    document.getElementById('popup-box').style.display = 'flex'; // Show the popup
    document.getElementById('popup-overlay').style.display = 'block'; // Show the overlay
}

// Function to close the popup
function closePopup() {
    document.getElementById('popup-box').style.display = 'none'; // Hide the popup
    document.getElementById('popup-overlay').style.display = 'none'; // Hide the overlay
}
