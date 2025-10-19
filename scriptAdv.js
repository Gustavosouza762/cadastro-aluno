document.addEventListener('DOMContentLoaded', () => {
    const professionCards = document.querySelectorAll('.profession-card');
    const seleçãoAvatar1 = document.getElementById('seleção-avatar1');
    const cartaAvatar1 = document.querySelectorAll('.carta-avatar1');
    const nextButton = document.getElementById('next-button');

    let selectedProfession = null;
    let selectedAvatar = null;

        const updateNextButtonState = () => {
        if (selectedProfession === 'advogado') {
            nextButton.disabled = !selectedAvatar;
        } else {
            nextButton.disabled = !selectedProfession;
        }
    };

     professionCards.forEach(card => {
        card.addEventListener('click', () => {
            professionCards.forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');

            selectedProfession = card.getAttribute('data-profession');
            selectedAvatar = null;

             if (selectedProfession === 'advogado') {
                seleçãoAvatar1.style.display = 'block';
                setTimeout(() => {
                    seleçãoAvatar1.style.opacity = '1';
                    seleçãoAvatar1.style.transform = 'translateY(0)';
                }, 10);
            } else {
                seleçãoAvatar1.style.opacity = '0';
                seleçãoAvatar1.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    seleçãoAvatar1.style.display = 'none';
                }, 500);
            }

            cartaAvatar1.forEach(c => c.classList.remove('selected'));
            updateNextButtonState();
        });
    });

     cartaAvatar1.forEach(card => {
        card.addEventListener('click', () => {
            cartaAvatar1.forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');

            selectedAvatar = card.getAttribute('data-avatar2');
            updateNextButtonState();
        });
    });

    nextButton.addEventListener('click', () => {
        if (!nextButton.disabled) {
            console.log('Profissão selecionada:', selectedProfession);
            if (selectedProfession === 'advogado') {
                console.log('Avatar selecionado:', selectedAvatar);
            }
            alert(`Você escolheu a profissão: ${selectedProfession} e o avatar: ${selectedAvatar}. Pronto para a próxima etapa!`);
        }
    });
});


// Seleciona todas as cartas de avatar
const cartaAvatar1 = document.querySelectorAll('.carta-avatar1');

cartaAvatar1.forEach(card => {
  card.addEventListener('click', () => {
    const inner = card.querySelector('.card-inner');
    inner.classList.toggle('is-flipped');
  });
});
