import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReturnCepDto } from '../models/correios/returnCep.dto';
import { CorreiosService } from '../services/correios/correios.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm!: FormGroup;
  error!: string;

  constructor(
    private formBuilder: FormBuilder,
    private correiosService: CorreiosService,
  ){}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required]],
      number: ['', [Validators.required]],
      complement: ['', [Validators.required]],
      neighborhood: ['', [Validators.required]],
      cep: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

    this.registerForm.get('cep')?.valueChanges.subscribe(cep => {
      if (cep.length === 8) {
        this.getAddressByCep(cep);
      }
    });
  }

  getAddressByCep(cep: string): void {
    this.correiosService.getAddressByCep(cep).subscribe({
      next: (response: ReturnCepDto) => {
        this.registerForm.patchValue({
          address: response.logradouro,
          complement: response.complemento,
          neighborhood: response.bairro,
        });
      },
      error: (error: any) => {
        this.error = 'CEP não encontrado';
      }
  });
  }

  onSubmitForm(): void {

  }
}
