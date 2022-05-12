const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Album extends Model {}

Album.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  path_name: {
    type: DataTypes.path_name, //.path_name im not sure on. tryin things
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