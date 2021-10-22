import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Config
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration, database } from '@configs';
import * as Joi from 'joi';

// TypeORM
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration, database],
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid('dev', 'prod', 'test').default('prod'),
        PROFILE: Joi.number().default(0),
        PORT: Joi.number().default(3020),

        APP_NAME: Joi.string().default('Portfolio-API'),
        APP_KEY: Joi.string().default('1234'),

        DB_HOST: Joi.string().default('localhost'),
        DB_PORT: Joi.number().default(5432),
        DB_USER: Joi.string().default('postgres'),
        DB_PWD: Joi.string().default('1234'),
        DB_NAME: Joi.string().default('portfolio'),

        JWT_SECRET: Joi.string().default('jwtSecretKey'),
        JWT_TIME: Joi.string().default('3600s'),
        JWT_REFRESH_SECRET: Joi.string().default('jwtRefreshSecretKey'),
        JWT_REFRESH_TIME: Joi.string().default('604800s'),
      }),
      validationOptions: {
        // .ENV Test
        // allowUnknown: false,
        // abortEarly: false,
      },
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) =>
        configService.get('database'),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
