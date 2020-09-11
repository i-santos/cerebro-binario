# Fazer um menu lateral que abre e fecha

- fazer a navegação com os links
  - criar o toggle-menu (botão pra abrir e fechar o menu)
  - vou fazer o botão do toggle do zero
  - criar um div toggle-menu
  - criar 3 div toggle-menu\_\_bar: serão as barras do 'hamburger'
  - criar um nav com position absolute
  - colocar altura 100vh pra ocupar toda altura da tela
  - colocar width 70vw pra ocupar 70% da largura da tela
  - colocar top 0 pra começar do início do topo
  - colocar tranform translate3d(-100%, 0, 0) pra "caminhar" com o nav pra esquerda em 100% do tamanho dele
  - fazer classes pra indicar quando o toggle-menu tá ativado
    e quando o nav tá aberto: is-activated pro toggle-menu, is-opened pro nav
  - configurar o css do toggle-menu quando estiver ativado
  - configurar o css do nav quando estiver aberto
  - usar o ngClass e uma variável de estado no typescript pra controlar o estado do toggle-menu e do nav
  - adicionar transition para que as mudanças não ocorram de maneira 'seca'
