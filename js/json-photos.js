const loadPhotos = async (id = '') => {
    const url = `https://jsonplaceholder.typicode.com/photos/${id}`;
    const res = await fetch(url);
    const data = await res.json()
    if (id === '') {
        displayPhotos(data.slice(0, 2))
    } else {
        photoDetails(data)
    }
}

const displayPhotos = photos => {
    const photosContainer = document.querySelector('[data-phots-container]')
    photos.forEach(photo => {
        photosContainer.innerHTML += `
        <div onclick="loadPhotos(${photo.id})" data-modal-target="defaultModal" data-modal-toggle="defaultModal" class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img class="p-8 rounded-t-lg" src="${photo.url}" alt="product image" />
            <div class="px-5 pb-5">
                    <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">${photo.title.charAt(0).toUpperCase() + photo.title.slice(1)}</h5>
            </div>
        </div>

        `
    });
}

const photoDetails = photo => {
    const photoDetailsContainer = document.querySelector('[data-photo-details-container]')
    photoDetailsContainer.innerHTML = `
        <div class="w-9/12 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img class="rounded-t-lg" src="${photo.url}" alt="" />
        <img class="rounded-t-lg text-center mx-auto my-4" src="${photo.thumbnailUrl}" alt="" />
        <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${photo.title.charAt(0).toUpperCase() + photo.title.slice(1)}</h5>
        </div>
        </div>

    `;

    console.log(photo);
    console.log(photoDetailsContainer);
}

loadPhotos()