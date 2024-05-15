    import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BeforeInsert,
    BaseEntity,
    } from "typeorm";
    import bcrypt from "bcrypt";

    @Entity()
    export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;

    @Column({ nullable: true })
    slug: string;

    @Column({ unique: true })
    email: string;

    @Column({ nullable: true })
    phone?: string;

    @Column({ nullable: true })
    profileImg?: string;

    @Column()
    password: string;

    @Column({ nullable: true })
    passwordChangedAt: Date;

    @Column({ nullable: true })
    passwordResetCode: string;

    @Column({ nullable: true, type: "timestamptz" })
    passwordResetExpires: Date;

    @Column({ nullable: true })
    passwordResetVerified: boolean;

    @Column({ default: "user" })
    role: string;

    @Column({ default: true })
    active: boolean;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    createdAt: Date;

    @Column({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP",
        onUpdate: "CURRENT_TIMESTAMP",
    })
    updatedAt: Date;

    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 12);
    }
    }
