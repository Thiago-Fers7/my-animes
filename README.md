# 07 - React Hooks

Hooks são uma nova adição ao React, à partir da versão 16.8, que permitem o uso do `state` e outros recursos do React sem escrever uma classe. Ou melhor com toda a performance e pouco código escrito que uma função tem.

- https://pt-br.reactjs.org/docs/hooks-intro.html

## Regras dos Hooks

Hooks ainda não possuem uma boa definição, então para um melhor entendimento Hooks são simples **funções** que executam um código, geralmente uma lógica ou tratativas de referencias na tela que tem o nome **SEMPRE COMEÇANDO POR `use`**.

``` javascript
function handleClick() {...} // Não é um Hook
function useClick() {...} // É um Hook
```

Alem disso eles possuem **REGRAS** que devem ser seguidas, ou o React não rodará o código no navegador. São elas:

1. Chamar Hooks em componentes **de função** React. (componentes de Classe não rodam Hooks)
2. Chamar Hooks dentro de Hooks Customizados 
3. NÃO chamar Hooks depois ou dentro de condições, loops ou retornos.

- https://pt-br.reactjs.org/docs/hooks-rules.html
- https://www.smashingmagazine.com/2020/04/react-hooks-best-practices/

## Hooks mais Usados

Há diversos hooks, principalmente dentro de outros frameworks, mas o React nativamente já comporta alguns (em ordem de importancia e uso constante em aplicações):

- [useState](https://pt-br.reactjs.org/docs/hooks-reference.html#usestate)
- [useEffect](https://pt-br.reactjs.org/docs/hooks-reference.html#useeffect)
- [useContext*](https://pt-br.reactjs.org/docs/hooks-reference.html#usecontext)
- [useCallback](https://pt-br.reactjs.org/docs/hooks-reference.html#usereducer)
- [useMemo](https://pt-br.reactjs.org/docs/hooks-reference.html#usecallback)
- [useRef](https://pt-br.reactjs.org/docs/hooks-reference.html#usememo)
- [useLayoutEffect](https://pt-br.reactjs.org/docs/hooks-reference.html#useref)
- [useReducer](https://pt-br.reactjs.org/docs/hooks-reference.html#useimperativehandle)
- [useImperativeHandle](https://pt-br.reactjs.org/docs/hooks-reference.html#uselayouteffect)
- [useDebugValue](https://pt-br.reactjs.org/docs/hooks-reference.html#usedebugvalue)

### Documentação e links importantes sobre React Context

- https://pt-br.reactjs.org/docs/context.html
- https://www.taniarascia.com/using-context-api-in-react/
- LEIA ESSE TÓPICO: https://pt-br.reactjs.org/docs/context.html#when-to-use-context

## Desafio

Esse desafio será **RESCREVER** ou **RECRIAR** o desafio da aula anterior **SEM UTILIZAR CLASSES**. Ou melhor, todas as funcionalidades devem acontecer com o uso de Hooks.

Para se destacar nesse desafio vocês deverão utilizar o Hook `useContext` e criar pelo menos um Hook customizado com uma lógica do funcionamento da sua aplicação ou uma lógica reutilizavel.

### Tema livre

Use qualquer uma das APIs disponíveis na URL abaixo:

- [Public APIs](https://github.com/public-apis/public-apis)

### Especificado

Utilize a API da FIPE abaixo para pesquisar por Marca, Modelo e Ano um carro e exibir os dados dele:

- [FIPE API HTTP REST](https://deividfortuna.github.io/fipe/)

Entrega:

- Assim que terminar dê `git push origin seu-nome/hooks`.
- Acesse o menu "Merge Requests", configure o "Target Branch" para o repositório original para que seu App seja avaliado e revisado e para que possamos te dar um feedback.
- O nome do Merge Request deve ser o seu nome completo.
- Crie o Merge Request.

Dica: Após usar o comando npm start você conseguirá acessar o App pelo seu celular na URL após "On Your Network".
