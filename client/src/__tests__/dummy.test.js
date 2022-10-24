describe('dummy test to map array', () => {
    it('get array of names from array of object', () => {
        const input = [
            {
                id: 1,
                name: 'A'
            },
            {
                id: 2,
                name: 'B'
            }
        ];
        const expectedOutput = ['A', 'B'];
        const output = input.map(({ name }) => name);

        expect(expectedOutput).toEqual(output);
    });
});
