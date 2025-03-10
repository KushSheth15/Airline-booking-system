const { StatusCodes } = require('http-status-codes');
const {CityRepository} = require('../repositories');
const AppError = require('../utils/errors/app-error');

const cityRepository = new CityRepository();

async function createCity(data){
    try {
        const city = await cityRepository.create(data);
        return city;
    } catch (error) {
       if(error.name === 'SequelizeUniqueConstraintError'){
        let explanation = [];
        error.errors.forEach((err) => {
            explanation.push(err.message)
       });
        throw new AppError(explanation,StatusCodes.BAD_REQUEST);
       }
        throw new AppError('Cannot Create new City Object',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function deleteCity(id){
    try {
        const city = await cityRepository.destroy(id);
        return city;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('City not found!',error.statusCode);
        }
        throw new AppError('Cannot Delete city',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createCity,
    deleteCity
}