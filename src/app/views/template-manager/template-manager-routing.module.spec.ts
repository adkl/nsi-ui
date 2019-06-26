import { TemplateManagerRoutingModule } from './template-manager-routing.module';

describe('TemplateManagerRoutingModule', () => {
  let templateManagerRoutingModule: TemplateManagerRoutingModule;

  beforeEach(() => {
    templateManagerRoutingModule = new TemplateManagerRoutingModule();
  });

  it('should create an instance', () => {
    expect(templateManagerRoutingModule).toBeTruthy();
  });
});
