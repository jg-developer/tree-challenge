# Frontend Tree Challenge

## Scripts
*start:* Inicia a aplicação em desenvolvimento.<br>
*build:* Cria a aplicação para produção.<br>
*test:* Roda os testes.<br>
<br>

## Tecnologias
 - React
 - Typescript
 - Styled components
 - Redux Toolkit
 - React testing library
<br>

## O desafio
Implementar uma árvore de itens, na qual cada item pode ter vários itens encadeados (itens filhos).
Exemplo:
![exemplo](https://user-images.githubusercontent.com/13091635/129045214-81f3f1c8-8c56-4b32-8200-7734a413da98.gif)

Junto com este repositório há um arquivo `data.json` contendo os dados para renderizar a árvore. A estrutura de um único item é esta:

```
"1": {
    "id": "a853dddc-b639-41e6-a876-958b1e7f65d1",
    "name": "Harald Svante August",
    "children": {}
  }
```


## Comportamento

-   Para cada item, o usuário deve poder marcar o checkbox dessa linha.
-   Para cada item que tenha filhos (ou seja, um item pai), quando o usuário marcar ou desmarcar o checkbox, o estado deve ser cascateado a todos os seus descendentes.
-   Para cada item que tenha filhos (ou seja, um item pai), quando o usuário marcar apenas algum(ns) filho(s), o estado do checkbox pai deve ser alterado para  `indeterminate`
-   Para cada item que seja um item pai, o usuário deve ser capaz de mostrar ou esconder os itens internos.
