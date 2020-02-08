import React from 'react';
import { render } from '@testing-library/react';
import Player from './Player';
import { AppContext } from '../Context';

jest.mock('../Context');

describe('Player.js', () => {
    test('Show score will be zero', () => {
        const { getbyTestId }= render(
        <Player name="Cindy" score="0" index="0" />
        );

        expectExport(getbyTestId('score').textContent).toBe(0);
    });
});