/*
 * Add the code to open the AJAX request using the
 * GET method and pointing to the 'footer.html' file.
 * Then, send the ajax request.
 *
 * You can break the AJAX programming process into four steps.
 * First, create an XMLHTTP Request object.
 *        This step tells the web browser to get ready.
 *        The web browser needs to create an object that has
 *        all the methods you'll need to send and receive data.
 * Two, define a callback function.
 *      This is the programming you want to run when the server returns its response.
 *      The callback is where you process the returned
 *      data and update the HTML on the page.
 * Third, open a request.
 *        you give the browser two pieces of information here,
 *        the method the browser will use
 *        to send the request, usually either get or
 *        post, and the URL where the request is sent.
 * Four, send the request.
 *       The last step is finally sending off the request.
 *       The previous three steps gave the web browser all the information it
 *       needs so we can finally send off the request to the web server.
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

