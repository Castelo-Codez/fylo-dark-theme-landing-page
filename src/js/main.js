import "../style/output.css";
import JustValidate from "just-validate";
let $form = document.querySelector("form");
const validation = new JustValidate($form, {
    errorLabelStyle: {
        color: "rgb(255, 66, 66)",
        marginTop: "10px",
        paddingLeft: "15px",
    },
});
validation.addField($form.email, [
    {
        rule: "required",
        errorMessage: "Field is required",
    },
    {
        rule: "email",
        errorMessage: "Email is invalid!",
    },
]);
validation.onSuccess(() => {
    location.reload();
});
