<script>
    import { crossfade } from 'svelte/transition';
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';

    const [send, receive] = crossfade({
        duration: 300,
    });
</script>

<Header />

<main>
    <div out:send="{{ key: $page.url.pathname }}" in:receive="{{ key: $page.url.pathname }}" class="page-transition">
        <slot />
    </div>
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