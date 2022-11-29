<script>
    let contador = 0;
    $: doubled = contador *2;
    function contar(){
        contador++;
    }
</script>


<p>{contador} doubled é {doubled}</p>

<button on:click={contar}>
    Clicado {contador} {contador === 1 ? 'vez' : 'vezes'}
</button>

<style>
    :global(body){
        background-color: hsl(0, 0%, 41%);
        padding: 0;
        margin: 0;
    }
</style>