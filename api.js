var BloggerController = require('./controllers/blogger');

exports.serveRoutes = function(app) {
	app.get('/api/v0.1/bloggers', function(res, req) {
		BloggerController.getAllProfiles(true, function (profiles, error) {
			if(error) {
				res.send(error);
			}
			else {
				res.json(profiles);
			}
		});
	});
	
	app.get('/api/v0.1/bloggers/:vanityUrl', function(res, req) {
		var vanityUrl = req.params.vanityurl;
		BloggerController.getProfileByVanityUrl(vanityUrl, function (profile, error) {
			if(error) {
				res.send(error);
			}
			else {
				res.json(profile);
			}
		});
	});
};