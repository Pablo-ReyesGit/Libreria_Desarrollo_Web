module.exports = {
  HOST: "ep-super-thunder-afluh8zg-pooler.c-2.us-west-2.aws.neon.tech",
  USER: "neondb_owner",
  PASSWORD: "npg_g7jwpIQemfO0",
  DB: "neondb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

