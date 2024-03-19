document.getElementById('roverForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    clearErrors();
    
    var rover = document.querySelector('input[name="rover"]:checked');
    var pictureDate = document.getElementById('pictureDate').value;

    if (!rover) {
        document.getElementById('roverErrorMsg').textContent = 'Please select a rover.';
        return;
    }

    if (!pictureDate) {
        document.getElementById('dateErrorMsg').textContent = 'Please select a picture date.';
        return;
    }

    var apiKey = "TR1pehwX00SgNmiGLYQwfenJbN2C7jCY9LBqJxAe";
    var roverName = rover.value;

    var apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?earth_date=${pictureDate}&api_key=${apiKey}`;

    try {
        var response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch data from NASA API.');
        }
        var data = await response.json();
        displayPhotos(data.photos);
        displayPhotoCount(Math.min(data.photos.length, 25));
    } catch (error) {
        document.getElementById('errorMessages').textContent = error.message;
    }
});

document.getElementById('clearBtn').addEventListener('click', function() {
    clearPhotos();
    clearPhotoCount();
});

function clearErrors() {
    document.getElementById('roverErrorMsg').textContent = '';
    document.getElementById('dateErrorMsg').textContent = '';
    document.getElementById('errorMessages').textContent = '';
}

function clearPhotos() {
    document.getElementById('photoGallery').innerHTML = '';
}

function clearPhotoCount() {
    document.getElementById('photoCount').textContent = '';
}

function displayPhotos(photos) {
    clearPhotos();
    var photoGallery = document.getElementById('photoGallery');
    photos.slice(0, 25).forEach(function(photo, index) {
        var thumbnail = document.createElement('div');
        thumbnail.className = 'thumbnail';
        thumbnail.innerHTML = `<img src="${photo.img_src}" alt="Rover Photo ${index + 1}" title="${photo.camera.full_name}" onclick="showFullImage('${photo.img_src}')">`;
        photoGallery.appendChild(thumbnail);
    });
}

function displayPhotoCount(count) {
    document.getElementById('photoCount').textContent = `${count} pictures found`;
}

function showFullImage(imageUrl) {
    window.open(imageUrl);
}