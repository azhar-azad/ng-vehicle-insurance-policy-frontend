import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Policy } from 'src/app/models/Policy';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_SERVER_URL = 'http://127.0.0.1:8080';

  constructor(
    private httpClient: HttpClient
  ) { }

  readPolicies(): Observable<Policy[]> {
    return this.httpClient.get<Policy[]>(`${this.API_SERVER_URL}/policies`);
  }

  createPolicy(policy: Policy): Observable<Policy> {
    return this.httpClient.post<Policy>(`${this.API_SERVER_URL}/policies`, policy);
  }

  updatePolicy(policyId: string, policy: Policy) {
    return this.httpClient.put<Policy>(`${this.API_SERVER_URL}/policies/${policyId}`, policy);
  }

  deletePolicy(policyId: number) {
    return this.httpClient.delete<Policy>(`${this.API_SERVER_URL}/policies/${policyId}`);
  }
}
