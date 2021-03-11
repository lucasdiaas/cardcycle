/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
import { Entity, Column, JoinColumn, ManyToOne } from 'typeorm';

import { Base } from './Base';
import { Board } from './Board';
import { Employment } from './Employment';

@Entity()
export class Activity extends Base {
  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  status: string;

  @ManyToOne(() => Board, (board) => board.activities)
  @JoinColumn()
  board: Board;

  @ManyToOne(() => Employment, (employment) => employment.activities)
  @JoinColumn()
  employment: Employment;
}
