import { Module } from '@nestjs/common';

import { PostsResolver } from './posts.resolver';
import { PostsService } from './posts.service';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [UsersModule],
  providers: [PostsService, PostsResolver],
})
export class PostsModule {}
