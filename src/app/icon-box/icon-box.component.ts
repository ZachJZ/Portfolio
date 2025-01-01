import { Component, Input, input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-icon-box',
  standalone: true,
  imports: [],
  templateUrl: './icon-box.component.html',
  styleUrl: './icon-box.component.css'
})
export class IconBoxComponent {

  @Input() Title: string = '';
  icon: string = 'test';

  // Languages
  TypeScriptICON: string = "typescript-icon"
  CSSICON: string = "css-icon"
  HTMLICON: string = "html-icon"
  CSharpICON: string = "c-sharp-icon"

  // Front end
  AngularICON: string = "angular-icon"
  JasmineICON: string = "jasmine-icon"
  KarmaICON: string = "karma-icon"
  SwaggerICON: string = "swagger-icon"
  VSCodeICON: string = "vscode-icon"

  // Backend
  PostgreSQLICON: string = "postgresql-icon"
  MySQLICON: string = "mysql-icon"
  HibernateICON: string = "hibernate-icon"
  JUnitICON: string = "junit-icon"
  MavenICON: string = "maven-icon"
  SpringICON: string = "spring-icon"
  JavaICON: string = "java-icon"

  AWSICON: string = "aws-icon"

  WordICON: string = "microsoft-word-icon"
  ExcelICON: string = "microsoft-excel-icon"
  PowerpointICON: string = "microsoft-powerpoint-icon"
  AzureICON: string = "microsoft-azure-icon"
  
  KubernetesICON: string = "kubernetes-icon"
  DockerICON: string = "docker-icon"
  GitHubICON: string = "github-icon"
  PerforceICON: string = "perforce-icon"
  JiraICON: string = "jira-icon"
  
  UnityICON: string = "unity-icon"
  AudacityICON: string = "audacity-icon"
  AsepriteICON: string = "aseprite-icon"


  ngAfterContentChecked () {
    // this.icon = this.TypeScriptICON;

    this.setTitle();
  }

  public setTitle(){
    if(this.Title == null || this.Title == undefined || this.Title == ''){
      console.log('TITLE IS UNDEFINED');
      this.Title = 'undefined'
    }
    else
    {
      switch(this.Title) { 
        // Languages
        case 'TypeScript': { 
          this.icon = this.TypeScriptICON;
           break; 
        } 
        case 'CSharp': { 
          this.icon = this.CSharpICON;
           break; 
        } 
        case 'Java': { 
          this.icon = this.JavaICON;
           break; 
        } 
        case 'HTML': { 
          this.icon = this.HTMLICON;
           break; 
        } 
        case 'CSS': { 
          this.icon = this.CSSICON;
           break; 
        } 
        // Front end
        case 'Angular': { 
          this.icon = this.AngularICON;
           break; 
        } 
        case 'Karma': { 
          this.icon = this.KarmaICON;
           break; 
        } 
        case 'Swagger': { 
          this.icon = this.SwaggerICON;
           break; 
        } 
        case 'Jasmine': { 
          this.icon = this.JasmineICON;
           break; 
        }
        case 'VSCode': { 
          this.icon = this.VSCodeICON;
           break; 
        }
        case 'Visual Studio 2015': { 
          this.icon = this.VSCodeICON;
           break; 
        }
        //Back end
        case 'PostgreSQL': { 
          this.icon = this.PostgreSQLICON;
           break; 
        } 
        case 'Hibernate': { 
          this.icon = this.HibernateICON;
           break; 
        } 
        case 'JUnit': { 
          this.icon = this.JUnitICON;
           break; 
        }
        case 'Maven': { 
          this.icon = this.MavenICON;
           break; 
        }
        case 'Spring': { 
          this.icon = this.SpringICON;
           break; 
        }
        case 'AWS': { 
          this.icon = this.AWSICON;
           break; 
        }
        // Other tools
        case 'Word': { 
          this.icon = this.WordICON;
           break; 
        }
        case 'Excel': { 
          this.icon = this.ExcelICON;
           break; 
        }
        case 'Powerpoint': { 
          this.icon = this.PowerpointICON;
           break; 
        }
        case 'Azure': { 
          this.icon = this.AzureICON;
           break; 
        }
        // Containers
        case 'Kubernetes': { 
          this.icon = this.KubernetesICON;
           break; 
        }
        case 'Docker': { 
          this.icon = this.DockerICON;
           break; 
        }
        //Versioning
        case 'GitHub': { 
          this.icon = this.GitHubICON;
           break; 
        }
        case 'Perforce': { 
          this.icon = this.PerforceICON;
           break; 
        }
        //Content
        case 'Unity': { 
          this.icon = this.UnityICON;
           break; 
        }
        case 'Audacity': { 
          this.icon = this.AudacityICON;
           break; 
        }
        case 'Aseprite': { 
          this.icon = this.AsepriteICON;
           break; 
        }
        case 'Jira': { 
          this.icon = this.JiraICON;
           break; 
        }
        default: { 
           //statements; 
           break; 
        } 
      } 
    }
  }


}
