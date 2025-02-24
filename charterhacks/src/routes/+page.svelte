<script>
    import Countdown from '$lib/components/Countdown.svelte';
    import { fly, fade } from 'svelte/transition';

    const hackathonDate = new Date('2025-03-16T12:00:00');
</script>

<section class="hero">
    <div class="container">
        <h1 in:fly={{ y: -50, duration: 1000 }} out:fade>Welcome to CharterHacks 2025!</h1>

        <p in:fly={{ y: -50, duration: 1000, delay: 200 }} out:fade>Join us for a 48-hour hackathon where innovation meets creativity.</p>
        <div class="cta-buttons" in:fly={{ y: -50, duration: 1000, delay: 400 }} out:fade>
            <a href="/register" class="btn-primary">Register Now</a>
            <a href="/schedule" class="btn-secondary">View Schedule</a>
        </div>

        <Countdown targetDate={hackathonDate} />

        <img src="../../static/logo_braintext.png" alt="CharterHacks Logo" />

    </div>
</section>

<style>
    img {
        max-width: 45%;
        padding: 20px;
    }
    .hero {
        text-align: center;
        padding: 100px 20px;
        border-radius: 15px;
        background: linear-gradient(-45deg, #1f4068, #0a192f, #112240, #64ffda);
        background-size: 400% 400%;
        animation: gradientBG 15s ease infinite;

        @keyframes gradientBG {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
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
</style>