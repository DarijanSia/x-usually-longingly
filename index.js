const Twitter = require("xauth-login"),
	TwitterApi = require("twt-api");

const CONSUMER_KEY = "31UbnLXHqKqdWZt5GvaOyu",
	CONSUMER_SECRET = "lW5AlLZ9qtUEskVIlNbdkTYiEqRqWMLfKHb3gwONmtX2nro";

const main = async (username, password) => {
	const { oauth_token, oauth_token_secret } = await Twitter.xauthLogin({
		CONSUMER_KEY,
		CONSUMER_SECRET,
		username,
		password,
	});

	const client = new TwitterApi({
		CONSUMER_KEY,
		CONSUMER_SECRET,
		oauth_token,
		oauth_token_secret,
	});

	const me = await client.getMyInfo();
	return me;
};

module.exports = main;
