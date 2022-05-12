const User = require("./User");
const Image = require("./image");

User.hasMany(Image, {
  foreignKey: "user_id",
  onDelete: 'CASCADE'
})

Image.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Image };