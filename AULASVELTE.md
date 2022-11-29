## CURSO INTENSIVO DE SVELTE

**npm create vite@vitelatest** [nome-do-app] **-- --template svelte** { comando para criar um novo projeto svelte }
**npx degit sveltejs/template** [nome-do-app] { comando para criar um novo projeto svelte porem esse comando cria uma pasta [scripts]
com um arquivo [setupTypeScript.js] que permite ser usado *TypeScript* no projeto }


## COMPONENTES SVELTE

todo *componente svelte* utiliza a estanção com seu nome exemplo >> [Botao.svelte],
um *componente svelte* tem por padrão essa strutura dentro dele.
{
    *<script>*
------->[aqui-você-escreve-os-códigos-JAVASCRIPT]
    *</script>*

------->[aqui-você-escreve-os-HTMLs]
*exmplo ->* *<h1>TAGS HTMLS</h1>*
-
    *<style>*
------->[aqui-você-escreve-os-CSSs]
    *</style>*
}

Ao criar um projeto em [svelte] o mesmo cria um *componente padrão chamado* [App.svelte],
é ele que será estartado como componente principal pois o mesmo está [exportado] dentro de um arquivo chamado de **main.js**, caso queria mudar é possivel basta criar outro componente
e [exportar] ele para dentro do **main.js**.

