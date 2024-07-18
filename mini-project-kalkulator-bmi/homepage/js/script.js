document.addEventListener('DOMContentLoaded', function() {
  const profiles = document.querySelectorAll('.profile');

  profiles.forEach(profile => {
      profile.addEventListener('click', function() {
          window.location.href = '../website/index.html';
      });
  });
});