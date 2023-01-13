//! Revisar jestjs.io

describe('Pruebas en el archivo demo.test.js', () => {

    test('deberian ser iguales', () => { 
        const objTest = {
            name: 'Daniel',
            code: '34RT'
        };
    
        const getObj = () => ({
            name: 'Daniel',
            code: '34RT'
        })
        const obj1 = getObj();

        expect(obj1).toBe(objTest);
    
     })

})


