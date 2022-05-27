const aliases = (prefix = "src") => ({
  "@components": `${prefix}/components`,
  "@config": `${prefix}/config`,
  "@constants": `${prefix}/constants`,
  "@assets": `${prefix}/assets`,
  "@actions": `${prefix}/components/actions`,
  "@styles": `${prefix}/styles`,
  "@pages": `${prefix}/pages`,
  "@containers": `${prefix}/containers`,
  "@helpers": `${prefix}/helpers`,
});

module.exports = aliases;
