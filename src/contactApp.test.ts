import { Address,officeAddress} from "./contactApp";
describe("Tests for contact app", () => {
    test("Tests for contact app", () => {
        const address: Address = {
            doorNumber: 7,
            street1: "MG Road",
            pinCode: 576282,
            state: "Karnataka",
            country:"India"
        }
        const OfficeAddress: officeAddress = { ...address ,website:"www.codecraft.co.in"};
        expect(OfficeAddress.doorNumber).toEqual(7);
        expect(OfficeAddress.street1).toEqual("MG Road");
        expect(OfficeAddress.pinCode).toEqual(576282);
        expect(OfficeAddress.state).toEqual("Karnataka");
        expect(OfficeAddress.country).toEqual("India");
        expect(OfficeAddress.website).toEqual("www.codecraft.co.in");
  })  
})