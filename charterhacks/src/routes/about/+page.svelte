<script>
    import { fly, fade } from 'svelte/transition';
</script>

<h1 in:fly={{ y: -50, duration: 1000 }} out:fade>About CharterHacks</h1>

<div class="about-content">
    <div class="about-section" in:fly={{ y: 50, duration: 1000, delay: 200 }} out:fade>
        <h2>What is CharterHacks?</h2>
        <p>
            CharterHacks is a 24-hour hackathon where innovators, creators, and problem-solvers come together to build
            groundbreaking projects. Whether you're a seasoned developer or a first-time hacker, CharterHacks is the perfect
            place to learn, collaborate, and create.
        </p>
    </div>

    <div class="about-section" in:fly={{ y: 50, duration: 1000, delay: 400 }} out:fade>
        <h2>Our Mission</h2>
        <p>
            Our mission is to empower individuals to use technology to solve real-world problems. We believe in fostering a
            community of creativity, collaboration, and innovation. CharterHacks is more than just a hackathon—it's a platform
            for change.
        </p>
    </div>

    <div class="about-section" in:fly={{ y: 50, duration: 1000, delay: 600 }} out:fade>
        <h2>Join Us</h2>
        <p>
            Ready to be part of something amazing? Register now and join us for an unforgettable experience. Whether you're here
            to learn, build, or compete, CharterHacks has something for everyone.
        </p>
        <a href="https://forms.gle/sNiKr7SGaqHuAwnk8" class="btn-primary">Register Now</a>
    </div>
</div>

<style>
    h1 {
        font-size: 2.5rem;
        color: #64ffda;
        text-align: center;
        margin-bottom: 40px;
    }

    .about-content {
        max-width: 800px;
        margin: 0 auto;

        .about-section {
            background-color: #112240;
            border-radius: 10px;
            padding: 20px;
            margin-bottom: 40px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;

            &:hover {
                transform: translateY(-5px);
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
            }

            h2 {
                font-size: 2rem;
                color: #64ffda;
                margin-bottom: 10px;
            }

            p {
                font-size: 1rem;
                color: #8892b0;
                line-height: 1.6;
                margin-bottom: 20px;
            }

            .btn-primary {
                background-color: #64ffda;
                color: #0a192f;
                padding: 10px 20px;
                border-radius: 5px;
                text-decoration: none;
                font-weight: bold;
                transition: transform 0.3s ease;

                &:hover {
                    transform: scale(1.1);
                }
            }
        }
    }
</style>