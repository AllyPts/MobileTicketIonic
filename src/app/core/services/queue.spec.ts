import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'; // Importante adicionar para o teste não quebrar
import { QueueService } from './queue'; // Ajustado de Queue para QueueService

describe('QueueService', () => {
  let service: QueueService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule], // O seu serviço usa HTTP, então o teste precisa disso
      providers: [QueueService],
    });
    service = TestBed.inject(QueueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
