const { Quote, Transportation, Airports, User } = require("../db/models");

const getAllQutes = async () => {
  try {
    const Quotes = await Quote.findAll({
      attributes: [
        "updatedAt",
        "createdAt",
        "depatureDate",
        "id",
        "price",
        "returnDate",
      ],
      order: [["createdAt", "ASC"]],
      include: [
        {
          model: Airports,
          as: "from",
          attributes: ["id", "name"],
          required: true,
        },
        {
          model: Airports,
          as: "dest",
          attributes: ["id", "name"],
          required: true,
        },
        {
          model: Transportation,
          as: "transportation",
          attributes: ["id", "type"],
          required: true,
        },
        {
          model: User,
          as: "user",
          required: true,
        },
      ],
    });
    return Quotes;
  } catch (error) {
    return error;
  }
};

module.exports = getAllQutes;
