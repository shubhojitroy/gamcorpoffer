import { BsModule } from './bs.module';

describe('BsModule', () => {
  let bsModule: BsModule;

  beforeEach(() => {
    bsModule = new BsModule();
  });

  it('should create an instance', () => {
    expect(bsModule).toBeTruthy();
  });
});
