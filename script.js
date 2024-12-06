// Updated blog data with broader categories and more entries
const blogData = [
  // Sports
  { id: 1, title: "Top 10 Football Players of 2024", category: "Sports", description: "A look at the best football players of the year." },
  { id: 2, title: "How to Improve Your Basketball Skills", category: "Sports", description: "Tips and drills for becoming a better basketball player." },
  { id: 3, title: "Cricket World Cup Highlights", category: "Sports", description: "Key moments from the latest Cricket World Cup." },
  
  // News
  { id: 4, title: "Global Economic Trends in 2024", category: "News", description: "A deep dive into the current global economy." },
  { id: 5, title: "The Rise of AI in Journalism", category: "News", description: "How AI is transforming the way news is reported." },
  { id: 6, title: "Breaking: Major Tech Merger Announced", category: "News", description: "Details on the latest big-tech industry merger." },
  
  // Climate
  { id: 7, title: "The Effects of Climate Change on Wildlife", category: "Climate", description: "How global warming is impacting ecosystems." },
  { id: 8, title: "Renewable Energy Innovations in 2024", category: "Climate", description: "Exciting advancements in renewable energy technology." },
  { id: 9, title: "The Paris Agreement: Progress and Challenges", category: "Climate", description: "Where the world stands on its climate goals." },
  
  // Technology
  { id: 10, title: "Top Programming Languages in 2024", category: "Technology", description: "A guide to the most in-demand programming languages." },
  { id: 11, title: "How Quantum Computing is Changing Tech", category: "Technology", description: "Understanding the impact of quantum computing." },
  { id: 12, title: "Cybersecurity Best Practices for 2024", category: "Technology", description: "Protecting your data in a digital-first world." }
];

// Updated filters to include new categories
document.getElementById("searchBtn").addEventListener("click", () => {
  const searchQuery = document.getElementById("searchBox").value.trim().toLowerCase();
  const selectedFilters = Array.from(document.querySelectorAll('.filter-checkbox:checked'))
                                .map(checkbox => checkbox.value);

  const filteredResults = blogData.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery);
    const matchesFilter = selectedFilters.length === 0 || selectedFilters.includes(blog.category);
    return matchesSearch && matchesFilter;
  });

  displayResults(filteredResults);
});

// Function to display results
function displayResults(results) {
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = ""; // Clear previous results

  if (results.length === 0) {
    resultsContainer.innerHTML = "<p>No results found.</p>";
    return;
  }

  results.forEach(blog => {
    const blogItem = document.createElement("div");
    blogItem.classList.add("result-item");

    blogItem.innerHTML = `
      <h3>${blog.title}</h3>
      <p>${blog.description}</p>
      <p><strong>Category:</strong> ${blog.category}</p>
    `;

    resultsContainer.appendChild(blogItem);
  });
}
