const zod = require('zod');

const createUser = zod.object({
  name: zod.string(),
  description: zod.string(),
  interests: zod.array(zod.string()),
  linkedin: zod.string().url(),
  twitter: zod.string().url()
});

module.exports = {
  createUser
}
