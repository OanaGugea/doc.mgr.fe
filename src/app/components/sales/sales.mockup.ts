import { IClientsListItem, Representative, Customer } from 'src/app/contracts/clients-list-item.model';

export interface Note {
    title: string;
    textContent: string;
}
export const clientsData: IClientsListItem[] = [
    { name: 'Client 1', status: 'active', task: 'Important Meeting #1' },
    { name: 'Client 2', status: 'active', task: 'Important Meeting #1' },
    { name: 'Client 3', status: 'active', task: 'Important Meeting #1' },
    { name: 'Client 4', status: 'active', task: 'Important Meeting #1' },
    { name: 'Client 5', status: 'potential', task: 'Important Meeting #1' },
    { name: 'Client 6', status: 'active', task: 'Important Meeting #1' },
    { name: 'Client 14', status: 'potential', task: 'Important Meeting #1' },

];

export const alertsData: Note[] = [
    { title: '2020-09-29', textContent: 'Important TO-DO Meeting #1' },
    { title: '2020-09-31', textContent: 'Important TO-DO Meeting #2' },
    { title: '2020-09-21', textContent: 'Important TO-DO Meeting #3' },
    { title: '2020-10-51', textContent: 'Important TO-DO Meeting #4' },
    { title: '2020-09-29', textContent: 'Important TO-DO Meeting #5' },
    { title: '2020-09-31', textContent: 'Important TO-DO Meeting #6' },
    { title: '2020-09-21', textContent: 'Important TO-DO Meeting #7' },
    { title: '2020-10-51', textContent: 'Important TO-DO Meeting #8 ' },
];

export const observationsData: Note[] = [
    { title: '2020-09-29', textContent: 'Important  Observation #1' },
    { title: '2020-09-31', textContent: 'Important  Observation #2' },
    { title: '2020-09-21', textContent: 'Important  Observation #3' },
    { title: '2020-10-51', textContent: 'Important  Observation #4' },
    { title: '2020-09-29', textContent: 'Important  Observation #5' },
    { title: '2020-09-31', textContent: 'Important  Observation #6' },
    { title: '2020-09-21', textContent: 'Important  Observation #7' },
    { title: '2020-10-51', textContent: 'Important  Observation #8 ' },
];