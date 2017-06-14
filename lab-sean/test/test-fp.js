'use strict';

const expect = require('expect');
const fp = require('../lib/fp.js');

const numbers = [1, 2, 3, 4];
const num = [5, 6, 7];

describe('testing fp.js', () => {

  describe('testing map', () => {
    it('should return [2, 4, 6, 8]', () => {
      let result = fp.map(numbers, n => n * 2);
      expect(result).toEqual([2, 4, 6, 8]);
    });
    it('should return null', () => {
      let result = fp.map('no');
      expect(result).toEqual(null);
    });
  });

  describe('testing reduce', () => {
    it('should return 10', () => {
      let result = fp.reduce(numbers, [(a, c) => a + c]);
      expect(result).toEqual(10);
    });
    it('should return null', () => {
      let result = fp.reduce('no');
      expect(result).toEqual(null);
    });
  });

  describe('testing filter', () => {
    it('should return [3, 4]', () => {
      let result = fp.filter(numbers,
        n => {
          if (n > 2){
            return n;
          }
        }
      );
      expect(result).toEqual([3, 4]);
    });
    it('should return null', () => {
      let result = fp.filter('no');
      expect(result).toEqual(null);
    });
  });

  describe('testing concat', () => {
    it('should return [1, 2, 3, 4, 5, 6, 7]', () => {
      let result = fp.concat(numbers, num);
      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });
    it('should return null', () => {
      let result = fp.concat('no');
      expect(result).toEqual(null);
    });
  });

  describe('testing splice', () => {
    it('should return [3, 4]', () => {
      let result = fp.splice(numbers, 2);
      expect(result).toEqual([3, 4]);
    });
    it('should return null', () => {
      let result = fp.splice('no');
      expect(result).toEqual(null);
    });
  });
});
