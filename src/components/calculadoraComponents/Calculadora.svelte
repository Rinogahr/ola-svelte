<script lang="ts">
    import Botao from "../botaoComponents/Botao.svelte";
    import Linha from "../Linacomponents/Linha.svelte";

</script>

<div class="calculadora">
    <Linha>
        <Botao triplo={true} texto="AC"/>
        <Botao texto="/"/>
    </Linha>
    <Linha>
        <Botao texto="7"/>
        <Botao texto="8"/>
        <Botao texto="9"/>
        <Botao texto="*"/>
    </Linha>
    <Linha>
        <Botao texto="4"/>
        <Botao texto="5"/>
        <Botao texto="6"/>
        <Botao texto="+"/>
    </Linha>
    <Linha>
        <Botao texto="3"/>
        <Botao texto="2"/>
        <Botao texto="1"/>
        <Botao texto="-"/>
    </Linha>
    <Linha>
        <Botao duplo texto="0"/>
        <Botao texto=","/>
        <Botao texto="="/>
    </Linha>
</div>

<style>
    .calculadora{
        background-color: var(--cor-fundo);
        display: flex;
        flex-direction: column;

        height: auto;
        width: 10rem;
    }
</style>