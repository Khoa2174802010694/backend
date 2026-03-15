const Repository = require('./../../repositories/workSchedulesRepository');

const WorkSchedulesService = {

    getAll: async (page, pageSize, params = {}) => {
        return await Repository.getAll(page, pageSize, params);
    }
};

module.exports = WorkSchedulesService;
