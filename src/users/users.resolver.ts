import { Resolver, Query } from '@nestjs/graphql';

@Resolver('User')
export class UserResolver {
  @Query()
  async user() {
    return {
      id: 123,
      firstName: 'test_f',
      lastName: 'test_l',
    };
  }
}
