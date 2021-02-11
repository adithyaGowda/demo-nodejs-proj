const queryString = require('querystring');

function home(res) {
    console.log("Executing 'home' handler");
    var htmlFile = `<html>
                    <head>
                        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
                    </head>
                    <body>
                        <form action="/review" method="post">
                            <textarea name="text" rows="10" cols="50"></textarea>
                            <input type="submit" value="Submit text"/>
                        </form>
                    </body>
                </html>`
    res.writeHead(200, { "content-type": "text/html" });
    res.write(htmlFile);
    res.end();
}

function review(res, reviewData) {
    console.log("Executing 'review' handler");
    res.writeHead(200, { "content-type": "text/plain" });
    res.write(`Your review is : ${queryString.parse(reviewData).text}`);
    res.end();
}

exports.home = home;
exports.review = review;
