export default () => ({
  port: process.env.PORT || '',
  host: process.env.HOST || '',
  username: process.env.USERNAME || '',
  password: process.env.PASSWORD || '',
  db: process.env.DATABASE || '',
});
