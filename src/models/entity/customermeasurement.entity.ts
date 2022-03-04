import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
@Entity()
export class customermeasurement {

    @PrimaryGeneratedColumn()
    customermeasurementid: number;

    @Column()
    customerid: number;

    @Column()
    companyid: number;

    @Column()
    garmenttype: string; //shirt, trouser gown etc

    @Column()
    generalsize: number;

    @Column()
    measurementtype: string;

    @Column()
    chest: number;

    @Column()
    collar: number;

    @Column()
    arm: number;

    @Column()
    back: number;

    @Column()
    waist: number;
}