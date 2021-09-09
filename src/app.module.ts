import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CountriesModule } from './countries/countries.module';

@Module({
  imports: [UsersModule, CountriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
