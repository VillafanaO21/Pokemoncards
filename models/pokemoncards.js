'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PokemonCards extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PokemonCards.init({
    Name: DataTypes.STRING,
    PowerName: DataTypes.STRING,
    PowerDMG: DataTypes.INTEGER,
    Weakness: DataTypes.STRING,
    Resistance: DataTypes.STRING,
    RetreatCost: DataTypes.INTEGER,
    PokemonPic: DataTypes.STRING,
    PowerName2: DataTypes.STRING,
    PowerDMG2: DataTypes.INTEGER,
    orb1: DataTypes.INTEGER,
    orb2: DataTypes.INTEGER,
    Type: DataTypes.STRING,
    orb3: DataTypes.INTEGER,
    orb4: DataTypes.INTEGER,
    orb5: DataTypes.INTEGER,
    orb6: DataTypes.INTEGER,
    Health: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'PokemonCards',
    tableName: 'PokemonCards',
    timestamps:false
  });
  return PokemonCards;
};