import { TestBed } from "@angular/core/testing";
import { ClientesService } from "./clientes.service";

describe('ClientesService', () => {
    let service: ClientesService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service.TestBed.inject(ClientesService);
    });
    it('should create ', () => {
        expect(service).toBeTruthy();
      });
})