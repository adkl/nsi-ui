import { TemplateManagerModule } from './template-manager.module';

describe('TemplateManagerModule', () => {
  let templateManagerModule: TemplateManagerModule;

  beforeEach(() => {
    templateManagerModule = new TemplateManagerModule();
  });

  it('should create an instance', () => {
    expect(templateManagerModule).toBeTruthy();
  });
});
