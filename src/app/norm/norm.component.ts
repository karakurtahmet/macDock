import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService, TreeNode } from 'primeng/api';
import { TerminalService } from 'primeng/terminal';
import { Subscription } from 'rxjs';
import { NodeService } from '../../service/nodeservice';
import { PhotoService } from '../../service/photoservice';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-norm',
  templateUrl: './norm.component.html',
  styleUrls: ['./norm.component.scss'],
  providers: [MessageService, TerminalService],
})
export class NormComponent implements OnInit {
  displayTerminal!: boolean;
  displayFinder!: boolean;

  displayGalleria!: boolean;

  displayFiles!: boolean;

  dockItems: MenuItem[] | undefined;

  today: any = new Date().toLocaleDateString("tr-TR", ({weekday:'long', hour:'2-digit', minute:'2-digit'}));

  menubarItems: any[] | undefined;

  responsiveOptions: any[] | undefined;

  images: any[] = [];

  nodes: any[] | undefined;

  appItem: any[] | undefined;

  selectedFile: any;

  subscription: Subscription | undefined;
  
  
  constructor(
    private galleriaService: PhotoService,
    private nodeService: NodeService,
    private messageService: MessageService,
    private terminalService: TerminalService,
    private router: Router,
    private http:HttpClient
  ) {}

  ngOnInit() {
    this.dockItems = [
      {
        label: 'Finder',
        tooltipOptions: {
          tooltipLabel: 'Finder',
          tooltipPosition: 'top',
          positionTop: -15,
          positionLeft: 15,
          showDelay: 1000,
        },
        icon: 'https://primefaces.org/cdn/primeng/images/dock/finder.svg',
        command: () => {
          this.displayFinder = true;
        },
      },
      {
        label: 'Terminal',
        tooltipOptions: {
          tooltipLabel: 'Terminal',
          tooltipPosition: 'top',
          positionTop: -15,
          positionLeft: 15,
          showDelay: 1000,
        },
        icon: 'https://primefaces.org/cdn/primeng/images/dock/terminal.svg',
        command: () => {
          this.displayTerminal = true;
        },
      },
      {
        label: 'App Store',
        tooltipOptions: {
          tooltipLabel: 'App Store',
          tooltipPosition: 'top',
          positionTop: -15,
          positionLeft: 15,
          showDelay: 1000,
        },
        icon: 'https://primefaces.org/cdn/primeng/images/dock/appstore.svg',
        command: () => {
          this.messageService.add({
            severity: 'warn',
            summary: 'App Store is currently under development',
          });
        },
      },
      {
        label: 'Safari',
        tooltipOptions: {
          tooltipLabel: 'Safari',
          tooltipPosition: 'top',
          positionTop: -15,
          positionLeft: 15,
          showDelay: 1000,
        },
        icon: 'https://primefaces.org/cdn/primeng/images/dock/safari.svg',
        command: () => {
          this.displayFiles = true;
        },
      },
      {
        label: 'Photos',
        tooltipOptions: {
          tooltipLabel: 'Photos',
          tooltipPosition: 'top',
          positionTop: -15,
          positionLeft: 15,
          showDelay: 1000,
        },
        icon: 'https://primefaces.org/cdn/primeng/images/dock/photos.svg',
        command: () => {
          console.log(this.images);
          this.displayGalleria = true;
        },
      },
      {
        label: 'GitHub',
        tooltipOptions: {
          tooltipLabel: 'GitHub',
          tooltipPosition: 'top',
          positionTop: -15,
          positionLeft: 15,
          showDelay: 1000,
        },
        icon: 'https://primefaces.org/cdn/primeng/images/dock/github.svg',
        command: () => {
          window.open("https://github.com/karakurtahmet", '_blank')
        }
      },
      {
        label: 'Trash',
        tooltipOptions: {
          tooltipLabel: 'Trash',
          tooltipPosition: 'top',
          positionTop: -15,
          positionLeft: 15,
          showDelay: 1000,
        },
        icon: 'https://primefaces.org/cdn/primeng/images/dock/trash.png',
        command: () => {
          this.messageService.add({ severity: 'info', summary: 'Empty Trash' });
        },
      },
    ];

    this.menubarItems = [
      {
        label: 'Finder',
        styleClass: 'menubar-root',
      },
      {
        label: 'File',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            items: [
              {
                label: 'Bookmark',
                icon: 'pi pi-fw pi-bookmark',
              },
              {
                label: 'Video',
                icon: 'pi pi-fw pi-video',
              },
            ],
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-trash',
          },
          {
            separator: true,
          },
          {
            label: 'Export',
            icon: 'pi pi-fw pi-external-link',
          },
        ],
      },
      {
        label: 'Edit',
        items: [
          {
            label: 'Left',
            icon: 'pi pi-fw pi-align-left',
          },
          {
            label: 'Right',
            icon: 'pi pi-fw pi-align-right',
          },
          {
            label: 'Center',
            icon: 'pi pi-fw pi-align-center',
          },
          {
            label: 'Justify',
            icon: 'pi pi-fw pi-align-justify',
          },
        ],
      },
      {
        label: 'Users',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-user-plus',
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-user-minus',
          },
          {
            label: 'Search',
            icon: 'pi pi-fw pi-users',
            items: [
              {
                label: 'Filter',
                icon: 'pi pi-fw pi-filter',
                items: [
                  {
                    label: 'Print',
                    icon: 'pi pi-fw pi-print',
                  },
                ],
              },
              {
                icon: 'pi pi-fw pi-bars',
                label: 'List',
              },
            ],
          },
        ],
      },
      {
        label: 'Events',
        items: [
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
              {
                label: 'Save',
                icon: 'pi pi-fw pi-calendar-plus',
              },
              {
                label: 'Delete',
                icon: 'pi pi-fw pi-calendar-minus',
              },
            ],
          },
          {
            label: 'Archieve',
            icon: 'pi pi-fw pi-calendar-times',
            items: [
              {
                label: 'Remove',
                icon: 'pi pi-fw pi-calendar-minus',
              },
            ],
          },
        ],
      },
      {
        label: 'Quit',
        command: () => {
          this.closeTab();
        }
      },
    ];

    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
      },
    ];

    this.subscription = this.terminalService.commandHandler.subscribe(
      (command) => this.commandHandler(command)
    );

    this.galleriaService.getImages().then((data) => (this.images = data));
    
    
    this.nodeService.getFiles().then((data) => (this.nodes = data));
    this.nodeService.getTreeTableNodes().then((data) => (this.appItem = data));

  }
 

  commandHandler(text: any) {
    let response;
    let argsIndex = text.indexOf(' ');
    let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

    switch (command) {
      case 'date':
        response = 'Today is ' + new Date().toDateString();
        break;

      case 'greet':
        response = 'Hola ' + text.substring(argsIndex + 1) + '!';
        break;

      case 'random':
        response = Math.floor(Math.random() * 100);
        break;
      
      case 'email':
        response = 'karakurt.ahmet0658@gmail.com';
        break;

      default:
        response = 'Unknown command: ' + command;
        break;
    }

    if (response) {
      this.terminalService.sendResponse(response as string);
    }
  }
  closeTab() {
    window.location.href = 'https://www.google.com/';
  }

  nodeSelected(a: any) {
    if (this.selectedFile.label == "Resume.doc") {
      this.downloadCV();
    }
  }

  getCV() {
    return this.http.get('assets/Ahmet_Karakurt_CV.pdf', { responseType: 'blob' });
  }
  async downloadCV() {
    const blob = await this.getCV().toPromise();
    const link = document.createElement('a');
    if (blob instanceof Blob) {
      link.href = window.URL.createObjectURL(blob);
      link.download = 'Ahmet_Karakurt_CV.pdf';
      link.click();
    }

  }


  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
