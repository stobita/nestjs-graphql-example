
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface User {
    id: number;
    firstName?: string;
    lastName?: string;
}

export interface IQuery {
    user(): User | Promise<User>;
}
