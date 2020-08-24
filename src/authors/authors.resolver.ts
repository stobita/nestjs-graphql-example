import { Resolver, Args, ResolveField, Parent, Query } from '@nestjs/graphql';
import { AuthorsService } from './authors.service';

@Resolver('Author')
export class AuthorsResolver {
  // constructor(private authorsService: AuthorsService) {}

  @Query()
  async author(@Args('id') id: number) {}
  @ResolveField()
  async posts(@Parent() author) {}
}
