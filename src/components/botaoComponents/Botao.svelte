<script lang="ts">
    export let texto;
    export let triplo = false;
    export let duplo = false;
</script>

<button class="botao" class:triplo class:duplo>
    {texto}
</button>
<!-- <button class="botao" class:triplo>
    {texto}
</button> -->
<!-- <button class="botao" class:triplo={triplo}>
    {texto}
</button> -->
<!-- <button class="botao" class:triplo={true}> dessa forma todos recebem a classe triplo
    {texto}
</button> -->
<!-- <button class={`botao ${triplo ? 'triplo' : ''}`}>
    {texto}
</button> -->

<style>
.botao{
    flex-basis: 5rem;
}
.triplo{
    flex-basis: 15rem;
}
.duplo{
    flex-basis: 10rem;
}
</style>