<script>
    import { fly, fade } from 'svelte/transition';

    const schedule = [
        {
            day: "Day 1 - April 29, 2025",
            events: [
                { time: "10:00 AM", title: "Doors open", description: "Official arrival time starts." },
                { time: "10:30 AM", title: "Kickoff & Welcome", description: "Opening ceremony and introduction." },
                { time: "11:00 AM", title: "Competition Begins", description: "Start building your projects!" },
                { time: "11:20 AM", title: "Workshop 1: Basic programming", description: "Learn about basic programming in python and Javascript." },
                { time: "12:30 PM", title: "Lunch", description: "Don't expect anything too fancy" },
                { time: "2:00 PM", title: "Workshop 2: Web Development", description: "Learn the fundamentals of web development with Ian Porell" },
                { time: "4:00 PM", title: "Snacks", description: "Light snack to keep your strength" },
                { time: "5:00 PM", title: "Workshop 3: AI fundamentals", description: "Learn the basics of AI and machine learning with Anish Chakraborty" },
                { time: "6:00 PM", title: "Conclusion", description: "First day ends." },
            ],
        },
        {
            day: "Day 2 - April 17, 2025",
            events: [
                { time: "8:00 AM", title: "Breakfast", description: "Start your day with a healthy breakfast." },
                { time: "10:00 AM", title: "Workshop: Blockchain 101", description: "Explore the world of blockchain technology." },
                { time: "12:00 PM", title: "Lunch", description: "Enjoy a delicious meal with fellow hackers." },
                { time: "2:00 PM", title: "Hacking Ends", description: "Submit your projects before the deadline." },
                { time: "3:00 PM", title: "Demo Presentations", description: "Showcase your projects to the judges." },
                { time: "5:00 PM", title: "Closing Ceremony", description: "Winners announced and closing remarks." },
            ],
        },
    ];
</script>

<h1>Schedule</h1>

{#each schedule as { day, events }}
    <div class="day-schedule" in:fly={{ y: 50, duration: 1000 }} out:fade>
        <h2>{day}</h2>
        <div class="events">
            {#each events as event, index}
                <div class="event" in:fly={{ y: 50, duration: 1000, delay: index * 100 }} out:fade>
                    <div class="time">{event.time}</div>
                    <div class="details">
                        <h3>{event.title}</h3>
                        <p>{event.description}</p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
{/each}

<style>
    h1 {
        font-size: 2.5rem;
        color: #64ffda;
        text-align: center;
        margin-bottom: 40px;
    }

    .day-schedule {
        margin-bottom: 60px;

        h2 {
            font-size: 2rem;
            color: #64ffda;
            text-align: center;
            margin-bottom: 20px;
        }

        .events {
            max-width: 800px;
            margin: 0 auto;

            .event {
                background-color: #112240;
                border-radius: 10px;
                padding: 20px;
                margin-bottom: 20px;
                display: flex;
                align-items: center;
                gap: 20px;
                transition: transform 0.3s ease, box-shadow 0.3s ease;

                &:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
                }

                .time {
                    font-size: 1.2rem;
                    font-weight: bold;
                    color: #64ffda;
                    min-width: 100px;
                }

                .details {
                    h3 {
                        font-size: 1.5rem;
                        color: #ccd6f6;
                        margin-bottom: 10px;
                    }

                    p {
                        font-size: 1rem;
                        color: #8892b0;
                        line-height: 1.6;
                    }
                }
            }
        }
    }
</style>