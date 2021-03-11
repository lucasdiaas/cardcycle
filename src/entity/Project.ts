/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
import { Entity, Column, OneToMany } from 'typeorm';

import { Base } from './Base';
import { Board } from './Board';
import { Employment } from './Employment';

@Entity()
export class Project extends Base {
  @Column()
  name: string;

  @OneToMany(() => Employment, (employment) => employment.project)
  employments: Employment[];

  @OneToMany(() => Board, (board) => board.project)
  boards: Board[];
}
