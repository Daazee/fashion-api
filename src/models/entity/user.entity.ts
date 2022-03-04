import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
@Entity()
export class User {

    @PrimaryGeneratedColumn()
    userid: number;

    @Column()
    emailaddress: string;
    
    @Column()
    password: string;

    @Column()
    phonenumber: string;

    @Column({ nullable: true })
    lastlogindate: Date;

    @Column()
    companyid: number;

}