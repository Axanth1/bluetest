<script lang="ts">
    export let data;
    const {products} = data;
</script>

<article>
    {#each products as product}
    <div class="product-card">
        <h1>{product.title}</h1>
        <img src="{product.images[0].image}" alt="">
    </div>
    {/each}
</article>

<style>
    article {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(2, 1fr);
    }
    .product-card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid lightgrey;
        max-width: 250px;
        padding: 2rem;
        margin: 0 auto;
    }
    img {
        max-width: 200px;
        aspect-ratio: 2/3;
    }
</style>