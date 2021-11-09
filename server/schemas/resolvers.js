const { Drinks, Questions } = require("../models");

const resolvers = {
  Query: {
    drinks: async () => {
      return Drinks.find({});
    },
    questions: async () => {
      return Questions.find({});
    },
  },

  Mutation: {
    getOptions: async (parent, args) => {
      const { nextKey, selectedOptions } = args;

      const dbOpt = selectedOptions.reduce((r, opt) => {
        r[opt.key] = opt.value;
        return r;
      }, {});

      const responses = await Drinks.find(dbOpt);

      if (!nextKey) {
        return { data: responses, options: [] };
      }

      const nextOptions = Array.from(
        new Set(responses.map((opt) => opt[nextKey]))
      );

      return { data: responses, options: nextOptions };
    },
  },
};

module.exports = resolvers;
