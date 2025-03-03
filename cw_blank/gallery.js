const gallery = function(galleryId) {
    const galleryElement = document.getElementById(galleryId);
    const thumbs = galleryElement.querySelectorAll('.gallery__thumbs .thumb');
    const preview = galleryElement.querySelector('.gallery__preview');
    const previewImage = document.createElement('img');
    const closeButton = galleryElement.querySelector('.gallery__preview_close');
    const filterButtons = galleryElement.querySelectorAll('.filter-btn');

    preview.appendChild(previewImage);

    thumbs.forEach(thumb => {
        thumb.addEventListener('click', function(event) {
            event.preventDefault();
            const imgSrc = this.querySelector('img').src;
            previewImage.src = imgSrc;
            preview.classList.remove('hide');
            preview.classList.add('show');
        });
    });

    closeButton.addEventListener('click', function() {
        preview.classList.remove('show');
        preview.classList.add('hide');
    });

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            thumbs.forEach(thumb => {
                if (filter === 'all' || thumb.classList.contains(filter)) {
                    thumb.style.display = 'flex';
                } else {
                    thumb.style.display = 'none';
                }
            });
        });
    });
};

gallery('gallery');