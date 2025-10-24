module.exports = {
  flowFile: 'flows.json',
  ui: { path: "/ui" },
  contextStorage: { default: { module: "localfilesystem" } },
  functionGlobalContext: { admin_user: "reuse-admin" },
       adminAuth: {
       type: "credentials",
       users: [{ username:"admin", password:"<bcrypt-hash>", permissions:"*" }]
  },
  httpNodeAuth: { user:"apiadmin", pass:"<bcrypt-hash>" },
};
