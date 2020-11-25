module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'sqlite',
        filename: '../db/data.db',
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
