export default () => ({
  env: process.env.NODE_ENV,
  profile: process.env.PROFILE,
  port: Number(process.env.PORT) + Number(process.env.PROFILE),
  name: process.env.APP_NAME,
  key: process.env.APP_KEY,
  isProd: isProd(process.env.NODE_ENV),
});

const isProd = (env: string) => {
  if (env == 'prod') {
    return true;
  } else {
    return false;
  }
};
