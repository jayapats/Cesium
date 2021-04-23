const BusinessModel = require('./cesium.model');
const fs = require('fs');

exports.getAllMaterials = (req, res) => {
    BusinessModel.getAllMaterialData()
        .then((result) => {
            res.status(200).send(result);
        }, err => {
            res.status(406).send(err);
        });
}; 

exports.insertData = (req, res) => {   
    BusinessModel.insertMaterial(req.body).then((result) => {
        res.status(201).send(result);
    }, err => {
        res.status(406).send(err);
    });
};

exports.updateMaterialById = (req, res) => {

        BusinessModel.updateMaterialsById(req.body, req.params.materialId)
            .then((result) => {
                res.status(200).send(result);
            }, err => {
                res.status(406).send(err);
            });
    
};

exports.deleteMaterialById = (req, res) => {
    let id = req.params.materialId;
    BusinessModel.findMaterialById(id)
        .then((result) => {
            BusinessModel.deleteMaterialById(id)
                .then((r) => {
                    res.status(200).send(r);
                }, err1 => {
                    res.status(406).send(err1);
                });
        }, err => {
            res.status(406).send(err);
        });
};


exports.findMaterialById = (req, res) => {
    BusinessModel.findMaterialById(req.params.materialId)
        .then((result) => {
            res.status(200).send(result);
        }, err => {
            res.status(err.status).send(err.message);
        });
};

