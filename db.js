let connect = function(){
  if (global.connection){
    return global.connection.connect();
  }

  const { Pool } = require("pg");
  const pool = new Pool({
    connectionString: "postgres://wxzsldhp:C1eByodbjdDc6HIaJw-JUC-4Rbp5qI1j@kesavan.db.elephantsql.com/wxzsldhp"
  });

  global.connection = pool;
  return pool.connect();
}

module.exports = { connect }