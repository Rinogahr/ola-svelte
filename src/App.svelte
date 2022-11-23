<script>
import Botao from "./components/botaoComponents/Botao.svelte";
import Calculadora from "./components/calculadoraComponents/Calculadora.svelte";;
</script>


<main>
	<Calculadora/>
</main>

<style>
	:global(body){
		background-color: #000000;
	}
	:root{
        --cor-fundo: #555
    }
	main {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 50rem;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>