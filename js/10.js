
    document.addEventListener('DOMContentLoaded', () => {
      const chips = document.querySelectorAll('.stage .p-span');

      const io = new IntersectionObserver((entries, obs) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('animate__animated','animate__fadeInUp');
            obs.unobserve(e.target); // 播一次就解除
          }
        });
      }, { threshold: 0.2 });

      chips.forEach(el => io.observe(el));
    });