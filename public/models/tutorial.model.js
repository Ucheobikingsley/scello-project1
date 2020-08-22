module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("tutorial", {
      FirstName: {
        type: Sequelize.STRING
      },
      LastName: {
        type: Sequelize.STRING
      },
      PhoneNumber: {
        type: Sequelize.STRING
      },

      Email: {
        type: Sequelize.STRING
      }
    });
  
    return Tutorial;
  };