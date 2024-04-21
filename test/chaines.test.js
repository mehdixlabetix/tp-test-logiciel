import { test, expect } from 'vitest';
import { transformerEnMajuscule } from '../src/chaines';

test('Test de la fonction transformerEnMajuscule', () => {
    // Test 1: Une chaîne vide
    expect(transformerEnMajuscule('')).toBe('');
    // Test 2: Une chaîne avec des caractères en minuscules
    expect(transformerEnMajuscule('hello')).toBe('HELLO');
    // Test 3: Une chaîne avec des caractères spéciaux
    expect(transformerEnMajuscule('!@#$%^&*()')).toBe('!@#$%^&*()');
});