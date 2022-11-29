<script>
    import { Plane, ArrowUp, RingLoader } from 'svelte-loading-spinners';
    export let pageLoad = false;
    export let cont = '0';
    function loadPage() {
        if(!pageLoad){
            pageLoad = true;
            document.querySelector(".pageStyle").style = 'display: flex';
            setTimeout( () => {
                pageLoad = false;
                document.querySelector(".pageStyle").style = 'display: nome';
                cont = "0";
            }, 5000)
        }else{
            pageLoad = false;
            alert(pageLoad);
        }
    }

    function contatodor(){
        cont++;
    }
</script>

<div id="loadPageContainer">
    <div class="loadPage">
        <h1>Testando o Componente Loading</h1>
    </div>
    <div class="loadPage pageStyle">
        <ArrowUp size="60" unit="px"  duration="1s"  color="#ce1c96"/>
    </div>
    <div class="loadPage">
        <button on:click={ () => loadPage()}>Submet</button>
    </div>
    <div class="loadPage">
        <button on:click={ () => contatodor()}>Submet contatdor = {cont}</button>
    </div>
</div>
<style>
    :root{
        --cinza--: #7474748c;
    }
    #loadPageContainer{
        height: 58rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .pageStyle{
        background-color: var(--cinza--);
        z-index: 9000;
        position: fixed;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
        display: none;
    }
</style>