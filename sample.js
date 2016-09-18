var mongoose = require('mongoose');
var faker = require('faker');
mongoose.connect('172.17.0.2/test_02');

var User = mongoose.model('User', {name: String, avatar: String, trabajo:String, area:String});

var personas = [];
for (var i=0; i<50; i++){
	var persona = {
		name: faker.name.findName(),
		avatar: faker.image.avatar(),
		trabajo: faker.name.jobTitle(),
		area: faker.name.jobArea(),
		extraTime: faker.random.number(),
		phone: faker.phone.phoneNumber(),
		email: faker.internet.email(),
		company: faker.company.companyName()
	}	
	personas.push(persona);
}

User.create(personas, function(err, personas){
	if(err) console.log(err);
	else console.log('Done!');
});

