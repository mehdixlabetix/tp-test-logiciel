import { test, expect } from 'vitest';
import { trier } from '../src/tri';

test('Test de la fonction trier', () => {
    // Test 1: Un tableau vide
    expect(trier([])).toEqual([]);
    // Test 2: Un tableau avec des éléments déjà triés
    expect(trier([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    // Test 3: Un tableau avec des éléments triés en ordre décroissant
    expect(trier([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    // Test 4: Un tableau avec des éléments non numériques
    expect(trier(['a', 'b', 'c'])).toEqual(['a', 'b', 'c']);
    // Test 5: Un tableau avec des éléments numériques et non numériques
    expect(trier([1, 'a', 2, 'b', 3])).toEqual([1, 2, 3, "a", "b"]);
});
