import { Contract } from "./contract.model";

export interface Invoice {
    id: number;

    numberCode: string;
    price: number; //Omitir precio por consumo
    emitDate: Date; // Fecha emisión de la factura
    // periodo facturado:
    startDate: Date;
    endDate: Date;
    totalPrice: number;
    active: boolean;

    //Realizar calculo 

    //contract: Contract; 
}