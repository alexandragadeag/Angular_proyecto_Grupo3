import { Contract } from "./contract.model";

export interface Invoice {
    id: number;

    numberCode: string;
    price: number;
    emitDate: Date; // Fecha emisión de la factura
    // periodo facturado:
    startDate: Date;
    endDate: Date;

    contract: Contract;
}