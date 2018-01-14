<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Vue Index</title>
    <script src="resources/js/vue.min.js"></script>
    <script type="text/javascript" src="resources/js/jquery-1.10.2.min.js"></script>
</head>
<body>
<div id="app">
    <table>
        <thead>
        <td>列名1</td><td>列名2</td>
        </thead>
        <tbody>
        <tr>
            <td>{{ message }}</td><td>内容2</td>
        </tr>
        <tr>
            <td>内容1</td><td>内容2</td>
        </tr>
        </tbody>
        <tr>
            <td colspan="2">
                <VerificationCode></VerificationCode>
            </td>
        </tr>
    </table>
</div>

<script>
    import VerificationCode from "./resources/verificationcode.vue";

    var appVm = new Vue({
        el: '#app',
        data: {
            message: 'Hello Vue.js!'
        },
        components: {
            VerificationCode
        }
    })
</script>

</body>
</html>
