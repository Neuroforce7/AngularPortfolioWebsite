import { Component } from '@angular/core';

interface Tag {
  key: string;
  color: string;
}

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent {
  project: { name: string; summary: string; tags: Tag[] } = {
    name: '',
    summary: '',
    tags: []
  };
  codingLanguages: string = '';
  
  addProject() {
    // Parse codingLanguages and split them into an array of tags
    const codingLanguageTags = this.codingLanguages.split(',');

    // Create tag objects with a default color
    const tags = codingLanguageTags.map(key => ({
      key: key.trim(),
      color: 'defaultColor' // You can set a default color here
    }));

    this.project.tags = tags;

    // Add the project to your application here (e.g., push it into an array or send it to a service)
    console.log('Added project:', this.project);

    // Clear form fields
    this.project = {
      name: '',
      summary: '',
      tags: []
    };
    this.codingLanguages = '';
  }
}
