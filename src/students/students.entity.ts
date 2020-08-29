import { BaseEntity, PrimaryGeneratedColumn, Entity, Column } from 'typeorm';

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', unique: true, length: 25, nullable: false })
  name: string;

  @Column({ type: 'varchar', nullable: false })
  lastName: string;

  @Column({ type: 'varchar', nullable: false })
  age: number;

  @Column({ type: 'varchar', nullable: false })
  email: string;

  // @ManyToMany(
  //   type => Role,
  //   role => role.users,
  //   { eager: true },
  // )
  // @JoinTable({ name: 'user_roles' })
  // roles: Role[];
}
