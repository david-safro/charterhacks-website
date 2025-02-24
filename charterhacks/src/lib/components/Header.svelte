<script>
    import { fly, fade } from 'svelte/transition';
</script>

<header>
    <nav>
        <a href="/" class="logo" in:fly={{ y: -50, duration: 1000 }} out:fade>
            <img src="../../../static/logo_braintext.png" alt="CharterHacks Logo" />
        </a>
        <div class="nav-links">
            <a href="/about" in:fly={{ y: -50, duration: 1000, delay: 100 }} out:fade>About</a>
            <a href="/schedule" in:fly={{ y: -50, duration: 1000, delay: 200 }} out:fade>Schedule</a>
            <a href="/sponsors" in:fly={{ y: -50, duration: 1000, delay: 300 }} out:fade>Sponsors</a>
            <a href="/faq" in:fly={{ y: -50, duration: 1000, delay: 400 }} out:fade>FAQ</a>
        </div>
    </nav>
</header>

<style>
    header {
        background-color: #112240;
        padding: 20px;
    }

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1200px;
        margin: 0 auto;
    }

    .logo img {
        height: 50px;
        transition: transform 0.3s ease;

        &:hover {
            transform: scale(1.1);
        }
    }

    .nav-links {
        display: flex;
        gap: 20px;

        a {
            color: #ccd6f6;
            text-decoration: none;
            font-weight: bold;
            transition: color 0.3s ease, transform 0.3s ease;

            &:hover {
                color: #64ffda;
                transform: translateY(-3px);
            }
        }
    }
</style>