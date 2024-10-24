
const AutoType = () => {
     const text = "Hello, Welcome to my website!";
        let index = 0;
        const speed = 100; // typing speed in milliseconds
        const delay = 1000; // delay before restarting

        function typeEffect() {
            if (index < text.length) {
                document.getElementById('typing').innerHTML += text.charAt(index);
                index++;
                setTimeout(typeEffect, speed);
            } else {
                // After typing completes, wait for 'delay' time and restart
                setTimeout(() => {
                    document.getElementById('typing').innerHTML = ''; // Clear the text
                    index = 0; // Reset index
                    typeEffect(); // Restart typing
                }, delay);
            }
        }

        // Start typing effect after page load
        window.onload = function() {
            typeEffect();
        }

   
    return (
        <div className="text-center mt-6 text-2xl font-bold" id="typing">
            
        </div>
    );
};

export default AutoType;