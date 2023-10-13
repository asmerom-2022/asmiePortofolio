// Define a function to load the header content
function loadHeader() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'header.html', true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            const header = document.createElement('div');
            header.innerHTML = xhr.responseText;
            document.body.prepend(header);
        }
    };

    xhr.send();
}

// Call the loadHeader function to include the header on each page
loadHeader();
