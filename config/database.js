module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'sqlite',
        filename: env('DATABASE_FILENAME', '.tmp/data.db'),
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});



/*
settings: {
        client: 'postgres',
        connection: {
          host     : '127.0.0.1',
          user     : 'postgres',
          password : 'Admin123',
          database : 'postgres',
          charset  : 'utf8'
        }
      },

*/