import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { Policy } from 'src/app/models/Policy';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  policies: Policy[];
  selectedPolicy: Policy = {
    policyId: null,
    number: null,
    amount: null
  };

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.readPolicies().subscribe(
      (policies: Policy[]) => {
        this.policies = policies;
        console.log(policies);
      }
    );
  }

  UpdatePolicy(form) {
    form.value.id = this.selectedPolicy.policyId;
    this.apiService.updatePolicy(form.value.id, form.value).subscribe(
      (policy: Policy) => {
        console.log('Policy updated ', policy);
      }
    );
  }

  CreatePolicy(form) {
    this.apiService.createPolicy(form.value).subscribe(
      (policy: Policy) => {
        console.log('Policy created ', policy);
      }
    );
  }

  deletePolicy(policyId) {
    this.apiService.deletePolicy(policyId).subscribe(
      (policy: Policy) => {
        console.log('Policy deleted ', policy);
      }
    );
  }

  selectPolicy(policy: Policy) {
    this.selectedPolicy = policy;
  }

}
