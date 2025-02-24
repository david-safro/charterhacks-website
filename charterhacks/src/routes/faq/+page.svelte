<script>
    import { fly, fade } from 'svelte/transition';

    const faqs = [
        {
            question: "What is CharterHacks?",
            answer: "CharterHacks is a 24-hour hackathon where participants collaborate to build innovative projects.",
        },
        {
            question: "Who can participate?",
            answer: "Anyone with a passion for technology and innovation can participate, regardless of experience level.",
        },
        {
            question: "Do I need a team?",
            answer: "You can participate solo or in teams of up to 4 people. We'll also have team formation sessions!",
        },
        {
            question: "What should I bring?",
            answer: "Bring your laptop, chargers, and any other tools you need to build your project. Don't forget your creativity!",
        },
        {
            question: "Is there a registration fee?",
            answer: "No, CharterHacks is completely free to attend!",
        },
        {
            question: "Will there be food?",
            answer: "Yes, we'll provide meals, snacks, and drinks throughout the event.",
        },
    ];
</script>

<h1>Frequently Asked Questions</h1>

<div class="faq-list">
    {#each faqs as faq, index}
        <div class="faq-item" in:fly={{ y: 50, duration: 1000, delay: index * 100 }} out:fade>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
        </div>
    {/each}
</div>

<style>
    h1 {
        font-size: 2.5rem;
        color: #64ffda;
        text-align: center;
        margin-bottom: 40px;
    }

    .faq-list {
        max-width: 800px;
        margin: 0 auto;

        .faq-item {
            background-color: #112240;
            border-radius: 10px;
            padding: 20px;
            margin-bottom: 20px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;

            &:hover {
                transform: translateY(-5px);
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
            }

            h3 {
                font-size: 1.5rem;
                color: #64ffda;
                margin-bottom: 10px;
            }

            p {
                font-size: 1rem;
                color: #8892b0;
                line-height: 1.6;
            }
        }
    }
</style>