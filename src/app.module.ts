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
    ConfigModule.forRoot({
      load: [configuration]
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
        useFactory: async (configService: ConfigService) => ({
          ssl: true,
          type: 'postgres',
          host: configService.get('HOST'),
          port: 5432,
          username: configService.get('USERNAME'),
          password: configService.get('PASSWORD'),
          database: configService.get('DATABASE'),
          entities: [__dirname + '/../**/*.entity{.ts,.js}'],
          migrations: [__dirname + '/migrations/*{.ts,.js}']
      }),
      inject: [ConfigService]
    }),
    StudentsModule,
    // CoursesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
