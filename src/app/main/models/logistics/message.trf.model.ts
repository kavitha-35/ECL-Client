import { MessageModel } from './message.model';
import { TestReportFormModel } from './trf.model';

export interface MessageTrfModel extends MessageModel {
    noOfTrf            : number;
    testReportForm     : TestReportFormModel;
}
