document.getElementById("whats").addEventListener("click", function () {
    var num = "34645530655"
    var message = "Olá, gostaria de fazer um orçamento.."

    var url = "https://api.whatsapp.com/send?phone=" + num + "&text=" + encodeURIComponent(message);

    window.open(url);
});


var botao = document.getElementById("email");

botao.addEventListener("click", function () {
    var emailDestinatario = "luccabrasi.es@gmail.com";
    var assunto = "Nova mensagem";

    var corpo = "Olá,\n\nGostaria de entrar em contato com você para...\n\nAtenciosamente,\n[Seu nome]";

    var link = "mailto:" + emailDestinatario + "?subject=" + encodeURIComponent(assunto) + "&body=" + encodeURIComponent(corpo);

    // abre o link em uma nova janela
    window.open(link, "_blank");
});
