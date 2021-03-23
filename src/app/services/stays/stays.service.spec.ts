import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { InjectionToken } from '@angular/core';
import { inject, TestBed } from '@angular/core/testing';
import { StaysService } from './stays.service';

describe('StaysService', () => {
    let instance: StaysService;
    let httpMock: HttpTestingController;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                { provide: new InjectionToken<string>('API_BASE_URL'), useValue: '/' }, // apiscript: export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');
                StaysService,
            ]
        });
    });

    beforeEach(inject([StaysService, HttpTestingController], (_staysService: StaysService, _httpMock: HttpTestingController) => {
        instance = _staysService;
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

