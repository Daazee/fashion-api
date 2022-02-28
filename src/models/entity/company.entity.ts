import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
@Entity()
export class Company {

    @PrimaryGeneratedColumn()
    companyid: number;

    @Column()
    name: string;
    
    @Column()
    addressLine1: string;

    @Column()
    addressLine2: string;

}