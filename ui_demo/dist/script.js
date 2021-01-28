$('#next').click(function () {
    var $next = $('.progress ul li.current').removeClass('current').addClass('complete').next('li');
    if ($next.length) {
        $next.removeClass('complete').addClass('current');
        //console.log('Prev');
    } else {
        $(".progress ul li:first").removeClass('complete').addClass('current');
        if (".progress ul li:last") {
            $('.progress ul li').removeClass('current').removeClass('complete').removeAttr('class');
            $(".progress ul li:first").addClass('current');
        }
        //console.log('Next');
    }
});
$('#prev').click(function () {
    var $prev = $('.progress ul li.current').removeClass('current').removeClass('complete').removeAttr('class').prev('li');
    if ($prev.length) {
        $prev.removeClass('complete').addClass('current');
        //console.log('Prev');
    } else {
        $(".progress ul li:first").removeClass('complete').addClass('current');
        $(".progress ul li:last").removeClass('current').removeClass('complete').removeAttr('class');
        //console.log('Prev');
    }
});


function fileValidation() {
    var fileInput =
        document.getElementById('file');

    var filePath = fileInput.value;

    // Allowing file type
    var allowedExtensions =
        /(\.pdf|\.docs|\.docx|\.gif)$/i;

    if (!allowedExtensions.exec(filePath)) {
        alert('Seuls les formats pdf et docs sont permis');
        fileInput.value = '';
        return false;
    } else {
        alert('vous avez choisi un bon format');

    }
}

$(document).ready(function () {

    var navListItems = $('div.setup-panel div a'),
        allWells = $('.setup-content'),
        allNextBtn = $('.nextBtn');

    allWells.hide();

    navListItems.click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
            $item = $(this);

        if (!$item.hasClass('disabled')) {
            navListItems.removeClass('btn-success').addClass('btn-default');
            $item.addClass('btn-success');
            allWells.hide();
            $target.show();
            $target.find('input:eq(0)').focus();
        }
    });

    allNextBtn.click(function () {
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='url']"),
            isValid = true;

        $(".form-group").removeClass("has-error");
        for (var i = 0; i < curInputs.length; i++) {
            if (!curInputs[i].validity.valid) {
                isValid = false;
                $(curInputs[i]).closest(".form-group").addClass("has-error");
            }
        }

        if (isValid) nextStepWizard.removeAttr('disabled').trigger('click');
    });

    $('div.setup-panel div a.btn-success').trigger('click');
});
