
/*
{
  sub: 1,
  email: 'user1@gmail.com',
  role: 'admin',
  iat: 1712656708,
  exp: 1713261508
}
*/
export interface DecodedToken {
    // subject: id del usuario
    sub: number;
    email: string;
    role: string;
    // fecha emisión
    iat: number;
    // fecha expiración
    exp: number;
}