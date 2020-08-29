import { Repository, EntityRepository } from 'typeorm';
import { Student } from './students.entity';

@EntityRepository()
export class UserRepository extends Repository<Student> {}
