module.exports.profile = function(req, res){
    return res.render('Users', {
        title : 'User'
    });
};

module.exports.edit = function(req, res){
    return res.end('<h1>Eddit your profile</h1>');
};

module.exports.default = function(req,res){
    return res.end('profile');
};