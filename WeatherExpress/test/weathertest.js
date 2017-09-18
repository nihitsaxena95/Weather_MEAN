let supertest= require('supertest');
let assert = require('chai').assert;
let app = require('../app');
let url = supertest("127.0.0.1:8080");
let sinon = require('sinon');
let coll = require('../model/schema');
let mainstub=sinon.stub(coll,'find');
let mainstub1 = sinon.stub(coll,'update')
let mainstub2 = sinon.stub(coll,'insertMany')
let mainstub3 = sinon.stub(coll,'remove')

describe("List Favourite Router Test",() => {
	beforeEach(()=> {
		mainstub.yields(null,[{
	city : "Delhi",
	country  : "India",
	date : "2017-09-11",
	maximum : 29,
	minimum : 24,
	description : "Couldy",
	icon : "//api.icon/ico.png"
}]);
	})
	it("Response check" , (done) => {
		url.get('/')
		.expect('Content-Type','application/json; charset=utf-8')
		.end((err,res) => {
			if(err) {
			console.log(err);
		} else {
			assert.equal(res.body[0].city,"Delhi");
			done();
		}
		})
	})
})


describe("Update Router Test",() => {
	beforeEach(()=> {
		mainstub1.withArgs({date: '2017-09-11', city: 'Delhi'},{$set : {"description" : 'Couldy partial'}}).yields(null,{
	city : "Delhi",
	country  : "India",
	date : "2017-09-11",
	maximum : 29,
	minimum : 24,
	description : "Couldy",
	icon : "//api.icon/ico.png"
});
	})
	it("update Response check" , (done) => {
		url.put('/update')
		.set({ 'headers' : {'Content-Type' : 'application/x-www-form-urlencoded', 'authorization' : 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjU5YjY5M2FiYTNkYmIyNjNlMmI2OWExYSIsInVzZXJuYW1lIjoicm9vdCIsImVtYWlsIjoibmloaXRleHRyYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6Imphc21pbmU5IiwicGhvbmUiOjk3MTYyNTE2MjB9LCJpYXQiOjE1MDUxOTc0MTcsImV4cCI6MTUwNTI0NzQxN30.ieo_c6Ijgl0nOa3QeBd-EUNdNpOZdCxZw1afSrn1TL0'}})
		.expect('Content-Type','application/json; charset=utf-8')
		.send({date: '2017-09-11', city: 'Delhi', description : 'Couldy partial'})
		.end((err,res) => {
			if(err) {
			console.log(err);
		} else {
			assert.equal(res.body.nModified,0);	
			done();
		}
		})
	})
})

describe("Login Router Test",() => {
	beforeEach(()=> {
		mainstub2.withArgs({message: "success",authorization :"bearer skajdfnkjanckjnaskdj"});
	})
	it("insert Response check" , (done) => {
		url.post('/login')
		.send({email : "nihitextra@gmail.com", password : "jasmine9"})
		.expect('Content-Type','application/json; charset=utf-8')
		.end((err,res) => {
			if(err) {
			console.log(err);
		} else {	
			assert.equal(res.body.message,"success");
			done();
		}
		})
	})
})


describe("RegisterRouter Test",() => {
	beforeEach(()=> {
		mainstub2.yields({message : "success"})
	})
	it("insert Response check" , (done) => {
		url.post('/register')
		.send({email : "nihitextra@gmail.com", password : "jasmine9"})
		.expect('Content-Type','application/json; charset=utf-8')
		.end((err,res) => {
			if(err) {
			console.log(err);
		} else {	
			assert.equal(res.body.message,"Email already exists");
			done();
		}
		})
	})
})


describe("Delete Router Test",() => {
	beforeEach(()=> {
		mainstub3.yields(null,[{
	city : "Delhi",
	country  : "India",
	date : "2017-09-11",
	maximum : 29,
	minimum : 24,
	description : "Couldy",
	icon : "//api.icon/ico.png"
}]);
	})
	it("Delete Response check" , (done) => {
		url.delete('/remfav/2017-09-17/Delhi')
		.set({"Content-Type" : "application/x-www-form-urlencoded","Authorization" : "sdfsadvdsfvvadsasvd"})
		.expect('Content-Type','application/json; charset=utf-8')
		.end((err,res) => {
			if(err) {
			console.log(err);
		} else {	
			assert.equal(res.body[0].city,"Delhi");
			//assert.equal(res.body.user.nRemoved,0);
			done();
		}
		})
	})
})
