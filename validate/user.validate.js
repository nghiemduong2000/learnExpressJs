module.exports.createPost = (req, res, next) => {
    let errors = [];
    if (!req.body.name) {
        errors.push('Name is required.');
    }
    if (!req.body.phone) {
        errors.push('Phone is required.');
    }
    if (errors.length) {
        res.render('user/create', {
            values: req.body,
            errors: errors
        });
        return;
    }
    next();
}