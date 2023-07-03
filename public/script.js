// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
    // Get references to the search button and candidate list
    const searchButton = document.getElementById('search-button');
    const candidateList = document.getElementById('candidate-ul');
    const rankingList = document.getElementById('ranking-ul');
   
    // Add an event listener to the search button
    searchButton.addEventListener('click', function () {
      // Clear the existing candidate and ranking lists
      candidateList.innerHTML = '';
      rankingList.innerHTML = '';
  
      // Fetch candidates from the server (dummy data for demonstration)
      const candidates = [
        {
          name: 'John Doe',
          role: 'Software Developer',
          skills: [
            { name: 'JavaScript', proficiency: 80 },
            { name: 'HTML', proficiency: 90 },
            { name: 'CSS', proficiency: 70 }
          ]
        },
        {
          name: 'Jane Smith',
          role: 'UI/UX Designer',
          skills: [
            { name: 'Photoshop', proficiency: 85 },
            { name: 'Illustrator', proficiency: 75 },
            { name: 'Wireframing', proficiency: 90 }
          ]
        },{
          name: 'John Doe',
          role: 'Software Developer',
          skills: [
            { name: 'JavaScript', proficiency: 80 },
            { name: 'HTML', proficiency: 90 },
            { name: 'CSS', proficiency: 70 }
          ]
        },
        {
          name: 'John Doe',
          role: 'Software Developer',
          skills: [
            { name: 'JavaScript', proficiency: 80 },
            { name: 'HTML', proficiency: 90 },
            { name: 'CSS', proficiency: 70 }
          ]
        },
        
        

        // Add more candidates here...
      ];
  
      // Generate and append card elements for each candidate
      candidates.forEach(function (candidate) {
        const card = generateCandidateCard(candidate);
        candidateList.appendChild(card);
      });
    });
  
    // Helper function to generate the candidate card
    function generateCandidateCard(candidate) {
      const card = document.createElement('li');
      card.classList.add('candidate-card');
      card.innerHTML = `
        <div class="candidate-info">
          <h4 class="candidate-name">${candidate.name}</h4>
          <p class="candidate-role">${candidate.role}</p>
          <div class="skills">
            ${generateSkillsProgress(candidate.skills)}
          </div>
        </div>
        <button class="evaluate-button">Evaluate</button>
      `;
  
      // Add event listener to the "Evaluate" button
      const evaluateButton = card.querySelector('.evaluate-button');
      evaluateButton.addEventListener('click', function () {
        // Move the candidate card to the ranking list
        card.remove();
        rankingList.appendChild(card);
      });
  
      return card;
    }
  
    // Helper function to generate the skills progress bars
    function generateSkillsProgress(skills) {
      let progressHTML = '';
      skills.forEach(function (skill) {
        progressHTML += `
          <div class="skill">
            <span class="skill-name">${skill.name}</span>
            <div class="progress">
              <div class="progress-bar" style="width: ${skill.proficiency}%"></div>
            </div>
          </div>
        `;
      });
      return progressHTML;
    }
  });
  