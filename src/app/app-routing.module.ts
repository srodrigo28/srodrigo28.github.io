import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteReadComponent } from './views/components/cliente/cliente-read/cliente-read.component';
import { FuncionarioReadComponent } from './views/components/funcionarios/funcionario-read/funcionario-read.component';
import { GastosReadComponent } from './views/components/gastos/gastos-read/gastos-read.component';
import { HomeComponent } from './views/components/home/home.component';
import { MaquinaInputComponent } from './views/components/maquinas/maquina-input/maquina-input.component';
import { ProducaoReadComponent } from './views/components/producao/producao-read/producao-read.component';
import { TecnicoReadComponent } from './views/components/tecnico/tecnico-read/tecnico-read.component';
import { TracoReadComponent } from './views/components/traco/traco-read/traco-read.component';

const routes: Routes = [
  { path: '',
    component: HomeComponent
  },
  { path: 'tecnicos',
    component: TecnicoReadComponent
  },
  { path: 'maquinas',
    component: MaquinaInputComponent
  },
  { path: 'clientes',
    component: ClienteReadComponent
  },
  { path: 'producao',
    component: ProducaoReadComponent
  },
  { path: 'gastos',
    component: GastosReadComponent
  },
  { path: 'funcionario',
    component: FuncionarioReadComponent
  },
  { path: 'traco',
    component: TracoReadComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
