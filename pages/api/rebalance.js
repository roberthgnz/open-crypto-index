async function handler(req, res) {
  const { getWeights } = require("../../utils/scraper");
  const weights = await getWeights(req.query.index);
  res.status(200).json(weights);
}

export default handler;
