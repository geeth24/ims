import { Component, OnInit } from '@angular/core';

import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MenuItem } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';

export interface Investigator {
  status: boolean;
  step: string;
  notes: string;
}

export interface TriageIncident {
  id: number;
  incidentName: string;
  siteName: string;
  incidentSummary: string;
  incidentDetails: string;
  status: Codes;
  assignedTo: Users;
  reportedBy: Users;
  incidentType: Codes;
  incidentDate: Date;
  updatedBy: string;
  updatedDate: Date;
  associateAlarmIds: number[];
}

export interface Users {
  id: number;
  name: string;
}

export interface Codes {
  id: number;
  name: string;
}

let ELEMENT_DATA: Investigator[] = [
  {
    status: true,
    step: 'Power Loss: The battery energy storage plant is currently offline, with no energy output being generated.',
    notes: '',
  },
  {
    status: false,
    step: 'Power Loss: The battery energy storage plant is currently offline, with no energy output being generated.',
    notes: '',
  },
  {
    status: false,
    step: 'Overheating Warning: The temperature of the battery system has exceeded safe operating limits.',
    notes: '',
  },
  {
    status: false,
    step: 'Power Restoration: The battery energy storage plant has been successfully brought back online and is now generating energy.',
    notes: '',
  },
  {
    status: false,
    step: 'Critical Alert: Multiple battery cells have failed, causing a significant reduction in energy output.',
    notes: '',
  },
  {
    status: false,
    step: 'Routine Maintenance: The battery energy storage plant is undergoing scheduled maintenance for optimal performance.',
    notes: '',
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: false },
    },
  ],
})
export class AppComponent implements OnInit {
  items: MenuItem[] | undefined;

  title = 'ims';
  displayedColumns: string[] = ['position', 'step', 'weight'];
  dataSource = ELEMENT_DATA;
  activeIndex: number = 0;

  constructor(private route: ActivatedRoute) {} // Inject the ActivatedRoute in the constructor

  onActiveIndexChange(event: number) {
    this.activeIndex = event;
  }
  checked: boolean = false;

  ngOnInit() {
    this.items = [
      {
        label: 'Incident Details',
      },
      {
        label: 'Investigation',
      },
      {
        label: 'Fixing',
      },
      {
        label: 'Fixed',
      },
    ];
  }

  triageIncident: TriageIncident = {
    id: 1,
    incidentName: 'Battery Energy Storage Plant',
    siteName: 'Brisbane',
    incidentSummary: 'Power Loss',
    incidentDetails:
      'The battery energy storage plant is currently offline, with no energy output being generated.',
    status: {
      id: 1,
      name: 'Reported',
    },
    assignedTo: {
      id: 1,
      name: 'John Smith',
    },
    reportedBy: {
      id: 1,
      name: 'John Smith',
    },
    incidentType: {
      id: 1,
      name: 'Power Loss',
    },
    incidentDate: new Date(),
    updatedBy: 'John Smith',
    updatedDate: new Date(),
    associateAlarmIds: [1, 2, 3],
  };

  statusCodes: Codes[] = [
    {
      id: 1,
      name: 'Reported',
    },
    {
      id: 2,
      name: 'Investigating',
    },
    {
      id: 3,
      name: 'Fixing',
    },
    {
      id: 4,
      name: 'Fixed',
    },
  ];

  users: Users[] = [
    {
      id: 1,
      name: 'John Smith',
    },
    {
      id: 2,
      name: 'Jane Doe',
    },
    {
      id: 3,
      name: 'John Doe',
    },
    {
      id: 4,

      name: 'Jane Smith',
    },
  ];
}
