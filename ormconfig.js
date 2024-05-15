
export const type = 'postgres';
export const host = 'localhost';
export const port = 5432;
export const username = 'postgres';
export const password = 'admin1232123';
export const database = 'postgres';
export const synchronize = true;
export const entities = ['src/Entities/*{.ts,.js}'];
export const migrations = ['src/migrations/*{.ts,.js}'];
export const cli = {
  migrationsDir: 'src/migrations',
};