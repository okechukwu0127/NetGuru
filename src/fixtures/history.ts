export interface MockedHistory {
  name: string;
  date: number;
  temperature: number;
}

export const MOCKED_HISTORY = [
  {
    name: 'Warsaw',
    date: 1609229909675,
    temperature: 15,
  },
  {
    name: 'Cracow',
    date: 1609229919672,
    temperature: 15,
  },
  {
    name: 'Gdansk',
    date: 1609229809673,
    temperature: 15,
  },
];
