import { RoutingStuffModule } from './routing-stuff.module';

describe('RoutingStuffModule', () => {
  let routingStuffModule: RoutingStuffModule;

  beforeEach(() => {
    routingStuffModule = new RoutingStuffModule();
  });

  it('should create an instance', () => {
    expect(routingStuffModule).toBeTruthy();
  });
});
