/*
 * Add the code to open the AJAX request using the
 * GET method and pointing to the 'footer.html' file.
 * Then, send the ajax request.
*/

let request = new XMLHttpRequest();

request.onreadystatechange = () => {
    if (request.readyState === 4) {
        let content = document.getElementById("footer");

        content.innerHTML = request.responseText;
    }
}

request.open('GET', "footer.html");
request.send();

