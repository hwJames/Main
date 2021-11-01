import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity('tb_project')
export class Project {
  @PrimaryGeneratedColumn({
    comment: '프로젝트 번호',
  })
  pj_no: number;

  @Column({
    nullable: true,
    comment: '프로젝트 타입',
  })
  pj_type: string;

  @Index()
  @Column({
    nullable: true,
    comment: '프로젝트 태그',
  })
  pj_tag: string;

  @Index()
  @Column({
    nullable: true,
    comment: '프로젝트명',
  })
  pj_title: string;

  @Column({
    nullable: true,
    comment: '프로젝트 설명',
  })
  pj_desc: string;

  @Column({
    nullable: true,
    comment: '프로젝트 내용',
  })
  pj_content: string;

  @Column({
    nullable: true,
    comment: '프로젝트 URL',
  })
  pj_url: string;

  @Column({
    nullable: true,
    comment: '프로젝트 이미지 URL',
  })
  pj_img: string;

  @Column({
    nullable: true,
    type: 'timestamp',
    comment: '프로젝트 시작 날짜',
  })
  pj_start: Date;

  @Column({
    nullable: true,
    type: 'timestamp',
    comment: '프로젝트 종료 날짜',
  })
  pj_end: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    comment: '프로젝트 등록 날짜',
  })
  pj_regist: Date;
}
