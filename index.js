function toggleDescription(element) {
    const description = element.querySelector('.uses-description');
    description.classList.toggle('open');
}

function toggleOffcanvas() {
    const offcanvasMenu = document.getElementById('offcanvasMenu');
    offcanvasMenu.classList.toggle('open');
}
    document.getElementById('file-input').addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const previewContainer = document.getElementById('preview-container');
                previewContainer.innerHTML = `<img src="${e.target.result}" alt="Uploaded Image" class="img-fluid" style="max-width: 100%; max-height: 300px;"/>`;
            }
            reader.readAsDataURL(file);  // Read the image as base64
        }
    });

    // Track if an image has been uploaded
let isImageUploaded = false;

// Event listener for file input change (image upload)
document.getElementById('file-input').addEventListener('change', function (event) {
    const file = event.target.files[0]; // Get the selected file
    const previewContainer = document.getElementById('preview-container'); // Preview container
    const placeholderText = document.getElementById('placeholder-text'); // Placeholder text
    const continueBtn = document.getElementById('continue-btn'); // Continue Process button

    // Check if the file is an image
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();

        // When the file is loaded
        reader.onload = function (e) {
            // Create an image element
            const img = document.createElement('img');
            img.src = e.target.result;
            img.style.maxWidth = '40%';
            img.style.borderRadius = '10px';

            // Clear the preview container and append the image
            previewContainer.innerHTML = ''; 
            previewContainer.appendChild(img);

            // Hide placeholder text
            placeholderText.style.display = 'none';

            // Mark that an image has been uploaded
            isImageUploaded = true;

            // Show the Continue Process button
            continueBtn.style.display = 'inline-block';
        };

        // Read the image file as a Data URL
        reader.readAsDataURL(file);
    }
});

// Event listener for Continue Process button click
document.getElementById('continue-btn').addEventListener('click', function () {
    // Check if an image has been uploaded
    if (!isImageUploaded) {
        // If no image is uploaded, show an alert
        alert('Please upload an image before continuing.');
    } else {
        // If an image is uploaded, show the loading screen
        document.getElementById('loading-screen').style.display = 'block';

        // Delay the redirection by 4 seconds (4000 ms)
        setTimeout(function () {
            window.location.href = 'result.html'; // Redirect to result.html
        }, 4000);
    }
});
