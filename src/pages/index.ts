import * as React from 'react';

export { HomePage } from './home/index';

export const CharacterPage = React.lazy(() => import('./home/character-page'))
export const Practice = React.lazy(() => import('./practice/index'))
export const RecepcionRemitos = React.lazy(() => import('./recepcion-remitos/index'))
export const GestionRemitos = React.lazy(() => import('./gestion-remitos/GestionRemitos'))