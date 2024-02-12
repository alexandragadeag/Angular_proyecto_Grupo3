export interface Plan {
    id: number;
    title: string;
    descriptionShort: string;
    descriptionLong: string;
    benefits: string;

    // precio por kw hora
    minDurationInMonths: number;
    powerMinPrice: number; // 0,089 kw dia
    powerMaxPrice: number;
    // ...
    // más info...
    // ...
}