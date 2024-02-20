export interface User {
    id: number;

    customer_name: string;
    customer_email: string; // sirve para login
    password: string, // sirve para login
    customer_phone: string;
    nif_cif: string;
    installation_addres: string;
    installation_city: string;
    postal_code: number;
    account_number: number;
    m2: number;
    members: number;
    electric_car: boolean;
    
   

}