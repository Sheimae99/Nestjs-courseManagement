/*
import { Course } from "src/course/entities/course.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    first_name: string;
    @Column()
    last_name: string;
    @Column()
    age: number;
    @Column()
    cne:  string;
    @ManyToMany(() => Course)
    @JoinTable()
    courses: Course[];
}
*/
import { Course } from 'src/course/entities/course.entity';
import { Entity, PrimaryGeneratedColumn, Column,ManyToOne, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  cne: string;
  @Column()
  first_name: string;
  @Column()
  last_name: string;
  @Column()
  age: number;
  

  @ManyToMany(() => Course, course=>course.students)
  @JoinTable()
  courses: Course[];

}
