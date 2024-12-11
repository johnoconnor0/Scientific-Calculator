// Ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
    // Function to plot the graph
    function plotGraph(equation) {
        const graphCanvas = document.getElementById('graph-canvas');
        const ctx = graphCanvas.getContext('2d');

        // Clear existing chart if any
        if (window.currentChart) {
            window.currentChart.destroy();
        }

        const xValues = [];
        const yValues = [];

        // Generate x and y values based on the input equation
        for (let x = -10; x <= 10; x += 0.1) {
            try {
                const y = eval(equation.replace(/x/g, `(${x})`)); // Safely replace x
                xValues.push(x);
                yValues.push(y);
            } catch (err) {
                console.error('Invalid equation:', err);
                document.getElementById('error-message').textContent = 'Invalid equation! Check your syntax.';
                return;
            }
        }

        // Create the chart
        window.currentChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: xValues,
                datasets: [
                    {
                        label: `y = ${equation}`,
                        data: yValues,
                        borderColor: 'blue',
                        borderWidth: 2,
                        fill: false,
                    },
                ],
            },
            options: {
                responsive: true,
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'x-axis',
                        },
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'y-axis',
                        },
                    },
                },
            },
        });

        // Clear any previous error message
        document.getElementById('error-message').textContent = '';
    }

    // Attach to global namespace
    window.plotGraph = plotGraph;
});
