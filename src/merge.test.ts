import { merge } from './merge';

describe('Merge Function Assessment', () => {
  it('Min to Max', () => {
    const c1 = [15, 10, 5]; 
    const c2 = [1, 6, 11];  
    const c3 = [2, 7, 12];  
    
    const result = merge(c1, c2, c3);
    expect(result).toEqual([1, 2, 5, 6, 7, 10, 11, 12, 15]);
  });
  
});