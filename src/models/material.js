module.exports = (sequelize, DataTypes) => {
    const Material = sequelize.define('material', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: true
        },
        volume:{
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        costPerCubicMeter: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        color:{
            type: DataTypes.STRING,
            allowNull: false
        },
        deliveryDate: {
            type: DataTypes.DATE,
            allowNull: true
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: DataTypes.DATE,
    });
    return Material;
};