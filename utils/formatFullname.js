module.exports = (fullName) => {
  if(typeof fullName !== 'string') return 'Error';
  if (fullName.length == 0) return 'Error';

  const [ firstName, lastName ] = fullName.split(' ');
  const split = fullName.split(' ');

  if(!firstName || !lastName || split.length > 2) return 'Error';

  return firstName[0].toUpperCase() + firstName.slice(1).toLowerCase() + ' ' + lastName[0].toUpperCase() + lastName.slice(1).toLowerCase() ;
};