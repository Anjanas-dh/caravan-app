import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { InjectionToken } from '@angular/core';
import { inject, TestBed } from '@angular/core/testing';
import { ChecklistService } from './checklist.service';

describe('ChecklistService', () => {
    let instance: ChecklistService;
    let httpMock: HttpTestingController;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                { provide: new InjectionToken<string>('API_BASE_URL'), useValue: '/' }, // apiscript: export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');
                ChecklistService,
            ]
        });
    });

    beforeEach(inject([ChecklistService, HttpTestingController], (_checkListService: ChecklistService, _httpMock: HttpTestingController) => {
        instance = _checkListService;
        httpMock = _httpMock;
    }));

    afterEach(() => {
        httpMock.verify();
        instance = null;
        httpMock = null;
    });

    it('should create', () => {
        expect(instance).toBeTruthy();
    });
});

