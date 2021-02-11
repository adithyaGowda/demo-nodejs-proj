function route(pathName, handle, res, reviewData) {
    console.log(`Routing a request for ${pathName}`);
    if(typeof handle[pathName] === 'function'){
       handle[pathName](res, reviewData);
    }else{
        console.log(`No handler for ${pathName}`);
        res.writeHead(404 , {"content-type":"text/plain"});
        res.write("Error 404 page not found");
        res.end();
    }
    
}

exports.route = route;