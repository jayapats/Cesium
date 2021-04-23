const Sequelize = require('sequelize');
const multer = require('multer'); 

const sequelize = require('../../configs/connection');
const Material = require('../../models/material')(sequelize, Sequelize);

Material.sync();

exports.getAllMaterialData = () => {
    return new Promise((resolve, reject) => {
        Material.findAll({
            attributes: ['id','name','volume','costPerCubicMeter','color','deliveryDate']
        }).then(material => {
            resolve(material);
        },err=>{
            reject({error:err});
        })
    });
}; 

exports.insertMaterial = (materialData) => {
    return new Promise((resolve, reject) => {
        Material.create(materialData).then(material => {
            resolve(material);
        },err=>{
            reject({error:err});
        });
    });
};


exports.updateMaterialsById = (materialData,id) => {
    return new Promise((resolve, reject) => {
        Material.update(materialData, {
            where: {
              id: id
            }
          }).then(material => {
            //Material.findByPk(id).then(material => {
            Material.findByPk(id).then( () => {    
                //resolve(material);
                resolve({message:"Updated Successfully!!!"});
            },err1=>{
                reject({error:err1});
            })
        },err=>{
            reject({error:err});
        });
    });
};

exports.findMaterialById = (id) => {
    return new Promise((resolve, reject) => {
        Material.findByPk(id).then(material => {
            if(material == null){
                reject({status:404,message:"Material not found"});
            }
            resolve(material);
        },err=>{
            reject({error:err});
        })
    });
};

exports.deleteMaterialById = (id) => {
    return new Promise((resolve, reject) => {
        Material.destroy({
            where: {
              id: id
            }
          }).then(() => {
            resolve({message:"Deleted Successfully!!!"});
        },err=>{
            reject({error:err});
        });
    });
}; 

