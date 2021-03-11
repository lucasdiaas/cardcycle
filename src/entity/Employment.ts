/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
import { Entity, Column, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Activity } from './Activity';

import { Base } from './Base';
import { Project } from './Project';
import { User } from './User';

@Entity()
export class Employment extends Base {
  @Column()
  role: string;

  @ManyToOne(() => User, (user) => user.employments)
  @JoinColumn()
  user: User;

  @ManyToOne(() => Project, (project) => project.employments)
  @JoinColumn()
  project: Project;

  @OneToMany(() => Activity, (activity) => activity.board)
  activities: Activity[];
}
