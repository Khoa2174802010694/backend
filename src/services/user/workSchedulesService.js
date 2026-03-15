const Repository = require('./../../repositories/workSchedulesRepository');

const WorkSchedulesService = {

    getAll: async (params = {}) => {   
        return await Repository.getAll(params);
    }
};

module.exports = WorkSchedulesService;
