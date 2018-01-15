var verificationCodeComponent = Vue.extend({
    template: '<div id="verificationCode">' +
    '<input type="text" id="inputCode" @blur="checkCode()" placeholder="请输入验证码">' +
    '<input type="button" id="randomCode" @click="createCode()">' +
    '<span id="checkResult" style="color:red"></span>' +
    '</div>',
    data: function () {
        return {}
    },
    mounted: function () {
        this.createCode();
    },
    methods: {
        createCode: function () {
            var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
            var code = '';
            for (var i = 0; i < 4; i++) {
                var index = Math.floor(Math.random() * 36);
                code += random[index];
            }
            $('#randomCode').val(code);
            $('#checkResult').text('');
            $('#inputCode').focus();
        },
        checkCode: function () {
            if ($('#inputCode').val() == $('#randomCode').val()) {
                $('#checkResult').text("验证成功");
            } else {
                $('#checkResult').text("验证码不匹配");
            }
        }
    }
})
