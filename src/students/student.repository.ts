import { Repository, EntityRepository } from 'typeorm';
import { Student } from './students.entity';

@EntityRepository()
export class StudentRepository extends Repository<Student> {}
