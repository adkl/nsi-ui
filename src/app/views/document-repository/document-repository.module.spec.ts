import { DocumentRepositoryModule } from './document-repository.module';

describe('DocumentRepositoryModule', () => {
  let documentRepositoryModule: DocumentRepositoryModule;

  beforeEach(() => {
    documentRepositoryModule = new DocumentRepositoryModule();
  });

  it('should create an instance', () => {
    expect(documentRepositoryModule).toBeTruthy();
  });
});
