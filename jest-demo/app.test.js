const app = require('./app')

test('should equal 3 when 0.1 and 0.2 are passed', () => {
    expect(app.add(0.1,0.4)).toBeCloseTo(0.3,1);
    // test fails
})

test('should contain will in the array', () => {
    expect(app.array).toContain('will');
})