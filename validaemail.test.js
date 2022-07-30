const ValidaEmail = require('./validaemail')

test('email eber.calderon@unmsm.edu.pe -> true',()=>{
    expect(ValidaEmail.isValidaEmail('eber.calderon@unmsm.edu.pe')).toBe(true)
});

test('email 1 -> true',()=>{
    expect(ValidaEmail.isValidaEmail('1')).toBe(true) 
}); 

