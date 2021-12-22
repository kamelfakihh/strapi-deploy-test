module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fbf81508d1589a96fb10279355163998'),
  },
});
