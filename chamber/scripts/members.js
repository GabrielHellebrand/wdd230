document.addEventListener('DOMContentLoaded', function () {
    const membersContainer = document.getElementById('members');
    const toggleViewButton = document.getElementById('toggle-view-button');

    // Function to render members based on the current view mode
    function renderMembers(members, viewMode) {
        membersContainer.innerHTML = ''; // Clear existing content

        members.forEach(member => {
            const memberElement = document.createElement(viewMode === 'grid' ? 'div' : 'li');
            memberElement.classList.add(viewMode === 'grid' ? 'member-card' : 'member-list-item');

            // Customize this based on your member data structure
            memberElement.innerHTML = `
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>Phone: ${member.phone}</p>
                <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
                <!-- Add more member information as needed -->
            `;

            membersContainer.appendChild(memberElement);
        });
    }

    // Load JSON data
    fetch('./data/members.json')
        .then(response => response.json())
        .then(data => {
            const members = data.members;

            // Initial render in grid view
            renderMembers(members, 'grid');

            // Toggle between grid and list views
            toggleViewButton.addEventListener('click', function () {
                const currentViewMode = membersContainer.classList.contains('grid-view') ? 'list' : 'grid';
                membersContainer.classList.toggle('grid-view');
                membersContainer.classList.toggle('list-view');
                renderMembers(members, currentViewMode);
            });
        })
        .catch(error => console.error('Error fetching members data:', error));
});