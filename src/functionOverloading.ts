export interface HighLevelQuery {
    type: 'highLevelQuery';
}

export interface LowLevelQuery {
    type: 'LowLevelQuery';
}

export interface ShallowResult {
    description: string;
}

export interface DeepResult {
    details: string;
}
export function processQuery(query: HighLevelQuery): ShallowResult;
export function processQuery(query: LowLevelQuery): DeepResult;
export function processQuery(query: HighLevelQuery | LowLevelQuery): ShallowResult | DeepResult{
    if (query.type === 'highLevelQuery')
        return {description:"This is a high level query"}
    else 
        return {details:"This is a low level query"}
}

