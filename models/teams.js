module.exports = (sequelize, Sequelize) => { //Defining our table layout form the DATABASE
    return sequelize.define('teams', {
        id: { 
            type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true,
        },
        location: {type: Sequelize.STRING,},
        mascot: {type: Sequelize.STRING,},
        abbreviation: {type: Sequelize.STRING,},
        conference: {type: Sequelize.STRING,},
        division: {type: Sequelize.STRING,},
    })

}

/*
CREATE TABLE teams (
	id INT AUTO_INCREMENT, *****
	location VARCHAR(255),
	mascot VARCHAR(255),
	abbreviation VARCHAR(255),
	conference ENUM('AFC', 'NFC'),
	division ENUM('North', 'South', 'East', 'West'),
	createdAt DATETIME DEFAULT NOW(),                      //I can ignore these attributes of my table
	updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),      //because sequelize manages it for us.
	deletedAt DATETIME DEFAULT NOW(),                      //sequelize assumes they are there
	PRIMARY KEY(id) *****
);
*/