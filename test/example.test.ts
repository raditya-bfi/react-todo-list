import { renderHook } from '@testing-library/react';
import { useState } from 'react';

const useCustom = () => {
  const [first] = useState(1);

  return first;
};

describe('first', () => {
  it('should first', () => {
    const { result } = renderHook(useCustom);

    expect(true).toBeTruthy();
    expect(result.current).toBe(1);
  });
});
