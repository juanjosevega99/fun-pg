import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import configuration from './config/config';
import { StudentsModule } from './students/students.module';
// import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    StudentsModule,
    // CoursesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
