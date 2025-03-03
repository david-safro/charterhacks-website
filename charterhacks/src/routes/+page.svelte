

<script>
    import { fly, fade } from 'svelte/transition';
    import { onMount } from 'svelte';
    import Countdown from '$lib/components/Countdown.svelte';

    const hackathonDate = new Date('2025-03-29T10:30:00');
    let loaded = false;

    onMount(() => {
        loaded = true;
    });
</script>

<section class="hero">
    <div class="container">
        <h1 in:fly={{ y: -50, duration: 1000, delay: loaded ? 0 : 500 }} out:fade>Welcome to CharterHacks 2025!</h1>
        <p in:fly={{ y: -50, duration: 1000, delay: loaded ? 200 : 700 }} out:fade>Join us for a fun hackathon at the Charter School of Wilmington on April 29th.</p>
        <div class="cta-buttons" in:fly={{ y: -50, duration: 1000, delay: loaded ? 400 : 900 }} out:fade>
            <a href="/register" class="btn-primary">Register Now</a>
            <a href="/schedule" class="btn-secondary">View Schedule</a>
        </div>
        <Countdown targetDate={hackathonDate} />
        <img src="https://d33wubrfki0l68.cloudfront.net/821d7d520ebb22f3e3be2a2db3ed91842848ba97/9b328/img/logo_braintext.png" alt="CharterHacks Logo" />
    </div>
</section>

<section class="theme" in:fly={{ y: 50, duration: 1000, delay: loaded ? 600 : 1100 }} out:fade>
    <h2>Theme</h2>
    <div class="theme-content">
        <p>To be announced!</p>
    </div>
</section>

<style>
    .hero {
        text-align: center;
        padding: 100px 20px;
        border-radius: 30px;
        background: linear-gradient(-45deg, #1f4068, #0a192f, #112240, #64ffda);
        background-size: 400% 400%;
        animation: gradientBG 15s ease infinite;

        @keyframes gradientBG {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        img {
            max-width: 35%;
            padding: 20px;
        }

        h1 {
            font-size: 3rem;
            margin-bottom: 20px;
        }

        p {
            font-size: 1.2rem;
            margin-bottom: 40px;
        }

        .cta-buttons {
            display: flex;
            justify-content: center;
            gap: 20px;

            .btn-primary, .btn-secondary {
                padding: 10px 20px;
                border-radius: 5px;
                text-decoration: none;
                font-weight: bold;
            }

            .btn-primary {
                background-color: #64ffda;
                color: #0a192f;
            }

            .btn-secondary {
                border: 2px solid #64ffda;
                color: #64ffda;
            }
        }
    }

    .theme {
        text-align: center;
        padding: 80px 20px;
        background-color: #112240;
        margin-top: 40px;

        h2 {
            font-size: 2.5rem;
            margin-bottom: 20px;
            color: #64ffda;
        }

        .theme-content {
            max-width: 800px;
            margin: 0 auto;

            p {
                font-size: 1.5rem;
                color: #ccd6f6;
                line-height: 1.6;
            }
        }
    }
</style>