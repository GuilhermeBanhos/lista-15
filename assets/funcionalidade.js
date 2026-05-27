document.addEventListener('DOMContentLoaded', function () {
    const botoesFiltro = document.querySelectorAll('#menu-lateral .list-group-item');
    const itensPrato = document.querySelectorAll('.item-prato');

    botoesFiltro.forEach(botao => {
        botao.addEventListener('click', function () {
            botoesFiltro.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const categoriaSelecionada = this.getAttribute('data-categoria');

            itensPrato.forEach(item => {
                const categoriaItem = item.getAttribute('data-categoria');
                if (categoriaSelecionada === 'todos' || categoriaItem === categoriaSelecionada) {
                    item.classList.remove('d-none');
                } else {
                    item.classList.add('d-none');
                }
            });
        });
    });

    const botoesPedir = document.querySelectorAll('.btn-pedir');
    botoesPedir.forEach(botao => {
        botao.addEventListener('click', function () {
            const nomePrato = this.closest('.card-body').querySelector('.card-title').textContent;
            alert(`Sucesso! O prato "${nomePrato}" foi adicionado ao seu pedido.`);
        });
    });
});