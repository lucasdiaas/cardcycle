/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
import { Entity, Column, OneToMany } from 'typeorm';

import { Base } from './Base';
import { Employment } from './Employment';

@Entity()
export class User extends Base {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  authenticationToken: string;

  @OneToMany(() => Employment, (employment) => employment.user)
  employments: Employment[];
}
