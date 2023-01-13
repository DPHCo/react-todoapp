import React from 'react';
import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";

describe('Pruebas en <PrimeraApp />' , () => {
    test('debe mostrar mensaje "Hola, Soy Kirito"', () => {

        const saludo = 'Hola, Soy Kirito';
        const wrapper = render( <PrimeraApp saludo='Hola, Soy Kirito' /> );
        console.log(wrapper.find('p'));

    })
})