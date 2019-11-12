module.exports = (sequelize, Sequilize) => { //Defining our table layout form the DATABASE
    return sequelize.define('teams', {
        id: { 
            type: Sequilize.INTEGER, autoIncrement: true, primaryKey: true
        },
        location: {type: Sequilize.STRING,},
        mascot: {type: Sequilize.STRING,},
        abbreviation: {type: Sequilize.STRING,},
        conference: {type: Sequilize.STRING,},
        division: {type: Sequilize.STRING,},
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
	updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),      //because I imagine it can get complcated
	deletedAt DATETIME DEFAULT NOW(),                      //so its better to let mysql/workbench handle this
	PRIMARY KEY(id) *****
);
*/