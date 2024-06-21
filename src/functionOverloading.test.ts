import { processQuery, HighLevelQuery, LowLevelQuery, ShallowResult, DeepResult } from './functionOverloading'
describe('processQuery function', () => {
    test('should return a ShallowResult for a HighLevelQuery', () => {
        const highQuery: HighLevelQuery = { type: 'highLevelQuery' };
        const result = processQuery(highQuery);
        expect(result).toEqual({ description: 'This is a high level query' });
    });

    test('should return a DeepResult for a LowLevelQuery', () => {
        const lowQuery: LowLevelQuery = { type: 'LowLevelQuery' };
        const result = processQuery(lowQuery);
        expect(result).toEqual({ details: 'This is a low level query' });
    });
});
