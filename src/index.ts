import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { Activity } from './entity/Activity';
import { Board } from './entity/Board';
import { Employment } from './entity/Employment';
import { Project } from './entity/Project';
import { User } from './entity/User';

createConnection()
  .then(async (connection) => {
    const user = new User();
    user.firstName = 'Lucas';
    user.lastName = 'Dias';
    user.email = 'lukedias@gmail.com';
    user.password = '12345';
    user.authenticationToken = '12345';
    await connection.manager.save(user);

    const project = new Project();
    project.name = 'CardCycle';

    await connection.manager.save(project);

    const employment = new Employment();
    employment.role = 'admin';
    employment.project = project;
    employment.user = user;

    await connection.manager.save(employment);

    const board = new Board();
    board.name = 'Backlog';
    board.project = project;

    await connection.manager.save(board);

    const activity = new Activity();
    activity.name = 'Setup Inicial';
    activity.description = 'Setup typescript, orm, database, eslint, prettier';
    activity.status = 'backlog';
    activity.board = board;
    activity.employment = employment;

    await connection.manager.save(activity);
  })
  .catch((error) => console.log(error));
