import sumThreat from "../q2.1";

test('Should be zero', () => {
    expect(sumThreat([], "HIGH")).toBe(0);
  });

  test('Should be 12', () => {
    expect(sumThreat([{
"assetId": 1,
"importance": "HIGH",
"threatLevel": 12
}], "HIGH")).toBe(12);
  });


    test('Should filter', () => {
    expect(sumThreat([{
"assetId": 1,
"importance": "HIGH",
"threatLevel": 12
},{
"assetId": 1,
"importance": "LOW",
"threatLevel": 10
}], "LOW")).toBe(10);
  });