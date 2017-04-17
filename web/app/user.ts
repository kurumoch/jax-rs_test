import { Notebook } from './notebook';

export class User {
    id: number;
    username: string;
    password: string;
    notebookSet: Notebook[];
}