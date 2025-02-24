<script>
    import { fly, fade } from 'svelte/transition';

    const sponsors = {
        gold: ["TBA", "TBA", "TBA"],
        silver: ["TBA", "TBA", "TBA"],
        bronze: ["TBA", "TBA", "TBA"],
    };
</script>

<h1>Thank you Charterhacks sponsors for making this possible!</h1>

<div class="sponsors-list">
    <div class="sponsor-tier" in:fly={{ y: 50, duration: 1000 }} out:fade>
        <h2>Gold Sponsors</h2>
        <div class="sponsor-logos">
            {#each sponsors.gold as sponsor}
                <div class="sponsor-logo">{sponsor}</div>
            {/each}
        </div>
    </div>

    <div class="sponsor-tier" in:fly={{ y: 50, duration: 1000, delay: 200 }} out:fade>
        <h2>Silver Sponsors</h2>
        <div class="sponsor-logos">
            {#each sponsors.silver as sponsor}
                <div class="sponsor-logo">{sponsor}</div>
            {/each}
        </div>
    </div>

    <div class="sponsor-tier" in:fly={{ y: 50, duration: 1000, delay: 400 }} out:fade>
        <h2>Bronze Sponsors</h2>
        <div class="sponsor-logos">
            {#each sponsors.bronze as sponsor}
                <div class="sponsor-logo">{sponsor}</div>
            {/each}
        </div>
    </div>
</div>

<style>
    h1 {
        font-size: 2.5rem;
        color: #64ffda;
        text-align: center;
        margin-bottom: 40px;
    }

    .sponsors-list {
        max-width: 800px;
        margin: 0 auto;

        .sponsor-tier {
            margin-bottom: 40px;

            h2 {
                font-size: 2rem;
                color: #64ffda;
                text-align: center;
                margin-bottom: 20px;
            }

            .sponsor-logos {
                display: flex;
                justify-content: center;
                gap: 20px;
                flex-wrap: wrap;

                .sponsor-logo {
                    background-color: #112240;
                    border-radius: 10px;
                    padding: 20px;
                    font-size: 1.2rem;
                    color: #ccd6f6;
                    text-align: center;
                    min-width: 150px;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;

                    &:hover {
                        transform: translateY(-5px);
                        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
                    }
                }
            }
        }
    }
</style>