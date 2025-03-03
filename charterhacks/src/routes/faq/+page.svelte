<script>
    import { fly, fade } from 'svelte/transition';

    const faqs = [
        {
            question: "What is CharterHacks?",
            answer: "CharterHacks is a 2 day hackathon where participants collaborate to build innovative projects.",
        },
        {
            question: "Who can participate?",
            answer: "Anyone with a passion for technology and innovation can participate, regardless of experience level. We will have 2 divisions, one for high school, and one for middle school.",
        },
        {
            question: "Do I need a team?",
            answer: "You can participate solo or in teams of up to 6 people. We recommend a minimum of 2 people to build the spirit of collaboration. Note that having too many people can be an obstacle too!",
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
            answer: "Yes, we'll provide food and drinks at the event.",
        },
        {
            question: "I have another question",
            answer: "Feel free to email the organizers at safro.david@charterschool.org or chakraborty.anish@charterschool.org with any additional questions.",
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