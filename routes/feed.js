var BlogPost = require('../lib/model/blog-post');
module.exports = function(app) {
    app.get('/feed/rss', function(req, res) {
        BlogPost.find({})
            .sort('-publishedAt')
            .where('published', true)
            .limit(20)
            .select('title slug publishedAt teaser')
            .exec(function(err, posts) {
                if (err) return next(err);
                return res.render('rss' {
                    posts: posts
                });
            });
    });
};
