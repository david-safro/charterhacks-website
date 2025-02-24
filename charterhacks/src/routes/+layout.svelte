<script>
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
</script>

<Header />

<main>
    <slot />
</main>

<Footer />

<style>
    :global(body) {
        font-family: 'Inter', sans-serif;
        margin: 0;
        padding: 0;
        background-color: #0a192f;
        color: #ccd6f6;
    }

    main {
        padding: 20px;
    }
</style>