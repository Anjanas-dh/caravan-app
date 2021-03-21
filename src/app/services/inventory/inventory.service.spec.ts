import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { InjectionToken } from '@angular/core';
import { inject, TestBed } from '@angular/core/testing';
import { InventoryService } from './inventory.service';

describe('InventoryService', () => {
    let instance: InventoryService;
    let httpMock: HttpTestingController;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                { provide: new InjectionToken<string>('API_BASE_URL'), useValue: '/' }, // apiscript: export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');
                InventoryService,
            ]
        });
    });

    beforeEach(inject([InventoryService, HttpTestingController], (_inventoryService: InventoryService, _httpMock: HttpTestingController) => {
        instance = _inventoryService;
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

