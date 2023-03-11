import { add as lodashAdd } from 'lodash-es';

/**
 * 加算メソッド
 * @param x - 数値
 * @param y - 数値
 * @returns - 足した値
 */
export const add = (x: number, y: number) => {
  return lodashAdd(x, y);
};
