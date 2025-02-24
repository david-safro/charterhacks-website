<script>
    import { fly, fade } from 'svelte/transition';
    export let targetDate;

    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    let countdownEnded = false;

    const updateCountdown = () => {
        const now = new Date();
        const difference = targetDate - now;

        if (difference > 0) {
            timeLeft.days = Math.floor(difference / (1000 * 60 * 60 * 24));
            timeLeft.hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            timeLeft.minutes = Math.floor((difference / 1000 / 60) % 60);
            timeLeft.seconds = Math.floor((difference / 1000) % 60);
        } else {
            countdownEnded = true;
        }
    };

    setInterval(updateCountdown, 1000);
    updateCountdown();
</script>

{#if !countdownEnded}
    <div class="countdown">
        <div class="countdown-item" in:fly={{ y: -20, duration: 500 }} out:fade>
            <span>{timeLeft.days}</span>
            <span>Days</span>
        </div>
        <div class="countdown-item" in:fly={{ y: -20, duration: 500, delay: 100 }} out:fade>
            <span>{timeLeft.hours}</span>
            <span>Hours</span>
        </div>
        <div class="countdown-item" in:fly={{ y: -20, duration: 500, delay: 200 }} out:fade>
            <span>{timeLeft.minutes}</span>
            <span>Minutes</span>
        </div>
        <div class="countdown-item" in:fly={{ y: -20, duration: 500, delay: 300 }} out:fade>
            <span>{timeLeft.seconds}</span>
            <span>Seconds</span>
        </div>
    </div>
{:else}
    <div class="theme-reveal" in:fly={{ y: 50, duration: 1000 }} out:fade>
        <h2>The Theme is...</h2>
        <p>Building the Future of Education</p>
    </div>
{/if}

<style>
    .countdown {
        display: flex;
        justify-content: center;
        gap: 20px;
        margin-top: 40px;

        .countdown-item {
            text-align: center;

            span:first-child {
                font-size: 2rem;
                font-weight: bold;
            }

            span:last-child {
                font-size: 0.9rem;
                color: #8892b0;
            }
        }
    }

    .theme-reveal {
        text-align: center;
        margin-top: 40px;

        h2 {
            font-size: 2.5rem;
            color: #64ffda;
        }

        p {
            font-size: 1.5rem;
            color: #ccd6f6;
        }
    }
</style>