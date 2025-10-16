document.addEventListener('DOMContentLoaded', () => {
    const professionCards = document.querySelectorAll('.profession-card');
    const seleçãoAvatar = document.getElementById('seleção-avatar');
    const cartaAvatar = document.querySelectorAll('.carta-avatar');
    const nextButton = document.getElementById('next-button');

    let selectedProfession = null;
    let selectedAvatar = null;

        const updateNextButtonState = () => {
        if (selectedProfession === 'bombeiro') {
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

             if (selectedProfession === 'bombeiro') {
                seleçãoAvatar.style.display = 'block';
                setTimeout(() => {
                    seleçãoAvatar.style.opacity = '1';
                    seleçãoAvatar.style.transform = 'translateY(0)';
                }, 10);
            } else {
                seleçãoAvatar.style.opacity = '0';
                seleçãoAvatar.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    seleçãoAvatar.style.display = 'none';
                }, 500);
            }

            cartaAvatar.forEach(c => c.classList.remove('selected'));
            updateNextButtonState();
        });
    });

     cartaAvatar.forEach(card => {
        card.addEventListener('click', () => {
            cartaAvatar.forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');

            selectedAvatar = card.getAttribute('data-avatar1');
            updateNextButtonState();
        });
    });

    nextButton.addEventListener('click', () => {
        if (!nextButton.disabled) {
            console.log('Profissão selecionada:', selectedProfession);
            if (selectedProfession === 'bombeiro') {
                console.log('Avatar selecionado:', selectedAvatar);
            }
            alert(`Você escolheu a profissão: ${selectedProfession} e o avatar: ${selectedAvatar}. Pronto para a próxima etapa!`);
        }
    });
});
