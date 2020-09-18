# Mixin SCSS + Breve introdução FormsModule (módulo de form do Angular)

### Mixin

- função do scss que permite a gente definir regras e depois podemos reutilizar essas regras no projeto

- para definir um mixin:

```scss
@mixin field {
  background-color: #ffffff;
  border: 1px solid #000000;
  color: #000000;
}

.my-field {
  @include field();
}
```

### FormsModule

- Módulo do Angular para facilitar o trabalho com formulários
- Conseguimos capturar o evento de 'submit', de alteração em dados; conseguimos saber se os dados estão válidos ou não, etc.
- Com js puro é complicado fazer essa gerência de form
