import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Post } from "../../post/model";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  password: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  secondName: string;

  @Column()
  nickName: string;

  @Column()
  avatar: string;

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];
}
