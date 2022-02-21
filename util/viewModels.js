// TODO change name
function postViewModel(post) {
    return {
        _id: post._id,
        title: post.title,
        keyword: post.keyword,
        location: post.location,
        date: post.date,
        image: post.image,
        description: post.description,
        author: authorViewModel(post.author),
        votes: post.votes.map(voterViewModel),
        rating: post.rating
    };
}

//TODO if it's need
function authorViewModel(user) {
    return {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName
    };
}

// TODO delete!
function voterViewModel(user) {
    return {
        _id: user._id,
        email: user.email,
    };
}

module.exports = {
    postViewModel,
    authorViewModel
};