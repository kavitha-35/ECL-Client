import { TestModel } from 'app/control-panel/models/tests/test.model';

export interface ProfileTestModel {
    id: string,
    name: string,
    outsourceId: number,
    integrationCode: string,
    minimumSellingPrice: number,
    revenueCap: number,
    profilePrice: number;
    status: string;
    tests: TestModel[];
}
