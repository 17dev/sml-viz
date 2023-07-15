```javascript
import mysql from 'mysql';
import pg from 'pg';

const Database = {
  connection: null,

  connect: function(dbType, host, user, password, database) {
    if (dbType === 'mysql') {
      this.connection = mysql.createConnection({
        host: host,
        user: user,
        password: password,
        database: database
      });
    } else if (dbType === 'postgres') {
      this.connection = new pg.Client({
        host: host,
        user: user,
        password: password,
        database: database
      });
    } else {
      throw new Error('Invalid database type. Only mysql and postgres are supported.');
    }

    this.connection.connect(function(err) {
      if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
      }

      console.log('Connected to database.');
    });
  },

  disconnect: function() {
    if (this.connection) {
      this.connection.end(function(err) {
        if (err) {
          console.error('Failed to disconnect from database: ' + err.stack);
          return;
        }

        console.log('Disconnected from database.');
      });
    }
  },

  query: function(sql, params, callback) {
    this.connection.query(sql, params, function(err, results) {
      if (err) {
        console.error('Database query failed: ' + err.stack);
        return;
      }

      callback(results);
    });
  }
};

export default Database;
```