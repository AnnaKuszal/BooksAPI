const fullname = require('../formatFullname.js');
const expect = require('chai').expect;


describe('FullName', () => {

  it('should return an error if "fullName" arg length is 0', () => {
    expect(fullname('')).to.equal('Error');
  });

  it('should return an error if "fullName" arg is not a string', () => {
    expect(fullname(undefined)).to.equal('Error');
    expect(fullname(12)).to.equal('Error');
    expect(fullname({})).to.equal('Error');
    expect(fullname([])).to.equal('Error');
    expect(fullname(function() {})).to.equal('Error');
  });

  it('should return Error if fullName has wrong format', () => {
    expect(fullname('John Doe Test')).to.equal('Error');
    expect(fullname('John')).to.equal('Error');
  });

//   it('should return proper format of fullName', () => {
//     expect(fullname('amanda doe')).to.equal('Amanda Doe');
//     expect(fullname('JOHN DOE')).to.equal('John Doe');
//     expect(fullname('joHn doE')).to.equal('John Doe');
//   });

//   it('should return good split "fullName" if proper args', () => {
//     expect(fullname('Lorem Ipsum')).to.equal('Lorem Ipsum');
//   });
  

});