$(document).ready(function() {
    $("#app").on('click', 'img', handleClick);
    $("#app").on('click', 'button', handleClick);

    render();

    function handleClick(e) {
        if (e.target.id.indexOf('album') === 0) {
            return handleAlbumClick(e);
        }
        if (e.target.id.indexOf('image') === 0) {
            return handleImageClick(e);
        }
        if (e.target.id === 'backButton') {
            return handleBackClick(e);
        }
    }

    function handleImageClick(e) {
        var id = e.target.id.substr(5);

        data.selectedImage = data.selectedAlbum.images.find(function(image) {
            return image.id === id;
        });

        render();
    }

    function handleAlbumClick(e) {
        var id = e.target.id.substr(5);

        data.selectedAlbum = data.albums.find(function(album) {
            return album.id === id;
        });

        render();
    }

    function handleBackClick(e) {
        data.selectedImage = undefined;

        render();
    }

    function render() {
        var templateName = "#albumGalleryTemplate";

        if (data.selectedAlbum) {
            templateName = "#albumListTemplate";
        }

        if (data.selectedImage) {
            templateName = "#imageTemplate";
        }

        var template = $(templateName).text();
        var rendered = Mustache.render(template, data);
        $("#app").html(rendered);
    }
});
