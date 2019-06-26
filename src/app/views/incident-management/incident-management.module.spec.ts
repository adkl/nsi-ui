import { IncidentManagementModule } from './incident-management.module';

describe('IncidentManagementModule', () => {
  let incidentManagementModule: IncidentManagementModule;

  beforeEach(() => {
    incidentManagementModule = new IncidentManagementModule();
  });

  it('should create an instance', () => {
    expect(incidentManagementModule).toBeTruthy();
  });
});
