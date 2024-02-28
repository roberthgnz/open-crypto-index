const cheerio = require("cheerio");
const axios = require("axios");

const slugify = (text) => {
  return text.toString().toLowerCase().replace(/\s+/g, "-");
};

const getWeights = async (index) => {
  try {
    const url = `https://www.marketvector.com/indexes/digital-assets/marketvector-digital-assets-${index}`;
    
    const { data } = await axios({
      method: "GET",
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
      url,
    });

    const $ = cheerio.load(data);

    const weights = [];

    $("#top-components table tbody tr").each(async (i, el) => {
      if (i === 0) return;

      const name = $(el).find('[data-label="Component"]').text().trim();
      const weight = $(el).find('[data-label="Weight"]').text().replace("%", "").trim();

      weights.push({ name, weight });
    });

    return weights;
  } catch (error) {
    console.error(error);
    return [];
  }
};

module.exports = { getWeights };
