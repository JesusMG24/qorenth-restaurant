export function initCarousel(
  wrapperId: string,
  prevBtnId: string,
  nextBtnId: string
) {
  document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.getElementById(wrapperId) as HTMLDivElement | null;
    const prevBtn = document.getElementById(
      prevBtnId
    ) as HTMLButtonElement | null;
    const nextBtn = document.getElementById(
      nextBtnId
    ) as HTMLButtonElement | null;

    if (!wrapper || !prevBtn || !nextBtn) {
      return;
    }

    let currentIndex = 0;
    const total = wrapper.children.length;

    function updateCarousel() {
      wrapper!.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + total) % total;
      updateCarousel();
    });

    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % total;
      updateCarousel();
    });
  });
}
