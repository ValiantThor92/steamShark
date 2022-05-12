const User = require("./User");
const Image = require("./image");
const Album = require("./album");

User.hasMany(Image, {
  foreignKey: "user_id",
  onDelete: 'CASCADE'
});

User.hasMany(Album, {
  foreignKey: "user_id",
  onDelete: 'CASCADE'
});

Image.belongsTo(User, {
  foreignKey: "user_id",
});

Album.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Image, Album };