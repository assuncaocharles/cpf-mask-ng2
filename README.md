# Sobre

[![Greenkeeper badge](https://badges.greenkeeper.io/assuncaocharles/cpf-mask-ng2.svg)](https://greenkeeper.io/)

Uma simples diretiva para gerar máscara de CPF

## Comportamento

```
999.999.999-99
```

## Uso

Importe a diretiva dentro do módulo que deseja fazer uso:

```
import { CPFMask } from 'cpf-mask-ng2';
```

E faça a sua declaração dentro do módulo:

``` 
declarations: [ 
    ...    
    CPFMask
    ...
  ],
```

Obs: Caso seja um modulo global ou reutilizável não esqueça também de fazer adicionar no array de exports.

Para usar a diretiva basta atribui-la em um input

```
<input CPFMask [(ngModel)]="User.CPF" type="text" />
```