<header>
    <nav>
        <a href="/" class="logo">
            <img src="../../../static/logo_braintext.png" alt="CharterHacks Logo" />
        </a>
        <div class="nav-links">
            <a href="/about">About</a>
            <a href="/schedule">Schedule</a>
            <a href="/sponsors">Sponsors</a>
            <a href="/faq">FAQ</a>
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
    }

    .nav-links {
        display: flex;
        gap: 20px;

        a {
            color: #ccd6f6;
            text-decoration: none;
            font-weight: bold;

            &:hover {
                color: #64ffda;
            }
        }
    }
</style>