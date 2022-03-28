const cheerio = require("cheerio");
const axios = require("axios");

const slugify = (text) => {
  return text.toString().toLowerCase().replace(/\s+/g, "-");
};

const getWeights = async (index) => {
  try {
    const url = `https://www.mvis-indices.com/indices/digital-assets/mvis-cryptocompare-digital-assets-${index}/components`;
    const { data } = await axios({
      method: "GET",
      url,
    });
    const $ = cheerio.load(data);
    const weights = [];
    $("#main table tbody tr").each(async (_, el) => {
      const name = $(el).find("td:nth-child(1)").text();
      const link = $(el).find("td:nth-child(1) a")
      const symbol = `${
           link
          .attr("href")
          .split(link.text().toLowerCase())[1]
          .split('-')[0]}`
      const weight = parseFloat(
        $(el).find("td:nth-child(2)").text().replace("%", "")
      );
      weights.push({ name, symbol, weight });
    });
    return weights;
  } catch (error) {
    console.error(error);
    return [];
  }
};

module.exports = { getWeights };
