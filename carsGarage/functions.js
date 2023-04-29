exports.getCarsBrandUniq = function (commonGarageParam) {
  let carsBrandUniq = [];
  commonGarageParam.forEach((oneBrand) => {
   let index = carsBrandUniq.findIndex((car) => {
      return car.name == oneBrand.name;
    });
    if(index == -1){
      carsBrandUniq.push(oneBrand);
    }
  });
  return carsBrandUniq;
};
/* module.exports = {getCarsBrandUniq}; */

exports.getTopThreeCarsOfGarage = function (garage) {
  return garage.slice(0, 3);
};
