const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const User = require("./user");

class Album extends Model {}

Album.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  path_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'user',
      key: 'id',
    },
  },
}, 
  {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'album',
  }
)

module.exports = Album;