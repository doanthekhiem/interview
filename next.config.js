/**
 * @type {import('next').NextConfig}
 */
const path = require("path");
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["storage.googleapis.com", "i.pravatar.cc"],
  },
  modularizeImports: {
    "@material-ui/core/": {
      transform: "@material-ui/core/{{member}}",
    },
    "@material-ui/lab/": {
      transform: "@material-ui/lab/{{member}}",
    },
    "@material-ui/icons/?(((\\w*)?/?)*)": {
      transform: "@material-ui/icons/{{ matches.[1] }}/{{member}}",
    },
  },
};
