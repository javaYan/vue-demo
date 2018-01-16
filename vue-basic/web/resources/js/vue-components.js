//数字和字母的验证码组件
var verificationCodeComponent = Vue.extend({
    template:'<div class="form-group" v-cloak>' +
    '<input type="text" id="vcInputCode" class="form-control" placeholder="输入右侧图片验证码" @blur="checkInputCode()">' +
    '<input type="button" id="vcRandomCode" class="btn btn-secondary" style="text-shadow: black 1px 1px 1px;" @click="createRandomCode()"/>' +
    '<i v-if="vcCheckResult == true" class="fa fa-check desc-success"></i><i v-if="vcCheckResult == false" class="fa fa-remove desc-danger"></i>' +
    '</div>',
    data: function() {
        return {
            vcCheckResult:'N'
        }
    },
    mounted:function(){
        this.createRandomCode();
    },
    methods:{
        createRandomCode: function () {
            this.vcCheckResult = 'N';
            var sourceCode = new Array(2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z');
            var showCode = '';
            var code = '';
            for(var i = 0; i < 4; i++) {
                var index = Math.floor(Math.random()*32);
                showCode += sourceCode[index] + ' ';
                code += sourceCode[index];
            }
            $('#vcRandomCode').val(showCode);
            $('#vcRandomCode').attr("data-val", code);
            $('#vcInputCode').focus();
        },
        checkInputCode: function () {
            if ($('#vcRandomCode').attr("data-val").toLowerCase() == $('#vcInputCode').val().toLowerCase()) {
                this.vcCheckResult = true;
            } else {
                this.vcCheckResult = false;
            }
        }
    }
})