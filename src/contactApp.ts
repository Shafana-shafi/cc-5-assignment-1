/**
 * Represents a generic address.
 */
export interface Address {
    doorNumber: number;
    street1: string;
    street2?: string; 
    pinCode: number;
    state: string;
    country: string;
}

/**
 * Represents an office address, extending the `Address` interface.
 */
export interface officeAddress extends Address {
    website: string;
}
