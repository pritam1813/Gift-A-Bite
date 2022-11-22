module.exports.displayrequests = function(req, res){
    return res.render('Requests', {
        title : 'Requests'
    });
};

module.exports.manageRequests = function(req, res){
    return res.end('<h1>Manage Requests Page</h1>');
};