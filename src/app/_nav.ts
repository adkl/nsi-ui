export const navItems = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer'
  },
  {
    name: 'ADAL Test',
    url: '/adal-test',
    icon: 'icon-calculator'
  },
  {
    name: 'Management',
    url: '/device-management',
    icon: 'fa fa-history',
    children: [
      {
        name: 'Devices',
        url: '/device-management',
        icon: 'icon-doc'
      },
      {
        name: 'Device Types',
        url: '/device-management/types',
        icon: 'icon-doc'
      }
    ]
  },
  {
    name: 'Fake ping',
    url: '/fake-ping',
    icon: 'icon-calculator'
  },
  {
    name: 'Device Ping',
    url: '/device-ping',
    icon: 'fa fa-history'
  },
  {
    name: 'Incidents',
    url: '/incident-management',
    icon: 'icon-calculator'
  },
  {
    name: 'Template management',
    url: '/template-manager',
    icon: 'icon-docs'
  },
  {
    name: 'Reporting',
    url: '/reporting',
    icon: 'icon-docs',
    children: [
      {
        name: 'Tenant Active Users',
        url: '/reporting/TenantActiveUsers',
        icon: 'icon-bell'
      },
      // {
      //   name: 'Tenant Common Incidents',
      //   url: '/reporting/TenantCommonIncidents',
      //   icon: 'icon-pencil'
      // },
      // {
      //   name: 'User Logins Days Per Week',       // mora postojati datum logiranja usera??
      //   url: '/reporting/UserLoginsDaysPerWeek',
      //   icon: 'icon-pencil'
      // },
      // {                                              // mora postojati datum logiranja usera??
      //   name: 'User Logins Time Of Day',
      //   url: '/reporting/UserLoginsTimeOfDay',
      //   icon: 'icon-pencil'
      // },
      // {                                                    // trebaju mi svi sms-ovi i oni moraju imati datum slanja (trenutno nema 20.12.'18.)
      //   name: 'SMS Sent Per Time Period',
      //   url: '/reporting/SMSSentPerTimePeriod',
      //   icon: 'icon-pencil'
      // },
      // {                                /// ??
      //   name: 'Rule Brakes',
      //   url: '/reporting/RuleBrakes',
      //   icon: 'icon-pencil'
      // },
      // {
      //   name: 'User Specific Devices',
      //   url: '/reporting/UserSpecificDevices',
      //   icon: 'icon-pencil'
      // },
      {
        name: 'Incidents Specific Time Period',
        url: '/reporting/IncidentsSpecificTimePeriod',
        icon: 'icon-info'
      },
      {
        name: 'Device x Incidents Specific Time Period',        // grid... trenutno nije ali treab biti
        url: '/reporting/DeviceIncidentsSpecificTimePeriod',
        icon: 'icon-puzzle'
      },
      {                                                // grid
        name: 'User Logging',
        url: '/reporting/UserLoginsTimeOfDay',
        icon: 'icon-pencil'
      },
      {                                              // Incident common types in time period??
        name: 'SMS Sent Per Time Period',
        url: '/reporting/SMSSentPerTimePeriod',
        icon: 'icon-pencil'
      },
      // {                                              // chart
      //   name: 'Incidents Priority In Time Period',
      //   url: '/reporting/IncidentsPriorityInTimePeriod',
      //   icon: 'icon-pencil'
      // }
    ]
  },
  {
    name: 'Rule Engine',
    url: '/rule-engine',
    icon: 'icon-speedometer'
  },
  {
    name: 'User administration',
    url: '/users',
    icon: 'icon-user',
  children: [
    {
      name: 'Users',
      url: '/users/users',
      icon: 'icon-user'
    },
    {
      name: 'Roles',
      url: '/users/roles',
      icon: 'icon-tag'
    },
    {
      name: 'Permissions',
      url: '/users/permissions',
      icon: 'icon-star'
    },
    {
      name: 'User',
      url: '/users/user',
      icon: 'icon-pencil'
    }]
  },
  {
    name: 'Documents',
    url: '/documents',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Preview documents',
        url: '/documents/preview-documents',
        icon: 'icon-puzzle'
      }
    ]
  }
];
