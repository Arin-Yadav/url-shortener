const { nanoid } = require("nanoid");
const URL = require("../models/url");

async function handleGenerateNewShortURL(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is required" });
  const shortId = nanoid(8);

  await URL.create({
    shortId: shortId,
    redirectURL: body.url,
    visitHistroy: [],
    createdBy: req.user._id,
  });

  return res.render("home", {
    id: shortId,
  })

  // return res.redirect("/");
  // return res.json({ id: shortId });
}

async function handleRedirectURL(req, res) {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistroy: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectURL);
}

async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  return res.json({
    totalClick: result.visitHistroy.length,
    analytics: result.visitHistroy,
  });
}

async function handleDeleteUsers(req, res) {
  await URL.findByIdAndDelete(req.params.id);
  return res.json({ msg: "success" });
}

module.exports = {
  handleGenerateNewShortURL,
  handleRedirectURL,
  handleDeleteUsers,
  handleGetAnalytics,
};
