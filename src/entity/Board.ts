/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
import { Entity, Column, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Activity } from './Activity';

import { Base } from './Base';
import { Project } from './Project';

@Entity()
export class Board extends Base {
  @Column()
  name: string;

  @ManyToOne(() => Project, (project) => project.employments)
  @JoinColumn()
  project: Project;

  @OneToMany(() => Activity, (activity) => activity.board)
  activities: Activity[];
}
