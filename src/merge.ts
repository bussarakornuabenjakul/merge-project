  export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  const c1: number[] = [];
  for (let i = collection_1.length - 1; i >= 0; i--) {
    c1.push(collection_1[i] ?? Infinity);
  }

  const result: number[] = [];
  let p1 = 0, p2 = 0, p3 = 0;

  while (p1 < c1.length || p2 < collection_2.length || p3 < collection_3.length) {
    const v1 = c1[p1] ?? Infinity;
    const v2 = collection_2[p2] ?? Infinity;
    const v3 = collection_3[p3] ?? Infinity;

    if (v1 <= v2 && v1 <= v3) {
      result.push(v1);
      p1++;
    } else if (v2 <= v1 && v2 <= v3) {
      result.push(v2);
      p2++;
    } else {
      result.push(v3);
      p3++;
    }
  }

  return result;
}