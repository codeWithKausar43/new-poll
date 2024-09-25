 // Store the number of votes for each option
let votes = {
    JavaScript: 0,
    Python: 0,
    Cplusplus: 0,
    Java: 0
};

// Function to simulate voting process
function submitVote() {
    const vote = document.querySelector('input[name="vote"]:checked');
    
    if (vote) {
        const selected = vote.value;

        if (selected === "C++") {
            votes.Cplusplus++;
        } else {
            votes[selected]++;
        }

        // Simulate multiple users voting by updating results dynamically
        updateResults();
    } else {
        alert("Please select an option before voting!");
    }
}

// Update the results on the page
function updateResults() {
    document.getElementById('jsVotes').textContent = votes.JavaScript;
    document.getElementById('pyVotes').textContent = votes.Python;
     
}

// Simulate multiple users voting by adding a random vote every few seconds
function simulateMultipleUsers() {
    const options = ['Atikur', 'Monir'];

    setInterval(() => {
        const randomVote = options[Math.floor(Math.random() * options.length)];

        if (randomVote === "C++") {
            votes.Cplusplus++;
        } else {
            votes[randomVote]++;
        }

        updateResults(); // Update the poll results after each simulated vote
    }, 3000); // Change this interval to adjust the frequency of votes (3 seconds here)
}

window.onload = function() {
    simulateMultipleUsers(); // Start simulating votes from multiple users
};
