import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { InjectionToken } from '@angular/core';
import { inject, TestBed } from '@angular/core/testing';
import { ReceiptService } from './receipt.service';

describe('ReceiptService', () => {
    let instance: ReceiptService;
    let httpMock: HttpTestingController;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                { provide: new InjectionToken<string>('API_BASE_URL'), useValue: '/' }, // apiscript: export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');
                ReceiptService,
            ]
        });
    });

    beforeEach(inject([ReceiptService, HttpTestingController], (_receiptService: ReceiptService, _httpMock: HttpTestingController) => {
        instance = _receiptService;
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

