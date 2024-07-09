function organizeNumbers() {
    $('#organizeBtn').addClass('clicked');
    $('#values').css('margin-top', '-2px');
    setTimeout(() => {
        $('#organizeBtn').removeClass('clicked');
        $('#values').css('margin-top', '0px');
    }, 100);

    const redMessage = {
        color: 'red',
        fontWeight: '700'
    };

    const input = $('#numbers').val().split(" ");
    const answerSpace = $('#values');
    let aux;

    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if (input[j] < input[i]) {
                aux = input[j];
                input[j] = input[i];
                input[i] = aux;
            }
        }
    }

    input == '' ? answerSpace.text("Nenhum valor inserido").css(redMessage) : answerSpace.text(input.join(", ")).css('color', 'black');
}