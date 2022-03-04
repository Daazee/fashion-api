import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
@Entity()
export class Customer {

    @PrimaryGeneratedColumn()
    customerid: number;

    @Column()
    companyid: number;

    @Column()
    lastname: string;

    @Column()
    firstname: string;

    @Column()
    othername: string;

    @Column()
    sex: string;

    @Column()
    emailaddress: string;

    @Column()
    phonenumber: string;

    @Column()
    addressLine1: string;

    @Column()
    addressLine2: string;

    @Column()
    state: string;
}