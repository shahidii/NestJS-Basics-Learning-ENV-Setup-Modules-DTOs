import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT ?? 3000;
  await app.listen(port);

  // console.log(`Application is running on: ${await app.getUrl()}`);
  console.log(`  \x1b[32m Server is running at:\x1b[0m`);
  console.log(`   \x1b[33mLocal:    http://localhost:${port}\x1b[0m`);

}


bootstrap();
