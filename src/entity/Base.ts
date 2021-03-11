/* eslint-disable import/prefer-default-export */
import { PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

export class Base {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: string;

  @CreateDateColumn()
  updatedAt: string;
}
