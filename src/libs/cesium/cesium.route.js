const BusinessController = require('./cesium.controller'); 
const BusinessModel = require('./cesium.model'); 


exports.cesiumRoutes = function (app) {
    
    app.get('/materials', [ 
        BusinessController.getAllMaterials
    ]);


    app.post('/insertMaterial', [ 
        
        BusinessController.insertData
    ]
    );

    app.put('/updateMaterial/:materialId', [ 
        BusinessController.updateMaterialById
    ]);

    app.delete('/deleteMaterial/:materialId', [ 
        BusinessController.deleteMaterialById
    ]);

};