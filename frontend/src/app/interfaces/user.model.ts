export interface User {
    id: number;

    customer_name: string;
    customer_email: string; // sirve para login
    customer_phone: string;
    nif: string;
    password: string, // sirve para login

    installation_addres: string;
    installation_city: string;
    postal_code: string;
    contrat_date: string;
    account_number: number;
    m2: number;
    members: number;
    electric_car: boolean;
    
   

}