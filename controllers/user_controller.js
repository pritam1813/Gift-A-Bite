module.exports.profile = function(req, res){
    return res.end('<h1>This is the profile page</h1>');
};

module.exports.edit = function(req, res){
    return res.end('<h1>Eddit your profile</h1>');
};

module.exports.default = function(req,res){
    return res.end('profile');
};