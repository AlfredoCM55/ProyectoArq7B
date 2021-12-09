import { IssueType } from './models/schema.model';

export const appConstants = {
    issueTypeListWithColor: {
        [IssueType.Bug]: {
            name: IssueType.Bug,
            color: '#ff0000'
        },
        [IssueType.Task]: {
            name: IssueType.Task,
            color: '#00FF7F'
        },
        [IssueType.SubTask]: {
            name: IssueType.SubTask,
            color: '#FFFF00'
        }
    }
};
